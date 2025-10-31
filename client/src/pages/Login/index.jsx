import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { login } from "../../api/auth";
const Login = () => {
  const onFinish = async (values) => {
    try {
      const userData = await login(values);
      if (userData.success) {
        message.success(userData.message);
      } else {
        message.error(userData.message);
      }
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <>
      <main className="App-header">
        <h1>Login</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[
                {
                  required: true,
                  message: "Email is required",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input id="email" type="email" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
            >
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1.1rem" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>

          <p>
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default Login;
