/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, memo } from "react";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import JoditEditor from "jodit-react";
import { useCreateBlogMutation } from "@/redux/service/own/blog/blogApi";
import ApiErrorHandler from "@/utils/ApiErrorHandler";
import { toast } from "sonner";

// Memoized JoditEditor to prevent unnecessary re-renders
const MemoizedJoditEditor = memo(JoditEditor);

const AddBlog = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]); // State to manage uploaded files
  const [content, setContent] = useState<string>(""); // State to manage editor content
  const [createBlog, { isLoading }] = useCreateBlogMutation();

  // Handle form submission
  const onFinish = async (values: any) => {
    console.log("Form Values:", values);
    console.log("Uploaded File:", fileList[0]); // Access the first file in the list
    console.log("Editor Content:", content);

    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", content);
      formData.append("image", fileList[0]);

      const response = await createBlog(formData).unwrap();
      if (response.success) {
        toast.success(response.message);
        form.resetFields();
        setFileList([]);
        setContent("");
      } else {
        toast.error(response.message);
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

  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add New Blog
        </h1>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
          className="space-y-4"
        >
          {/* Title Field */}
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please enter the blog title!" },
            ]}
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
            <MemoizedJoditEditor
              value={content} // Bind the editor content
              config={{
                readonly: false, // Set to true if you want to make it read-only
                height: 400, // Set the height of the editor
              }}
              onBlur={(newContent) => setContent(newContent)} // Update state on blur
              onChange={(newContent) => {
                // Optionally log changes but avoid setting state here
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
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="w-full bg-green-500 text-white hover:bg-green-600"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
