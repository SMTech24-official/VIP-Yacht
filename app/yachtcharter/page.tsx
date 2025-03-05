import React from "react";
import Banner from "../components/common/Banner";
import CardComponent from "../components/yachtCharter/Card";
import Filters from "../components/yachtCharter/Filter";

const page = () => {
  return (
    <div>
      <Banner className="" title="yacht charter" details="" />
      <div className="container py-20">
        <Filters />
        {/* <CardComponent /> */}
      </div>
    </div>
  );
};

export default page;
