import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form } from "antd";
import backgroundImage from "../../assets/Login.png"; // Adjust the path based on your project structure

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    // Simulate authentication here
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard"); // Navigate to the dashboard after login
    }, 1000); // Mock async delay
  };

  return (
    <div className="flex h-screen">
      {/* Left Side with Image */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Right Side with Form */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-8 text-left">
            Login My Stock
          </h2>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="username"
              label="Username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full"
                size="large"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
