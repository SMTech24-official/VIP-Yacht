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
        <div className="flex items-center gap-5 md:gap-9 justify-center">
          <FaLocationDot className="text-primary h-9 w-[22px]" />
          <h3 className="text-black font-bold quick_sand text-base md:text-xl">
            Base
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 -mt-5">
        Thailand, Koh Chang
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        <div className="flex items-center gap-5 md:gap-9 justify-center">
          <Image src={length} alt="" height={25} width={25} />
          <h3 className="text-black font-bold quick_sand text-base md:text-xl -ml-2">
            length
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 -mt-5">
        11.97 m
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <div>
        <div className="flex items-center gap-5 md:gap-9 justify-center">
          <IoBed className="text-primary h-9 w-[22px]" />
          <h3 className="text-black font-bold quick_sand text-base md:text-xl">
            Beds
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 -mt-5">
        One king bed
      </p>
    ),
  },

  {
    key: "4",
    label: (
      <div>
        <div className="flex items-center gap-5 md:gap-9 justify-center">
          <BiSolidBath className="text-primary h-9 w-[22px]" />
          <h3 className="text-black font-bold quick_sand text-base md:text-xl">
            Bathroom
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 -mt-5">
        10
      </p>
    ),
  },
  {
    key: "5",
    label: (
      <div>
        <div className="flex items-center gap-5 md:gap-9 justify-center">
          <Image src={size} alt="" height={25} width={25} />
          <h3 className="text-black font-bold quick_sand text-base md:text-xl -ml-2">
            Size
          </h3>
        </div>
      </div>
    ),
    children: (
      <div className="-mt-5">
        <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14  font-normal">
          Suite: 473 sq. ft. (44m²)
        </p>
        <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 ">
          Terrace: 64 to 140 sq. ft. (6 to 13m²)
        </p>
        <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 ">
          Total: 537 to 613 sq. ft. (50 to 57m²)
        </p>
      </div>
    ),
  },
  {
    key: "6",
    label: (
      <div>
        <div className="flex items-center gap-5 md:gap-9 justify-center">
          <HiUserGroup className="text-primary h-9 w-[22px]" />
          <h3 className="text-black font-bold quick_sand text-base md:text-xl">
            Guest
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 -mt-5">
        10
      </p>
    ),
  },
  {
    key: "7",
    label: (
      <div>
        <div className="flex items-center gap-5 md:gap-9 justify-center">
          <Image src={feature} alt="" height={25} width={25} />
          <h3 className="text-black font-bold quick_sand text-base md:text-xl -ml-3">
            Unique Features
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 -mt-5">
        Indoor table for two, ability to connect to a PA Studio
      </p>
    ),
  },
  {
    key: "8",
    label: (
      <div>
        <div className="flex items-center gap-5 md:gap-5 justify-center">
          <Image src={max} alt="" height={25} width={25} />
          <h3 className="text-black font-bold quick_sand text-base md:text-xl">
            Max Occupancy
          </h3>
        </div>
      </div>
    ),
    children: (
      <p className="nunito text-sm md:text-base text-[#606060] ml-10 md:ml-14 -mt-5">
        Two adults and one infant (one crib) *no rollaway bed, no sleeper sofa.
      </p>
    ),
  },
];

const App: React.FC = () => (
  <Descriptions
    title=""
    layout="vertical"
    items={items}
    column={2}
    className="no-colon " // Add a custom class to remove the colon
  />
);

export default App;
