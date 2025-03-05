"use client";
import React, { useState } from "react";
import banner from "../../assets/banner.png";
import Image from "next/image";
import Btn from "../common/Btn";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChooseField from "../common/ChooseField";
import BannerDropdown from "../home/BannerDropdown";

const Banner = () => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" w-full bg-[url(./assets/banner.png)] bg-no-repeat bg-center bg-cover pt-[121px] pb-[320px] text-white relative">
      <div className="container flex items-center justify-center flex-col relative">
        {/* banner */}
        <h1 className="md:max-w-[990px] text-center text-5xl font-medium leading-[120%] uppercase austin ">
          Create timeless moments that you'll treasure forever.
        </h1>
        <p className="max-w-[821px] text-center mt-4 mb-6">
          Where cherished moments come alive, creating stories that last
          forever. Transforming experiences into memories you'll hold close for
          a lifetime.
        </p>
        <Btn btnText="Get in Touch" />
      </div>
      {/* choose option */}
      <div className="absolute  left-1/2 -translate-x-1/2 top-[94%]  container">
        <BannerDropdown />
      </div>

      {/* <ChooseField /> */}
    </div>
  );
};
export default Banner;
