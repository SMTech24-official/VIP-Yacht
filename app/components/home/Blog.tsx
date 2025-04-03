"use client";
import React from "react";
import Heading from "../common/Heading";
import BlogCard from "../common/BlogCard";
import Btn from "../common/Btn";
import { motion } from "framer-motion";
import { useGetAllBlogsQuery } from "@/redux/service/own/blog/blogApi";
import { Skeleton } from "antd";

const Blog = () => {
  const { data, isLoading } = useGetAllBlogsQuery([
    { name: "page", value: 1 },
    { name: "limit", value: 3 },
  ]);

  return (
    <div className="container px-2 md:px-0 flex flex-col md:items-center justify-center">
      <Heading className="text-center mb-10" headingTxt="Blog" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-[90px]">
        {isLoading
          ? new Array(3)
              .fill(null)
              .map((_, item) => <Skeleton key={item} title active paragraph />)
          : data?.data?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <BlogCard
                  key={item.id}
                  title={item.title || ""}
                  createdAt={item.createdAt || ""}
                  image={item.image || " "}
                  id={item.id || ""}
                />
              </motion.div>
            ))}
      </div>
      <Btn href="/blog" btnText="See more" />
    </div>
  );
};

export default Blog;
