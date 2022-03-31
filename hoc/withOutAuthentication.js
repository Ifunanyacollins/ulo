import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const withAuthenticationNotRequired = (Component) => {
  return function WithAuthenticationRequired(props) {
    const { status, session, backToPreviousAfterAuth } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (status === "authenticated") {
        backToPreviousAfterAuth();
        return;
      }
    }, [status, session]);
    if (status === "loading" && !session) {
      return null;
    }

    return status === "unauthenticated" && <Component {...props} />;
  };
};

export default withAuthenticationNotRequired;
