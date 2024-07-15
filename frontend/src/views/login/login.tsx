import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { login } from "../../common/api/loginapi";

const { Item } = Form;

interface res {
  token: String;
  message: String;
}

const LoginView = () => {
  const navigate = useNavigate();
  const handleOnFisish = async () => {
    const { username, password } = form.getFieldsValue();
    await login({ username, password }).then((res) => {
      console.log(res.message);
      if (!res.message) {
        return;
      }
      localStorage.setItem("authtoken", res.token);
      const token = localStorage.getItem("authtoken");
      if (token) {
        navigate("/");
      }
      return;
    });
  };

  const [form] = Form.useForm();
  return (
    <div className="w-full h-screen bg-neutral-500 flex justify-center items-center">
      <div className="bg-white p-5 border rounded-lg w-1/3 h-4/5">
        <div className="container flex flex-col items-center gap-7 p-5">
          <h1 className="text-3xl pb-4">Welcome</h1>
          <Form
            className="w-full flex flex-col"
            onFinish={handleOnFisish}
            form={form}
          >
            <Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Không biết nhập tên tài khoản à ?",
                },
              ]}
            >
              <Input
                className="p-4 outline-none shadow rounded-full w-full"
                placeholder="Username"
              />
            </Item>
            <Item
              name="password"
              rules={[{ required: true, message: "Nhập mật khẩu đi cmm" }]}
            >
              <Input.Password
                className="p-4 outline-none shadow rounded-full w-full"
                placeholder="Password"
              />
            </Item>
            <Item>
              <Button
                type="default"
                htmlType="submit"
                className="w-full shadow p-6 rounded-full"
              >
                Submit
              </Button>
            </Item>
          </Form>
          <div className="flex justify-between w-full">
            <a>Forgot Password?</a>
            <a>Sign up</a>
          </div>
          <hr className="bg-red w-full" />
          <h3>OR LOGIN WITH</h3>
          <div className="flex gap-5">
            <FaGoogle className="text-4xl cursor-pointer" />
            <FaFacebook className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
