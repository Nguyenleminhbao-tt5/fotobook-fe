"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useLoginMutation } from "@/redux/service/user-api";
import Loading from "@/components/common/spin/page";
import IUser from "@/interfaces/user-interface";
import { useRouter } from "next/navigation";
import IResponse from "@/interfaces/response-interface";
import useUser from "@/stores/user-store";
import Link from "next/link";

type LoginType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const router = useRouter();
  const [login, resultLogin] = useLoginMutation();
  const { user, setUser } = useUser();

  const handleLogin = ({ email, password, remember }: LoginType) => {
    if (email && password) {
      login({ email, password })
        .unwrap()
        .then((response: IResponse) => {
          setUser(response.message as IUser);
          localStorage.setItem(
            "accessToken",
            String(response.message.accessToken)
          );
          localStorage.setItem(
            "refreshToken",
            String(response.message.refreshToken)
          );
          router.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLoginFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="normal_login"
      className="login-form m-auto"
      initialValues={{ remember: true }}
      onFinish={handleLogin}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button bg-green-500"
        >
          {resultLogin.isSuccess ? <Loading size="small" /> : "Login"}
        </Button>
        Or <Link href="./signup">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default Login;
