/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Form, Input, Button, Upload, Card, Popconfirm } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useUploadImageMutation } from "@/redux/service/own/image/imageApi";
import { useForm } from "antd/es/form/Form";
import { useCreateDestinationMutation } from "@/redux/service/own/destination/destinationApi";

// Define the Step type
interface Step {
  banner: string; // URL of the step banner image
  image: string; // URL of the step image
  day: string; // Day description (e.g., "1 Day")
  title: string;
  description: string;
}

// Define the Destination type
interface DestinationFormData {
  country: string;
  title: string;
  description: string;
  banner: string; // URL of the banner image
  steps: Step[]; // Array of steps
  locationLink: string;
}

// Define types for file lists
interface FileItem {
  uid: string;
  name: string;
  url: string;
}

type StepFileLists = {
  [key: string]: {
    banner?: FileItem[];
    image?: FileItem[];
  };
};

const DestinationForm: React.FC = () => {
  const [form] = useForm<DestinationFormData>();
  const [fileList, setFileList] = useState<FileItem[]>([]); // For banner image upload
  const [stepFileLists, setStepFileLists] = useState<StepFileLists>({});
  const [uploadImage] = useUploadImageMutation(); // Hook to upload images
  const [creteDestination, { isLoading }] = useCreateDestinationMutation();

  // Handle banner image upload
  const handleBannerUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await uploadImage(formData).unwrap();
      if (res.success) {
        console.log("Uploaded banner:", res.data);
        form.setFieldsValue({ banner: res.data });
        setFileList([{ uid: "banner", name: file.name, url: res.data || "" }]);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
    return false; // Prevent automatic upload
  };

  // Handle step image uploads
  const handleStepImageUpload = async (
    field: "banner" | "image",
    file: File,
    index: number
  ) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await uploadImage(formData).unwrap();
      if (res.success) {
        form.setFieldsValue({
          steps: form
            .getFieldValue("steps")
            .map((step: Step, i: number) =>
              i === index ? { ...step, [field]: res.data } : step
            ),
        });
        setStepFileLists((prev) => ({
          ...prev,
          [index]: {
            ...(prev[index] || {}),
            [field]: [
              { uid: index.toString(), name: file.name, url: res.data },
            ],
          },
        }));
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
    return false; // Prevent automatic upload
  };

  // Handle removing a banner image
  const handleBannerRemove = () => {
    form.setFieldsValue({ banner: "" }); // Clear the banner field in the form
    setFileList([]); // Remove the banner from the file list
    toast.success("Banner image removed successfully!");
  };

  // Handle removing a step image
  const handleStepImageRemove = (field: "banner" | "image", index: number) => {
    // Clear the specific step field in the form
    form.setFieldsValue({
      steps: form
        .getFieldValue("steps")
        .map((step: Step, i: number) =>
          i === index ? { ...step, [field]: "" } : step
        ),
    });

    // Remove the file from the local state
    setStepFileLists((prev) => {
      const updatedStep = { ...prev[index] };
      if (field in updatedStep) {
        if (field in updatedStep) {
          delete updatedStep[field]; // Remove the specific field
        }
      }
      return { ...prev, [index]: updatedStep };
    });

    toast.success(
      `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } image removed successfully!`
    );
  };

  // Handle form submission
  const onFinish = async (values: DestinationFormData) => {
    if (!values.steps || values.steps.length === 0) {
      toast.error("At least one step is required!");
      return;
    }
    try {
      const res = await creteDestination(values).unwrap();
      if (res.success) {
        toast.success("Destination created successfully!");
        form.resetFields(); // Reset the form
        setFileList([]); // Clear the file list
        setStepFileLists({}); // Clear the step file lists
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
  };

  // Error handler for API calls
  const ApiErrorHandler = (error: any) => {
    if (error?.message) {
      toast.error(`API Error: ${error.message}`);
    } else {
      toast.error("An unexpected error occurred.");
    }
    console.error("API Error:", error);
  };

  return (
    <div className="px-5 py-10">
      <Card
        title="Destination Form"
        className="max-w-3xl !w-full !mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <Form<DestinationFormData>
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            country: "",
            title: "",
            description: "",
            banner: "",
            steps: [],
            locationLink: "",
          }}
        >
          {/* Country */}
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please enter the country!" }]}
          >
            <Input placeholder="Enter country" />
          </Form.Item>

          {/* Title */}
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter the destination title!",
              },
            ]}
          >
            <Input placeholder="Enter destination title" />
          </Form.Item>

          {/* Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter the destination description!",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Enter destination description"
            />
          </Form.Item>

          {/* Banner Image */}
          <Form.Item
            label="Banner Image"
            name="banner"
            rules={[
              { required: true, message: "Please upload a banner image!" },
            ]}
          >
            <div>
              <Upload
                listType="picture-card"
                maxCount={1}
                beforeUpload={handleBannerUpload}
                fileList={fileList}
              >
                {fileList.length < 1 && (
                  <Button icon={<UploadOutlined />}></Button>
                )}
              </Upload>
              {fileList.length > 0 && (
                <Popconfirm
                  title="Are you sure you want to remove this image?"
                  onConfirm={handleBannerRemove}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="mt-3" danger icon={<DeleteOutlined />}>
                    Remove Banner
                  </Button>
                </Popconfirm>
              )}
            </div>
          </Form.Item>

          {/* Steps */}
          <Form.List name="steps">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
                  <Card key={key} title={`Step ${index + 1}`} className="mb-4">
                    {/* Step Banner */}
                    <Form.Item
                      {...restField}
                      label="Step Banner"
                      name={[name, "banner"]}
                      rules={[
                        {
                          required: true,
                          message: "Please upload a step banner!",
                        },
                      ]}
                    >
                      <div>
                        <Upload
                          listType="picture-card"
                          maxCount={1}
                          beforeUpload={(file) =>
                            handleStepImageUpload("banner", file, index)
                          }
                          fileList={stepFileLists[index]?.banner || []}
                        >
                          {(stepFileLists[index]?.banner?.length || 0) < 1 && (
                            <Button icon={<UploadOutlined />}></Button>
                          )}
                        </Upload>
                        {(stepFileLists[index]?.banner?.length ?? 0) > 0 && (
                          <Popconfirm
                            title="Are you sure you want to remove this image?"
                            onConfirm={() =>
                              handleStepImageRemove("banner", index)
                            }
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button
                              className="mt-3"
                              danger
                              icon={<DeleteOutlined />}
                            >
                              Remove Banner
                            </Button>
                          </Popconfirm>
                        )}
                      </div>
                    </Form.Item>

                    {/* Step Image */}
                    <Form.Item
                      {...restField}
                      label="Step Image"
                      name={[name, "image"]}
                      rules={[
                        {
                          required: true,
                          message: "Please upload a step image!",
                        },
                      ]}
                    >
                      <div>
                        <Upload
                          listType="picture-card"
                          maxCount={1}
                          beforeUpload={(file) =>
                            handleStepImageUpload("image", file, index)
                          }
                          fileList={stepFileLists[index]?.image || []}
                        >
                          {(stepFileLists[index]?.image?.length ?? 0) < 1 && (
                            <Button icon={<UploadOutlined />}></Button>
                          )}
                        </Upload>
                        {(stepFileLists[index]?.image?.length ?? 0) > 0 && (
                          <Popconfirm
                            title="Are you sure you want to remove this image?"
                            onConfirm={() =>
                              handleStepImageRemove("image", index)
                            }
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button
                              className="mt-3"
                              danger
                              icon={<DeleteOutlined />}
                            >
                              Remove Image
                            </Button>
                          </Popconfirm>
                        )}
                      </div>
                    </Form.Item>

                    {/* Day */}
                    <Form.Item
                      {...restField}
                      label="Day"
                      name={[name, "day"]}
                      rules={[
                        { required: true, message: "Please enter the day!" },
                      ]}
                    >
                      <Input placeholder="Enter day (e.g., 1 Day)" />
                    </Form.Item>

                    {/* Step Title */}
                    <Form.Item
                      {...restField}
                      label="Step Title"
                      name={[name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter the step title!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter step title" />
                    </Form.Item>

                    {/* Step Description */}
                    <Form.Item
                      {...restField}
                      label="Step Description"
                      name={[name, "description"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter the step description!",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={2}
                        placeholder="Enter step description"
                      />
                    </Form.Item>

                    {/* Remove Step Button */}
                    <Button
                      className="mt-3"
                      danger
                      onClick={() => remove(name)}
                    >
                      Remove Step
                    </Button>
                  </Card>
                ))}
                {/* Add Step Button */}
                <Button
                  className="my-5"
                  type="dashed"
                  onClick={() => add()}
                  block
                >
                  Add Step
                </Button>
              </>
            )}
          </Form.List>

          {/* Location Link */}
          <Form.Item
            label="Location Link"
            name="locationLink"
            rules={[
              { required: false, message: "Please enter the location link!" },
            ]}
          >
            <Input placeholder="Enter location link" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button loading={isLoading} type="primary" htmlType="submit">
              Save Destination
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default DestinationForm;
