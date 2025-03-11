"use client";
import React from "react";
import Banner from "../components/common/Banner";
import Destination from "../components/destination_details/Destination";

const page = () => {
  return (
    <div>
      <Banner
        className="!bg-[url(./assets/destinationBg.png)]"
        title="Ocean Serenity Sea Majesty"
        details=""
      />
      <Destination />
    </div>
  );
};

export default page;
