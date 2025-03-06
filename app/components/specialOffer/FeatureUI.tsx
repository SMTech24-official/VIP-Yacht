import React from "react";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { BiSolidBath } from "react-icons/bi";
import length from "../../assets/lengthIcon.png";
import size from "../../assets/sizeIcon.png";
import feature from "../../assets/featureIcon.png";
import max from "../../assets/maxIcon.png";
import Image from "next/image";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: (
      <div>
        <div className="flex items-center gap-9 justify-center">
          <FaLocationDot className="text-primary h-9 w-[22px]" />
          <h3 className="text-black font-bold quick_sand text-xl">Base</h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-base text-[#606060] ml-14">
        Thailand, Koh Chang
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        <div className="flex items-center gap-9 justify-center">
          <Image src={length} alt="" />
          {/* <IoBed className="text-primary h-9 w-[22px]" /> */}
          <h3 className="text-black font-bold quick_sand text-xl">length</h3>
        </div>
      </div>
    ),
    children: <p className="nunito text-base text-[#606060] ml-14">11.97 m</p>,
  },
  {
    key: "3",
    label: (
      <div>
        <div className="flex items-center gap-9 justify-center">
          <IoBed className="text-primary h-9 w-[22px]" />
          <h3 className="text-black font-bold quick_sand text-xl">Beds</h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-base text-[#606060] ml-14">One king bed</p>
    ),
  },

  {
    key: "4",
    label: (
      <div>
        <div className="flex items-center gap-9 justify-center">
          <BiSolidBath className="text-primary h-9 w-[22px]" />
          <h3 className="text-black font-bold quick_sand text-xl">Bathroom</h3>
        </div>
      </div>
    ),
    children: <p className="nunito text-base text-[#606060] ml-14">10</p>,
  },
  {
    key: "5",
    label: (
      <div>
        <div className="flex items-center gap-9 justify-center">
          <Image src={size} alt="" />
          <h3 className="text-black font-bold quick_sand text-xl -ml-2">
            Size
          </h3>
        </div>
      </div>
    ),
    children: (
      <div className="">
        <p className="nunito text-base text-[#606060] ml-14 font-normal">
          Suite: 473 sq. ft. (44m²)
        </p>
        <p className="nunito text-base text-[#606060] ml-14">
          Terrace: 64 to 140 sq. ft. (6 to 13m²)
        </p>
        <p className="nunito text-base text-[#606060] ml-14">
          Total: 537 to 613 sq. ft. (50 to 57m²)
        </p>
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div>
        <div className="flex items-center gap-9 justify-center">
          <HiUserGroup className="text-primary h-9 w-[22px]" />
          <h3 className="text-black font-bold quick_sand text-xl">Guest</h3>
        </div>
      </div>
    ),
    children: <p className="nunito text-base text-[#606060] ml-14">10</p>,
  },
  {
    key: "5",
    label: (
      <div>
        <div className="flex items-center gap-9 justify-center">
          <Image src={feature} alt="" />
          <h3 className="text-black font-bold quick_sand text-xl -ml-3">
            Unique Features
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-base text-[#606060] ml-14">
        Indoor table for two, ability to connect to a PA Studio
      </p>
    ),
  },
  {
    key: "5",
    label: (
      <div>
        <div className="flex items-center gap-5 justify-center">
          <Image src={max} alt="" />
          <h3 className="text-black font-bold quick_sand text-xl">
            Max Occupancy
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-base text-[#606060] ml-14">
        Two adults and one infant (one crib) *no rollaway bed, no sleeper sofa.
      </p>
    ),
  },
];

const App: React.FC = () => (
  <Descriptions title="" layout="vertical" items={items} column={2} />
);

export default App;
