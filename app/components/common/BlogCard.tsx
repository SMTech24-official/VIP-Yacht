import Image, { StaticImageData } from "next/image";
import React from "react";
import blogIcon from "../../assets/blogIcon.png";
import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";

interface BlogCardProps {
  blog: {
    blogImg: StaticImageData | string;
    blogDate: string;
    blogTitle: string;
    id: Number;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 md:max-w-[384px] w-full group">
      <Link
        href={`/blog/${blog.id}`}
        className="w-full h-[350px] rounded-lg overflow-hidden relative "
      >
        <div className="w-full h-full absolute left-0 top-0 bg-[#00000057] opacity-0 group-hover:opacity-100 group-hover:duration-200 group-hover:transition-opacity"></div>
        <Image
          src={blog?.blogImg}
          alt="Blog Image"
          className="w-full"
          unoptimized
        />
      </Link>
      <div className="flex items-center gap-2">
        <Image src={blogIcon} alt="Blog Icon" />
        <h3 className="text-primary">{blog?.blogDate}</h3>
      </div>
      <h2 className="text-2xl austin font-medium">{blog?.blogTitle} </h2>
      <Link
        href={`/blog/${blog.id}`}
        className="flex gap-3 items-center text-customGray austin"
      >
        Learn more <ImArrowRight2 className="text-customGray" />
      </Link>
    </div>
  );
};

export default BlogCard;
