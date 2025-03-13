import Blog from "@/app/components/blog/Blog";
import Banner from "@/app/components/common/Banner";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner className="" details="" title="Blog" />
      <div className="">
        <Blog />
      </div>
    </div>
  );
};

export default page;
