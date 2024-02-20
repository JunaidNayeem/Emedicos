import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import axios from "axios";
import "../assets/sass/admin.scss";
import HeaderComponent from "./Header";

const AdminForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("your_api_endpoint", values);
      console.log("API Response:", response.data);

      form.resetFields();
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="AdminForm-Container">
        <h1>Pateint details</h1>
        <Card>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter the name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: "Please enter the age" }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              name="mobile"
              label="Mobile"
              rules={[
                { required: true, message: "Please enter the mobile number" },
              ]}
            >
              <Input type="tel" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default AdminForm;
