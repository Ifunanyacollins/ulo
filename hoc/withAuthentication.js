import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const withAuthenticationRequired = (Component) => {
  return function WithAuthenticationRequired(props) {
    const { status, session } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.replace("/auth");
        return;
      }
    }, [status, session]);

    return status === "authenticated" && <Component {...props} />;
  };
};

export default withAuthenticationRequired;
