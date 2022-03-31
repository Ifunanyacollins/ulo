// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpyrEqRSCK4-j8jsiX7EW4HniHHxVwtzE",
  authDomain: "ulom-43d1b.firebaseapp.com",
  projectId: "ulom-43d1b",
  storageBucket: "ulom-43d1b.appspot.com",
  messagingSenderId: "247613159654",
  appId: "1:247613159654:web:ae59adb98c11e5154fa327",
  measurementId: "G-J3KXPFST4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
