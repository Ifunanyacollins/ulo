import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import useAuth from "./useAuth";

const useFirebase = () => {
  const { session } = useAuth();
  const handleUploads = (data, getProgress = (p) => p, callback) => {
    const storage = getStorage();
    const { c_logo } = data;
    const storageRef = ref(storage, `/user/${session.uid}/${c_logo.name}`);

    const uploadTask = uploadBytesResumable(storageRef, c_logo);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress) {
          getProgress(progress);
        }
      },
      (error) => {
        callback(null, error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          callback({ downloadURL, ...data }, null);
        });
      }
    );
  };

  return { handleUploads };
};

export default useFirebase;
