import { auth } from "../../utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Card, Input, Button, Divider, Form } from "antd";
import Title from "antd/lib/typography/Title";
import { Google } from "../../customIcon";
import Logo from "../../components/resuables/Logo";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import getErrorMessage from "../../utils/authErrorCodes";
import withAuthenticationNotRequired from "../../hoc/withOutAuthentication";
const provider = new GoogleAuthProvider();
function Login(props) {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState({ message: null, type: null });
  const { backToPreviousAfterAuth } = useAuth();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("///$$$#####WELCOME TO THE CLUB//////$$$$$$$$");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(getErrorMessage(errorCode));
      });
  };

  const handleSubmit = ({ email, password }) => {
    setProcessing(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setProcessing(false);
        backToPreviousAfterAuth();
      })
      .catch((error) => {
        setProcessing(false);
        const errorCode = error.code;
        console.log(errorCode);
        setError(getErrorMessage(errorCode));
      });
  };
  return (
    <section
      className="bg-no-repeat bg-cover bg-center object-contain h-screen overflow-y-hidden flex items-center"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: `url(
          https://firebasestorage.googleapis.com/v0/b/ulom-43d1b.appspot.com/o/natalie-pedigo-wJK9eTiEZHY-unsplash.jpg?alt=media&token=59d24ee3-b80d-413f-904a-f11890a84a41
        )`,
      }}
    >
      <section className="lg:w-4/5 w-full m-auto flex lg:h-3/4 h-full">
        <div className="hidden lg:flex items-center space-x-2">
          <Logo />
          <span className="font-bold text-white">
            Over 1 Million online communities near you
          </span>
        </div>
        <div className="flex-auto flex-shrink-0 flex justify-end">
          <Card className="h-full lg:w-2/3 w-full">
            <div className="lg:p-5 p-2">
              <Title level={1}>Create an account</Title>
              <div>
                <span
                  onClick={handleGoogle}
                  className="border-2 rounded-full h-14 w-14 cursor-pointer flex justify-center items-center"
                >
                  <Google />
                </span>
              </div>
              <Divider>OR</Divider>
              <div className="my-3">
                <span className="font-bold text-base block">
                  Sign up with email
                </span>
                <span>
                  Already have an account?
                  <a className="text-blue-500"> Sign in</a>
                </span>
              </div>
              {error.message && (
                <p className="mt-2 text-red-500">{error.message}</p>
              )}
              <Form
                layout="vertical"
                onFinish={handleSubmit}
                onValuesChange={() => {
                  if (error.message) {
                    setError({ message: null, type: null });
                  }
                }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password size="large" className="rounded-lg" />
                </Form.Item>
                <div className="flex justify-end">
                  <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    loading={processing}
                  >
                    Create account
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </section>
    </section>
  );
}

export default withAuthenticationNotRequired(Login);
