"use client";
import { useDeleteBlogMutation } from "@/redux/service/own/blog/blogApi";
import { TBlog } from "@/types/blogType";
import ApiErrorHandler from "@/utils/ApiErrorHandler";
import { Button, Card } from "antd";
import Image from "next/image";
import { FC } from "react";
import { toast } from "sonner";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define a default placeholder image URL
const DEFAULT_IMAGE_URL = "/placeholder-image.jpg"; // Replace with your placeholder image path

const BlogCard: FC<TBlog> = ({ title, image, id, createdAt }) => {
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteBlog(id).unwrap();
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      ApiErrorHandler(error);
    }
  };

  const handleClick = () => {
    router.push(`/blog/${id}`);
  };

  // Construct the src URL safely

  console.log(image);

  return (
    <Card
      actions={[
        <Link
          className="!w-[100px] px-4 py-2 border rounded-lg"
          href={`/admin/blog/${id}`}
          key={"updated"}
        >
          Updated
        </Link>,
        <Button
          loading={isLoading}
          onClick={() => handleDelete(id || "")}
          key={"delete"}
          danger
        >
          Delete
        </Button>,
        <Button key={"view"} onClick={handleClick}>
          View
        </Button>,
      ]}
      cover={
        <Image
          width={300}
          height={250}
          className="h-[250px] object-cover"
          src={image || DEFAULT_IMAGE_URL}
          alt={`image of ${title}`}
        />
      }
    >
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">
          Created at: {dayjs(createdAt).format("YYYY-MM-DD")}
        </p>
      </div>
    </Card>
  );
};

export default BlogCard;
