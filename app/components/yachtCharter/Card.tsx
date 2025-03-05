"use client";
// import { Image } from "antd";
import React from "react";
import img from "../../assets/yacht1.png";
import Image from "next/image";
import { Card, Rating } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
// import { Card } from "antd";

const CardComponent = () => {
  return (
    <Card className="max-w-[384px] rounded-lg overflow-hidden h-[630px]  border border-[#85848464] w-fit">
      <div className="w-full h-[350px]">
        <Image
          src={img}
          alt=""
          height={500}
          width={500}
          className="w-full h-full "
        />
      </div>
      <div className="px-5 mt-4 mb-8 ">
        <div className="flex justify-between">
          <h3 className="text-secondary austin font-medium  flex items-center gap-1">
            {" "}
            <FaLocationDot />
            Crystal Voyages
          </h3>
          <Rating name="read-only" value={3.5} readOnly /> {/* Rating */}
        </div>
        <h2 className="austin font-medium text-lg uppercase">Blue Horizon</h2>
      </div>
      <ul className="flex gap-2 py-5 border border-[#6060603d] px-5 ">
        <li className="flex items-center justify-center">Guest</li>
        <li className="flex items-center justify-center sans text-base">
          <BsDot className=" mr-2" />
          Bed
        </li>
        <li className="flex items-center justify-center sans text-base">
          <BsDot className=" mr-2" />
          Cabin
        </li>
        <li className="flex items-center justify-center sans text-base">
          <BsDot className=" mr-2" />
          Bathroom
        </li>
      </ul>
      <p className="sans text-sm px-5 py-5">
        A luxurious yacht offering elegance, comfort, and adventure on the open
        sea.
      </p>
      <Link href="" className="austin text-sm font-bold px-5 underline mb-5">
        Details
      </Link>
    </Card>
  );
};

export default CardComponent;
