import React from "react";
import Banner from "../components/common/Banner";
import Slider from "../components/book_now/Slider";

const page = () => {
  return (
    <div>
      <Banner className="" title="Booking Bonyacht" details="" />
      <div className="container flex items-center justify-center">
        <div className="max-w-[792px] w-full md:mt-20 mt-10">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default page;
