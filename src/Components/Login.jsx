import React, { Component } from "react";
import "../assets/sass/login.scss";
import HeaderComponent from "./Header";
const { Content } = Layout;
import { Form, Input, Button,Layout } from 'antd';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <Content>
          <div className="LoginForm-Container">
            <h1>Login</h1>
            <Form
              ref={this.formRef}
              name="login"
              style={{ maxWidth: 600 }}
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not a valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
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
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" >
                  Login
                </Button>
                <a className="forgot">Forgot password ?</a>
              </Form.Item>
           
            </Form>
          </div>
        </Content>
      </>
    );
  }
}


