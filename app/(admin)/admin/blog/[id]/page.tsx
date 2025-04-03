/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import JoditEditor from "jodit-react";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/redux/service/own/blog/blogApi";
import { useParams, useRouter } from "next/navigation";
import ApiErrorHandler from "@/utils/ApiErrorHandler";
import { toast } from "sonner";

const UpdateBlog = () => {
  const [form] = Form.useForm();
  const params = useParams() as { id: string };
  const [fileList, setFileList] = useState<any[]>([]); // State to manage uploaded files
  const [content, setContent] = useState<string>(""); // State to manage editor content
  const { data, isLoading } = useGetSingleBlogQuery(params.id);
  const [updatedBlog, { isLoading: updatedLoading }] = useUpdateBlogMutation();
  const router = useRouter();

  // Handle form submission
  const onFinish = async (values: any) => {
    console.log("Form Values:", values);
    console.log("Uploaded File:", fileList[0]); // Access the first file in the list
    console.log("Editor Content:", content);

    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", content);
      formData.append("image", fileList[0]); // Assuming only one file is uploaded
      const res = await updatedBlog({ id: params.id, blog: formData }).unwrap();
      if (res.success) {
        toast.success(res.message);
        router.push("/admin/blog");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
  };

  // Handle image upload
  const handleImageUpload = (file: any) => {
    setFileList([file]); // Allow only one file
    return false; // Prevent automatic upload
  };

  // Initialize form values when data is available
  useEffect(() => {
    if (data?.data) {
      const initialValues = {
        title: data.data.title,
        content: data.data.content,
        imageUrl: data.data.image, // Image URL
      };

      // Set initial values for the form
      form.setFieldsValue(initialValues);

      // Set default file list for the image upload
      if (data.data.image) {
        setFileList([
          {
            uid: "-1", // Unique identifier
            name: "image.png", // File name
            status: "done", // Mark as uploaded
            url: data.data.image, // Image URL
          },
        ]);
      }

      // Initialize editor content
      setContent(data.data.content || "");
    }
  }, [data, form]);

  // If data is still loading, show a loading state
  if (isLoading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <Card
      loading={isLoading}
      className="!max-w-3xl !mx-auto !bg-white !rounded-lg !shadow-md"
    >
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Update Blog
      </h1>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="space-y-4"
      >
        {/* Title Field */}
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter the blog title!" }]}
        >
          <Input
            placeholder="Enter blog title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </Form.Item>

        {/* Content Field (Text Editor) */}
        <Form.Item
          label="Content"
          name="content"
          rules={[
            { required: true, message: "Please enter the blog content!" },
          ]}
        >
          <JoditEditor
            value={content} // Bind the editor content
            config={{
              readonly: false, // Set to true if you want to make it read-only
              height: 400, // Set the height of the editor
            }}
            onBlur={(newContent) => setContent(newContent)} // Update state on blur
            onChange={(newContent) => {
              console.log("Editor content changed:", newContent);
            }}
            className="border border-gray-300 rounded-md"
          />
        </Form.Item>

        {/* Image Upload Field */}
        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please upload an image!" }]}
          valuePropName="fileList" // Use 'fileList' instead of 'value'
          getValueFromEvent={(e) => e.fileList} // Extract fileList from the event
        >
          <Upload
            listType="picture"
            maxCount={1}
            beforeUpload={handleImageUpload}
            onRemove={() => setFileList([])} // Clear the file list on removal
            fileList={fileList} // Bind the fileList state
            className="w-full"
          >
            <Button
              icon={<UploadOutlined />}
              className="w-full bg-blue-500 text-white hover:bg-blue-600"
            >
              Upload Image
            </Button>
          </Upload>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            loading={updatedLoading}
            type="primary"
            htmlType="submit"
            className="w-full bg-green-500 text-white hover:bg-green-600"
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UpdateBlog;
