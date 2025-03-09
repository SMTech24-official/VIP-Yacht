import React from "react";
import Banner from "../components/common/Banner";
import AboutDetails from "../components/about/AboutDetails";

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
