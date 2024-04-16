import { Form } from "antd";
import React from "react";
import { Link } from "react-router-dom";
function login() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white">
      <div className="card w-400 p-3 bg-white">
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="text-2xl">
              QuizGramm Login <i class="ri-login-circle-line"></i>
            </h1>
          </div>
          <div className="divider w-100"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item name="email" label="Email">
              <input type="text" />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <input type="password" />
            </Form.Item>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="primary-contained-btn mt-2 w-100"
              >
                Login
              </button>
              <Link to="/register" className="underline">
                Not a member yet? Register
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default login;
