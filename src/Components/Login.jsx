import { Form, Input, Button, Layout, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./Header";
import "../assets/sass/login.scss";

const { Content } = Layout;

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { email, password } = values;
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
    if (email === "admin@gmail.com" && password === "Admin@123") {
      localStorage.setItem("authorized", true);
      message.success("Logged in Successfully");
      navigate("/admin");
<<<<<<< HEAD
    } else if (response.ok){
      alert(`Welcome , ${data.user.name}!`);
        form.resetFields();
=======
    } else if (email === "normal@gmail.com" && password === "Normal@123") {
      localStorage.setItem("authorized", true);
      message.success("Logged in Successfully");
      navigate("/location");
    } else {
      message.error("Wrong Credentials");
>>>>>>> 4511da4df89be08297f19ca7d0c906bd27d31f67
    }
    else {
        alert('Login failed. Please check your credentials.');
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
