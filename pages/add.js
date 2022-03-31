import React, { useState } from "react";
import { Button, Card, Form, Input, message } from "antd";
import Container from "../components/layout/Container";
import withAuthenticationRequired from "../hoc/withAuthentication";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import useFirebase from "../hooks/useFirebase";
import useAuth from "../hooks/useAuth";

function AddCommunity(props) {
  const { handleUploads } = useFirebase();
  const [form] = Form.useForm();
  const { session } = useAuth();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processing, setProccessing] = useState(false);
  const [file, setFile] = useState(null);
  const handleSubmit = (values) => {
    setProccessing(true);
    handleUploads({ c_logo: file, ...values }, setUploadProgress, callback);
  };

  const callback = (data, error) => {
    if (error) {
      return message.error(error.message);
    }
    const payload = {
      c_country: data.c_country,
      c_description: data.c_description,
      c_logo: data.downloadURL,
      c_name: data.c_name,
      c_number_of_active_member: data.c_number_of_active_member,
      c_tags: data.c_tags,
      c_access: data.c_access,
      isPromoted: false,
      noAction: false,
      author: session.uid,
    };
    addDoc(collection(db, "communities"), payload)
      .then((res) => {
        setProccessing(false);
        form.resetFields();
        message.success("Community add successfully ✨ ✨");
      })
      .catch((error) => {
        setProccessing(false);
        message.error(error.message);
      });
  };
  return (
    <Container>
      <div className="md:w-1/2 w-full m-auto">
        <Card>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Community name is required",
                },
              ]}
              name="c_name"
              label="Community name"
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Community origin is required",
                },
              ]}
              name="c_country"
              label="Community's country of origin"
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Community access is required",
                },
              ]}
              name="c_access"
              label="Community's access (url to join group)"
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="c_tags"
              label="Tags (separate each tag with a comma)"
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item label="Logo url">
              <input
                type="file"
                size="large"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Number of active members is required",
                },
              ]}
              name="c_number_of_active_member"
              label="Number of active members"
            >
              <Input size="large" placeholder="" />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Description is required",
                },
              ]}
              name="c_description"
              label="Description"
            >
              <Input.TextArea size="large" placeholder="" />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-end">
                <Button loading={processing} type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Container>
  );
}

export default withAuthenticationRequired(AddCommunity);
