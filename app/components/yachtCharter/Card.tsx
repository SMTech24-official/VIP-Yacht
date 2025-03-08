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

interface Charter {
  location: string;
  detail: string;
  title: string;
  guest: number;
  bed: number;
  cabin: number;
  bathroom: number;
  // Add other properties of the charter object here
}

const CardComponent = ({ charter }: { charter: Charter }) => {
  return (
    <Card className="md:max-w-[384px] w-full rounded-lg overflow-hidden h-[630px]  border border-[#85848464]">
      <div className="w-full h-[350px]">
        <Image
          src={img}
          alt=""
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-5 mt-4 mb-8 ">
        <div className="flex justify-between">
          <h3 className="text-secondary austin font-medium  flex items-center gap-1">
            {" "}
            <FaLocationDot />
            {charter?.location}
          </h3>
          <Rating name="read-only" value={3.5} readOnly /> {/* Rating */}
        </div>
        <h2 className="austin font-medium text-lg uppercase">
          {charter?.title}
        </h2>
      </div>
      <ul className="flex gap-2 flex-wrap py-5 border border-[#6060603d] px-5 ">
        <li className="flex items-center justify-center text-xs md:text-base">
          Guest {charter?.guest}
        </li>
        <li className="flex items-center justify-center sans text-xs md:text-base">
          <BsDot className=" mr-2" />
          Beds {charter?.bed}
        </li>
        <li className="flex items-center justify-center sans text-xs md:text-base">
          <BsDot className=" mr-2" />
          Cabins {charter?.cabin}
        </li>
        <li className="flex items-center justify-center sans text-xs md:text-base">
          <BsDot className=" mr-2" />
          Bathroom: {charter?.bathroom}
        </li>
      </ul>
      <p className="sans text-sm px-5 py-5">{charter?.detail}</p>
      <Link href="" className="austin text-sm font-bold px-5 underline mb-5">
        Details
      </Link>
    </Card>
  );
};

export default CardComponent;
