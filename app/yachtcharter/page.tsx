import React from "react";
import Banner from "../components/common/Banner";
import Filters from "../components/yachtCharter/Filter";
import CharterDetails from "../components/yachtCharter/CharterDetails";

const page = () => {
  return (
    <div>
      <Banner className="" title="yacht charter" details="" />
      <div className="container px-2 md:px-0 py-20 grid md:grid-cols-3 grid-cols-1 gap-y-4 md:gap-y-0 md:gap-5">
        <div className="">
          <Filters />
        </div>
        <div className="col-span-2">
          <CharterDetails />
        </div>
      </div>
    </div>
  );
};

export default page;
