"use client";
import Banner from "@/app/components/common/Banner";
import Destination from "@/app/components/destination_details/Destination";
import React from "react";

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
