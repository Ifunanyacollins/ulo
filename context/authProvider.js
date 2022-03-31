import { useRouter } from "next/router";
import { auth } from "../utils/firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const { asPath, push } = useRouter();
  const [history, setHistory] = useState([]);
  const [session, setSession] = useState(null);
  const [status, setStatus] = useState("loading");

  function backToPreviousAfterAuth() {
    if (history.length > 0) {
      push(history[history.length - 1]);
      return;
    }
    return push("/");
  }

  const value = {
    backToPreviousAfterAuth,
    session,
    status,
  };

  useEffect(() => {
    if (!asPath.includes("auth")) {
      setHistory((previous) => [...previous, asPath]);
    }
  }, [asPath]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setStatus("authenticated");
        setSession(user);
      } else {
        setStatus("unauthenticated");
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {status === "loading" && <p>loading....</p>}
      {status !== "loading" && session && children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
