"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { BsFillSendFill } from "react-icons/bs";

const layout = {
  labelCol: { span: 24 }, // Make label take up full width
  wrapperCol: { span: 24 }, // Make input take up full width
};

// Define the interface for form values
interface FormValues {
  user: {
    name: string;
    email: string;
    introduction: string;
  };
}

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: FormValues) => {
  console.log(values);
};

const App: React.FC = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["user", "name"]}
      label="Name"
      rules={[{ required: true }]}
      className="flex flex-col space-y-2"
    >
      <Input
        className="!text-primary !border-primary placeholder:!text-primary font-medium !py-4 !px-5"
        placeholder="Enter your full name"
      />
    </Form.Item>

    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[{ required: true }]}
      className="flex flex-col space-y-2"
    >
      <Input
        className="!text-primary !border-primary placeholder:!text-primary font-medium !py-4 !px-5"
        placeholder="Enter your email address"
      />
    </Form.Item>

    <Form.Item
      name={["user", "introduction"]}
      label="Message"
      rules={[{ required: true }]}
      className="flex flex-col space-y-2"
    >
      <Input.TextArea
        className="!text-primary !border-primary placeholder:!text-primary font-medium !py-4 !px-5 !h-[243px]"
        placeholder="Enter your message"
      />
    </Form.Item>

    <Form.Item label={null}>
      <div className="bg-primary rounded-full pl-2 pr-[2px] py-[2px] w-fit flex justify-between items-center md:float-end">
        <Button
          type="primary"
          htmlType="submit"
          className="!bg-transparent quick_sand !font-bold uppercase"
        >
          Send
        </Button>
        <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
          <BsFillSendFill className="text-fontGray" />
        </span>
      </div>
    </Form.Item>
  </Form>
);

export default App;
