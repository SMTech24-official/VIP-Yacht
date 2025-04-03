"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Steps,
  Select,
  Radio,
  Typography,
  Row,
  Col,
  Space,
} from "antd";
import { BsFillSendFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function MultiStepForm() {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const steps = [
    { title: "Contact information", description: "" },
    { title: "About your trip", description: "" },
    { title: "Request Confirmation", description: "" },
  ];

  const next = async () => {
    try {
      const values = await form.validateFields();
      setFormData({ ...formData, ...values });
      setCurrent(current + 1);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  interface FormData {
    [key: string]: any;
  }

  const onFinish = (values: Record<string, any>): void => {
    setFormData({ ...formData, ...values });
    setCurrent(current + 1);
  };

  const renderContactStep = () => (
    <Form
      form={form}
      layout="vertical"
      initialValues={formData}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        label={
          <span className="text-base md:text-xl text-primary nunito">Name</span>
        }
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input
          className="!px-5 !py-4 !border-primary md:!text-base nunito"
          placeholder="Enter your name"
        />
      </Form.Item>

      <Form.Item
        name="email"
        label={
          <span className="text-base md:text-xl text-primary nunito">
            Email
          </span>
        }
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input
          className="!px-5 !py-4 !border-primary md:!text-base nunito"
          placeholder="Enter your email address"
        />
      </Form.Item>
      <Form.Item
        className=""
        name="country"
        label={
          <span className="text-base md:text-xl text-primary nunito">
            Country
          </span>
        }
        rules={[{ required: true, message: "Please select your country" }]}
      >
        <Select
          className="custom-select "
          placeholder="Select your country"
          defaultValue={"Select your country"}
          options={[
            { value: "USA", label: "United States" },
            { value: "Canada", label: "Canada" },
            { value: "UK", label: "United Kingdom" },
            { value: "Australia", label: "Australia" },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item
        name="phone"
        label={
          <span className="text-base md:text-xl text-primary nunito">
            Phone
          </span>
        }
      >
        <Input
          className="!px-5 !py-4 !border-primary md:!text-base nunito"
          placeholder="Enter your phone number"
        />
      </Form.Item>
      <Paragraph className="!text-base !text-[#606060] mt-2 nunito text-center ">
        Your privacy is of utmost importance to us. Rest assured, your details
        will be kept confidential and will not be shared with any third parties.
      </Paragraph>
      <Row align="middle" justify="space-between">
        <Col></Col>
        <Col>
          <button
            onClick={next}
            className="bg-primary w-fit hover:bg-white border border-transparent hover:border-primary text-white hover:text-fontGray duration-300 transition-all rounded-[50px] flex gap-4 items-center p-1  cursor-pointer quick_sand uppercase group"
          >
            <span className="ml-3 quick_sand md:text-base text-sm font-bold">
              next
            </span>
            <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-primary">
              <IoIosArrowForward className="text-[#606060] group-hover:text-white" />
            </span>
          </button>
        </Col>
      </Row>
    </Form>
  );

  const renderCompanyStep = () => (
    <Form
      form={form}
      layout="vertical"
      initialValues={formData}
      onFinish={onFinish}
    >
      <div className="flex md:flex-row flex-col w-full gap-1">
        <Form.Item
          className="w-full"
          name="boatType"
          label={
            <span className="text-base md:text-xl text-primary nunito">
              Type of boat
            </span>
          }
          rules={[{ required: true, message: "Please enter the type of boat" }]}
        >
          <Input
            className="!px-5 !py-4 !border-primary md:!text-base w-full nunito"
            placeholder="Type of boat"
          />
        </Form.Item>

        <Form.Item
          className="w-full"
          name="boatModel"
          label={
            <span className="text-base md:text-xl text-primary nunito">
              Model or description Boat
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please enter the model or description",
            },
          ]}
        >
          <Input
            className="!px-5 !py-4 !border-primary md:!text-base w-full nunito"
            placeholder="Description of Boat"
          />
        </Form.Item>
      </div>

      <Form.Item
        name="guests"
        label={
          <span className="text-base md:text-xl text-primary nunito">
            Guests
          </span>
        }
        rules={[
          { required: true, message: "Please enter the number of guests" },
        ]}
      >
        <Input
          className="!px-5 !py-4 !border-primary md:!text-base nunito"
          type="number"
          placeholder="No of Guests"
        />
      </Form.Item>

      <Form.Item
        name="destination"
        label={
          <span className="text-base md:text-xl text-primary">Destination</span>
        }
        rules={[{ required: true, message: "Please enter your destination" }]}
      >
        <Input
          className="!px-5 !py-4 !border-primary md:!text-base"
          placeholder="Please choose your destination"
        />
      </Form.Item>

      <Paragraph className="!text-base !text-gray-500 mt-2 nunito">
        Will you need complimentary conciergeries such as flights, nursery,
        special shuttle vehicles etc. ?
      </Paragraph>
      <Form.Item name="contactPreference">
        <Radio.Group className="custom-radio-group">
          <Space direction="horizontal">
            <Radio className="custom-radio nunito" value="yes">
              Yes
            </Radio>
            <Radio className="custom-radio nunito" value="no">
              No
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Row align="middle" justify="space-between" className="mt-4">
        <Col>
          <Space>
            <button
              onClick={prev}
              className="bg-primary w-fit hover:bg-white border border-transparent hover:border-primary text-white hover:text-fontGray duration-300 transition-all rounded-[50px] flex gap-4 items-center p-1  cursor-pointer quick_sand uppercase group"
            >
              <span className="ml-3 quick_sand md:text-base text-sm font-bold">
                Previous
              </span>
              <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-primary">
                <IoIosArrowBack className="text-[#606060] group-hover:text-white" />
              </span>
            </button>
          </Space>
        </Col>
        <Col>
          <Space>
            <button
              onClick={next}
              className="bg-primary w-fit hover:bg-white border border-transparent hover:border-primary text-white hover:text-fontGray duration-300 transition-all rounded-[50px] flex gap-4 items-center p-1  cursor-pointer quick_sand uppercase group"
            >
              <span className="ml-3 quick_sand md:text-base text-sm font-bold">
                next
              </span>
              <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-primary">
                <IoIosArrowForward className="text-[#606060] group-hover:text-white" />
              </span>
            </button>
          </Space>
        </Col>
      </Row>
    </Form>
  );

  const renderPreferencesStep = () => (
    <Form
      form={form}
      layout="vertical"
      initialValues={formData}
      onFinish={onFinish}
    >
      <Form.Item
        name="contactPreference"
        label={
          <span className="text-xl text-primary nunito">
            You prefer to be Contacted by
          </span>
        }
        rules={[{ required: true }]}
      >
        <Radio.Group className="custom-radio-group">
          <Space direction="horizontal">
            <Radio className="custom-radio nunito" value="email">
              Email
            </Radio>
            <Radio className="custom-radio nunito" value="phone">
              Phone
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="comments"
        label={
          <span className="text-xl text-primary nunito">
            Please, add any additional comments belows
          </span>
        }
      >
        <TextArea
          className="!px-5 !py-4 !border-primary md:!text-base nunito"
          rows={4}
          placeholder="Enter your message"
        />
      </Form.Item>

      <Row align="middle" justify="space-between" className="mt-4">
        <Col>
          <Space>
            <button
              onClick={prev}
              className="bg-primary w-fit hover:bg-white border border-transparent hover:border-primary text-white hover:text-fontGray duration-300 transition-all rounded-[50px] flex gap-4 items-center p-1  cursor-pointer quick_sand uppercase group"
            >
              <span className="ml-3 quick_sand md:text-base text-sm font-bold">
                Previous
              </span>
              <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-primary">
                <IoIosArrowBack className="text-[#606060] group-hover:text-white" />
              </span>
            </button>
          </Space>
        </Col>
        <Col>
          <Space>
            <button
              onClick={next}
              className="bg-primary w-fit hover:bg-white border border-transparent hover:border-primary text-white hover:text-fontGray duration-300 transition-all rounded-[50px] flex gap-4 items-center p-1  cursor-pointer quick_sand uppercase group"
            >
              <span className="ml-3 quick_sand md:text-base text-sm font-bold">
                send
              </span>
              <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-primary">
                <BsFillSendFill className="text-[#606060] group-hover:text-white" />
              </span>
            </button>
          </Space>
        </Col>
      </Row>
    </Form>
  );

  const renderCompleteStep = () => (
    <div className="text-center py-8">
      <Title level={3} className="mt-4 !text-[32px] quick_sand !text-[#606060]">
        Thank you!
      </Title>
      <Paragraph className="!text-xl !text-primary">
        We've received your information and will be in touch shortly.
      </Paragraph>
    </div>
  );

  const renderContent = () => {
    switch (current) {
      case 0:
        return renderContactStep();
      case 1:
        return renderCompanyStep();
      case 2:
        return renderPreferencesStep();
      case 3:
        return renderCompleteStep();
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt6">
      <div className="my-8 ">
        <Steps
          current={current}
          items={steps}
          className="custom-steps"
          progressDot={(dot, { status, index }) => (
            <span
              className={`custom-dot ${
                status === "finish" || status === "process" ? "active" : ""
              }`}
            ></span>
          )}
        />
      </div>

      <div className="bg-white  min-h-[400px]">{renderContent()}</div>
    </div>
  );
}
