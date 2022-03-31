import { Button, Form, Input } from "antd";
import React from "react";
import withAuthenticationRequired from "../../hoc/withAuthentication";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import Container from "../../components/layout/Container";

function Dashboard(props) {
  const auth = getAuth();
  const handleSubmit = async (values) => {
    const docRef = await addDoc(collection(db, "cities"), values);

    console.log("Document written with ID: ", docRef.id);
  };
  return (
    <Container>
      <Form onFinish={handleSubmit}>
        <div>
          <div></div>
          <Form.Item label="community name">
            <Input />
          </Form.Item>
        </div>

        <Form.Item label="country">
          <Input />
        </Form.Item>

        <Form.Item label="tags">
          <Input />
        </Form.Item>

        <Form.Item label="tags">
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default withAuthenticationRequired(Dashboard);
