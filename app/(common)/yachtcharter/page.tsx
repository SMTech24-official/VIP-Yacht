import Banner from "@/app/components/common/Banner";
import CharterDetails from "@/app/components/yachtCharter/CharterDetails";
import Filters from "@/app/components/yachtCharter/Filter";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner className="" title="yacht charter" details="" />
      <div className="container px-2 md:px-0 pb-[60px] md:pb-[120px]">
        <div className="py-20 grid md:grid-cols-3 grid-cols-1 gap-y-4 md:gap-y-0 md:gap-5">
          <div className="">
            <Filters />
          </div>
          <div className="col-span-2">
            <CharterDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
