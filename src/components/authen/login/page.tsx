import Image from "next/image";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useLoginMutation } from "@/redux/service/user-api";
import { Loading } from "@/components/common";
import IUser from "@/interfaces/user-interface";
import { useRouter } from "next/navigation";
import IResponse from "@/interfaces/response-interface";
import useUser from "@/stores/user-store";

type LoginType = {
  email?: string;
  password?: string;
  remember?: string;
};

const FotobookThumb = () => {
  return (
    <>
      <Image
        src={"/thumb/fotobook-full.png"}
        width={300}
        height={100}
        alt="Fotobook Logo"
        className="-ml-7 py-4"
      />
      <p className="text-2xl">
        Fotobook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
        bạn.
      </p>
    </>
  );
};

const LoginForm = () => {
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
        .catch((err: any) => console.log(err));
    }
  };

  const handleLoginFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="normal_login"
      className="login-form bg-white flex flex-col p-5 rounded-xl"
      initialValues={{ remember: true }}
      onFinish={handleLogin}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Hãy nhập email của bạn!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          className="border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
          placeholder="Email hoặc số điện thoại!"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Hãy nhập mật khẩu của bạn!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          className="border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="password"
          placeholder="Mật khẩu"
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me?</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full login-form-button bg-blue-600 p-5 my-2 text-lg font-bold text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
        >
          {resultLogin.isSuccess ? <Loading size="small" /> : "Đăng nhập"}
        </Button>
      </Form.Item>

      <p className="w-full login-form-forgot cursor-pointer text-blue-600 text-sm -mt-5 text-center hover:underline">
        Quên mật khẩu?
      </p>
      <div className="my-5">
        <hr />
      </div>

      <Button
        className="w-fit bg-green-500 p-5 my-5 text-lg font-bold text-white rounded-md hover:bg-green-600 mx-auto flex items-center justify-center"
        href="./signup"
      >
        Tạo tài khoản mới!
      </Button>
    </Form>
  );
};

export { FotobookThumb, LoginForm };
