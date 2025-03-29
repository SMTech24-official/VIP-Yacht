import Image from "next/image";
import React from "react";
import blogIcon from "../../assets/blogIcon.png";
import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";
import dayjs from "dayjs";

interface BlogCardProps {
  title: string;
  createdAt: string;
  image: string;
  id: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, createdAt, image, id }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 md:max-w-[384px] w-full">
      <div className="w-full h-[350px] rounded-lg overflow-hidden">
        <Image
          width={500}
          height={500}
          src={image || ""}
          alt="Blog Image"
          className="w-full h-full"
          unoptimized
        />
      </div>
      <div className="flex items-center gap-2">
        <Image src={blogIcon} alt="Blog Icon" />
        <h3 className="text-primary">
          {dayjs(createdAt).format("YYYY MM DD")}
        </h3>
      </div>
      <h2 className="text-2xl austin font-medium">{title} </h2>
      <Link
        href={`/blog/${id}`}
        className="flex gap-3 items-center text-customGray austin"
      >
        Learn more <ImArrowRight2 className="text-customGray" />
      </Link>
    </div>
  );
};

export default BlogCard;
