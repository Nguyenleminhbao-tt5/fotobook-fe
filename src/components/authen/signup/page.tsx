import { useSignUpMutation } from "@/redux/service/user-api";
import { Button, Form, Input, Select } from "antd";
import IUser from "@/interfaces/user-interface";
import useUser from "@/stores/user-store";
import { useRouter } from "next/navigation";
const { Option } = Select;

type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
  sex: "male" | "female";
};

const SignUpForm = () => {
  const router = useRouter();
  const [signUp, resultSignup] = useSignUpMutation();
  const { user, setUser } = useUser();

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
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="text-black bg-white p-5 rounded-xl">
      <div className="w-full flex flex-col items-center justify-center pb-5">
        <strong className="text-2xl">Tạo tài khoản mới</strong>
        <span>Nhanh chóng và dễ dàng.</span>
      </div>
      <Form
        name="register"
        onFinish={handleSignUp}
        style={{ maxWidth: 600 }}
        scrollToFirstError
        className="m-auto"
      >
        <Form.Item
          name="firstName"
          label="Họ"
          rules={[{ required: true, message: "Hãy nhập tên họ của bạn!" }]}
        >
          <Input placeholder="Họ" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Tên"
          rules={[{ required: true, message: "Hãy nhập tên của bạn!" }]}
        >
          <Input placeholder="Tên" />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Email không hợp lệ!",
            },
            {
              required: true,
              message: "Hãy nhập email của bạn!",
            },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu của bạn!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Xác nhận mật khẩu"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Hãy xác nhận lại mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu xác nhận lại không khớp!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Xác nhận mật khẩu" />
        </Form.Item>

        <Form.Item
          name="dob"
          label="Ngày sinh"
          rules={[{ required: true, message: "Hãy nhập ngày sinh của bạn!" }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item
          name="sex"
          label="Giới tính"
          rules={[{ required: true, message: "Hãy chọn giới tính của bạn!" }]}
        >
          <Select placeholder="Giới tính">
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-fit bg-green-500 py-3 px-10 text-lg font-bold text-white rounded-md hover:bg-green-600 mx-auto flex items-center justify-center"
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
      <p
        onClick={() => router.push("/authen/login")}
        className="-mt-2 cursor-pointer text-blue-600 text-sm text-center hover:underline"
      >
        Bạn đã có tài khoản ư?
      </p>
    </div>
  );
};

export default SignUpForm;
