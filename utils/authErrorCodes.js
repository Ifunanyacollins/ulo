const getErrorMessage = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return {
        message: `This email address already exists. Sign in`,
        type: "email",
      };
    case "auth/weak-password":
      return {
        message: "Use a strong password",
        type: "password",
      };

    default:
      return {
        message: "Something went wrong",
        type: "general",
      };
  }
};

export default getErrorMessage;
