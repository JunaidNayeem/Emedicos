import { Form, Input, Button, Layout, Card } from "antd";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./Header";
import "../assets/sass/login.scss";

const { Content } = Layout;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    const { email, password } = values;
    if (email === "admin@gmail.com" && password === "Admin@123") {
      navigate("/admin");
    }
    if (email === "normal@gmail.com" && password === "Normal@123") {
      navigate("/location");
    }
  };

  return (
    <>
      <HeaderComponent />
      <Content>
        <div className="LoginForm-Container">
          <h1>Login</h1>
          <Card>
            <Form name="login" style={{ maxWidth: 600 }} onFinish={onFinish}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not a valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
                <a className="forgot">Forgot password ?</a>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    </>
  );
};

export default Login;
