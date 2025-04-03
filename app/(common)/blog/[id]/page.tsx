"use client";
import React from "react";
import Banner from "@/app/components/common/Banner";
import BlogDetails from "@/app/components/blogDetails/BlogDetails";
import { useParams } from "next/navigation";
import { useGetSingleBlogQuery } from "@/redux/service/own/blog/blogApi";
import { Skeleton } from "antd";
const BlogDetail = () => {
  const params = useParams() as { id: string };
  console.log(params.id);
  const { data, isLoading } = useGetSingleBlogQuery(params.id);
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <div>
          <Skeleton active paragraph title />
        </div>
      ) : (
        <div>
          <Banner className="" title={data?.data?.title || ""} details="" />
          <BlogDetails
            image={data?.data?.image || ""}
            content={data?.data?.content || ""}
            createdAt={data?.data?.createdAt || ""}
            title={data?.data?.title || ""}
          />
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
