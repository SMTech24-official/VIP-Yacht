/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload, Card, Popconfirm, Skeleton } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import {
  useUploadImageMutation,
  useDeleteImageMutation,
} from "@/redux/service/own/image/imageApi";
import { useForm } from "antd/es/form/Form";
import { useParams } from "next/navigation";
import {
  useGetSingleDestinationQuery,
  useUpdatedDestinationMutation,
} from "@/redux/service/own/destination/destinationApi";

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
  id: string; // ID of the destination for updates
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

const DestinationForm = () => {
  const params = useParams() as { id: string };
  const [form] = useForm<DestinationFormData>();
  const [fileList, setFileList] = useState<FileItem[]>([]); // For banner image upload
  const [stepFileLists, setStepFileLists] = useState<StepFileLists>({});
  const [uploadImage] = useUploadImageMutation(); // Hook to upload images
  const [deleteImage] = useDeleteImageMutation(); // Hook to delete images
  const { data, isLoading } = useGetSingleDestinationQuery(params.id);
  const [updatedDestination, { isLoading: updateLoading }] =
    useUpdatedDestinationMutation();

  // Handle banner image upload
  const handleBannerUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file); // Match your API's expected field name
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
    field: keyof Step,
    file: File,
    index: number
  ) => {
    const formData = new FormData();
    formData.append("image", file); // Match your API's expected field name
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

  // Handle deleting a banner image
  const handleBannerDelete = async () => {
    const currentFile = fileList[0];
    if (!currentFile) return;

    try {
      const res = await deleteImage(currentFile.url).unwrap();
      if (res.success) {
        console.log("Deleted banner:", currentFile.url);
        form.setFieldsValue({ banner: "" });
        setFileList([]);
        toast.success("Banner image deleted successfully!");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
  };

  // Handle deleting a step image
  const handleStepImageDelete = async (
    field: keyof Step,
    index: number,
    file: FileItem
  ) => {
    try {
      const res = await deleteImage(file.url).unwrap();
      if (res.success) {
        console.log(`Deleted ${field} image:`, file.url);
        // Update the specific step field
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
          delete updatedStep[field as keyof StepFileLists[keyof StepFileLists]]; // Remove the specific field
          return { ...prev, [index]: updatedStep };
        });
        toast.success(
          `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } image deleted successfully!`
        );
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
  };

  // Handle form submission
  const onFinish = async (values: DestinationFormData) => {
    if (!values.steps || values.steps.length === 0) {
      toast.error("At least one step is required!");
      return;
    }
    // Include the destination ID for updates
    // const updatedValues = {
    //   ...values,
    //   id: data?.data?.id, // Add the ID for updates
    // };
    try {
      const res = await updatedDestination({
        id: params.id,
        data: values,
      }).unwrap();
      if (res.success) {
        toast.success("Destination updated successfully!");
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

  // Initialize form with existing data
  useEffect(() => {
    if (data?.data) {
      const initialData = data.data;
      // Set form fields
      form.setFieldsValue(initialData);
      // Set initial file lists for banner and steps
      setFileList(
        initialData.banner
          ? [{ uid: "banner", name: "banner.jpg", url: initialData.banner }]
          : []
      );
      const initialStepFileLists: StepFileLists = {};
      (initialData.steps ?? []).forEach((step, index) => {
        initialStepFileLists[index] = {
          banner: step.banner
            ? [{ uid: `${index}-banner`, name: "banner.jpg", url: step.banner }]
            : [],
          image: step.image
            ? [{ uid: `${index}-image`, name: "image.jpg", url: step.image }]
            : [],
        };
      });
      setStepFileLists(initialStepFileLists);
    }
  }, [data?.data, form]);

  return (
    <div className="py-10">
      <Card
        loading={isLoading}
        title="Update Destination"
        className="!max-w-3xl !mx-auto  bg-white rounded-lg shadow-md"
      >
        {/* Show loading state */}
        {isLoading ? (
          <Skeleton active paragraph={{ rows: 8 }} />
        ) : (
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
                    <Button icon={<UploadOutlined />}>Upload Banner</Button>
                  )}
                </Upload>
                {fileList.length > 0 && (
                  <Popconfirm
                    title="Are you sure you want to delete this image?"
                    onConfirm={handleBannerDelete}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button danger icon={<DeleteOutlined />} className="mt-3">
                      Delete Banner
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
                    <Card
                      key={key}
                      title={`Step ${index + 1}`}
                      className="mb-4"
                    >
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
                            {(stepFileLists[index]?.banner?.length || 0) <
                              1 && (
                              <Button icon={<UploadOutlined />}>
                                Upload Banner
                              </Button>
                            )}
                          </Upload>
                          {(stepFileLists[index]?.banner?.length ?? 0) > 0 && (
                            <Popconfirm
                              title="Are you sure you want to delete this image?"
                              onConfirm={() =>
                                handleStepImageDelete(
                                  "banner",
                                  index,
                                  stepFileLists[index].banner![0]
                                )
                              }
                              okText="Yes"
                              cancelText="No"
                            >
                              <Button
                                danger
                                icon={<DeleteOutlined />}
                                className="mt-3"
                              >
                                Delete Banner
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
                              <Button icon={<UploadOutlined />}>
                                Upload Image
                              </Button>
                            )}
                          </Upload>
                          {(stepFileLists[index]?.image?.length ?? 0) > 0 && (
                            <Popconfirm
                              title="Are you sure you want to delete this image?"
                              onConfirm={() =>
                                handleStepImageDelete(
                                  "image",
                                  index,
                                  stepFileLists[index].image![0]
                                )
                              }
                              okText="Yes"
                              cancelText="No"
                            >
                              <Button
                                danger
                                icon={<DeleteOutlined />}
                                className="mt-3"
                              >
                                Delete Image
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
                      <Button danger onClick={() => remove(name)}>
                        Remove Step
                      </Button>
                    </Card>
                  ))}
                  {/* Add Step Button */}
                  <Button type="dashed" onClick={() => add()} block>
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
                { required: true, message: "Please enter the location link!" },
              ]}
            >
              <Input placeholder="Enter location link" />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button loading={updateLoading} type="primary" htmlType="submit">
                Update Destination
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default DestinationForm;
