"use client";
import React from "react";
import Btn from "../common/Btn";
import BannerDropdown from "../home/BannerDropdown";

const Banner = () => {
  return (
    <div className="w-full bg-[url(./assets/banner.png)] bg-no-repeat bg-center bg-cover pt-[150px] md:pt-[221px] pb-[320px] text-white relative">
      <div className="container md:px-0 px-2 flex items-center justify-center flex-col relative z-10">
        {/* banner */}
        <h1 className="md:max-w-[990px] text-center text-3xl md:text-5xl font-medium leading-[140%] md:leading-[120%] uppercase austin ">
          Create timeless moments that you&apos;ll treasure forever.
        </h1>
        <p className="max-w-[821px] text-center mt-4 mb-6 md:text-base text-sm">
          Where cherished moments come alive, creating stories that last
          forever. Transforming experiences into memories you&apos;ll hold close
          for a lifetime.
        </p>
        <Btn href="/contactus" btnText="Get in Touch" />
      </div>
      {/* choose option */}
      <div className="absolute  left-1/2 -translate-x-1/2 md:top-[90%] top-[80%] container z-20">
        <BannerDropdown />
      </div>

      {/* <ChooseField /> */}
    </div>
  );
};
export default Banner;
