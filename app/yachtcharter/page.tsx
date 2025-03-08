import React from "react";
import Banner from "../components/common/Banner";
import CardComponent from "../components/yachtCharter/Card";
import Filters from "../components/yachtCharter/Filter";

const page = () => {
  return (
    <div>
      <Banner className="" title="yacht charter" details="" />
      <div className="container px-2 md:px-0 py-20 grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-0">
        <div className="col-span-1">
          <Filters />
        </div>
        <CardComponent />
      </div>
    </div>
  );
};

export default page;
