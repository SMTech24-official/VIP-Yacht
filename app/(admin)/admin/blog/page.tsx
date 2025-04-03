"use client";
import BlogCard from "@/app/components/admin/card/BlogCard";
import { useGetAllBlogsQuery } from "@/redux/service/own/blog/blogApi";
import { Empty, Pagination, Skeleton } from "antd";
import React, { useState } from "react";

const AllBlog = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetAllBlogsQuery([
    {
      name: "page",
      value: page,
    },
  ]);
  console.log(data);
  return (
    <div className="min-h-screen p-6">
      {isLoading ? (
        <div className="grid grid-cols-3 gap-6">
          {new Array(10).fill(null).map((_, idx) => (
            <Skeleton active title paragraph key={idx} />
          ))}
        </div>
      ) : (
        <div>
          {data?.data?.length === 0 ? (
            <div className="flex items-center justify-center size-full">
              <Empty />{" "}
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-3 gap-6 pb-6">
                {data?.data?.map((item) => (
                  <BlogCard key={item.id} {...item} />
                ))}
              </div>
              <div className="flex items-center justify-center ">
                <Pagination
                  onChange={(page) => setPage(page)}
                  total={data?.meta?.total}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllBlog;
