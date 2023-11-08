"use client";

import React from "react";
import { AutoComplete, Button, Form, Input, Select } from "antd";
import { useSignUpMutation } from "@/redux/service/user-api";
import IUser from "@/interfaces/user-interface";

const { Option } = Select;

type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
  sex: "male" | "female";
};

const SignUp = () => {
  const [signUp, resultSignup] = useSignUpMutation();

  const handleSignUp = ({
    firstName,
    lastName,
    email,
    password,
    dob,
    sex,
  }: RegisterType) => {
    const newUser: IUser = {
      firstName,
      lastName,
      email,
      password,
      dob,
      sex,
    };
    signUp(newUser)
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Form
      name="register"
      onFinish={handleSignUp}
      style={{ maxWidth: 600 }}
      scrollToFirstError
      className="m-auto"
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: "Please input the first name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: "Please input the last name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
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
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="dob"
        label="Date of Birth"
        rules={[{ required: true, message: "Please input the Date of Birth!" }]}
      >
        <Input type="date" />
      </Form.Item>

      <Form.Item
        name="sex"
        label="Sex"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className=" bg-green-500">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
