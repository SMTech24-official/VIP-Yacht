"use client";
import React, { useState } from "react";
import banner from "../../assets/banner.png";
import Image from "next/image";
import Btn from "../common/Btn";
import { MdKeyboardArrowDown } from "react-icons/md";

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
    <div className=" w-full bg-[url(./assets/banner.png)] bg-no-repeat bg-center bg-cover pt-[121px] pb-[320px] text-white">
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
      <div className="absolute  left-0">
        <div className="relative w-[233px]">
          <div className="relative">
            {/* Custom Button to show selected option */}
            <button className="w-full h-full rounded-lg bg-gradient-to-b from-[#94949462] to-[#fff] px-4 py-2 text-black border border-gray-300 shadow-md">
              {selected || "Please choose"}
              <span
                className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none"
                onClick={toggleOpen}
              >
                <MdKeyboardArrowDown />
              </span>
            </button>

            {/* Custom Dropdown Options */}
            <div className="absolute mt-2 w-full bg-white rounded-lg border border-gray-300 shadow-md">
              <div
                onClick={() => setSelected("Destination 1")}
                className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-t-lg"
              >
                Destination 1
              </div>
              <div
                onClick={() => setSelected("Destination 2")}
                className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
              >
                Destination 2
              </div>
              <div
                onClick={() => setSelected("Destination 3")}
                className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-b-lg"
              >
                Destination 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
