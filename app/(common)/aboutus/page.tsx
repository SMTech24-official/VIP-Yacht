import AboutDetails from "@/app/components/about/AboutDetails";
import Banner from "@/app/components/common/Banner";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner
        className=""
        title="Your dedicated and professional partner in yachting"
        details=""
      />
      <AboutDetails />
    </div>
  );
};

export default page;
