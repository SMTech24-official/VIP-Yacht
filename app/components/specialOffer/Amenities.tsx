/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { GoDotFill } from "react-icons/go";
import OfferDetailsBookNow from "./OfferDetailsBookNow";

const Amenities = ({ blueprint, uri }: { blueprint: any; uri: string }) => {
  console.log(blueprint?.entertainment);
  return (
    <div className="mb-[120px] mt-10">
      <div className="grid grid-cols-2 gap-x-3 md:gap-x-0  gap-y-10 mb-[120px]">
        <ul className="">
          <h2 className="quick_sand font-bold text-lg md:text-2xl mb-4 ">
            Room Highlights
          </h2>

          <div>
            {blueprint?.amenities.map((item: any, idx: number) => (
              <li
                key={idx}
                className="text-[#606060] flex items-center gap-1 text-sm md:text-base nunito leading-[180%]"
              >
                <GoDotFill className="text-customGray text-[8px]" />
                {item.label} {item.quantity && <span>({item.quantity})</span>}
              </li>
            ))}
          </div>
        </ul>
        <div className="space-y-10">
          <ul className="">
            <h2 className="quick_sand font-bold text-lg md:text-2xl mb-4 ">
              Entertainment
            </h2>

            <div>
              {blueprint?.entertainment.map((item: any, idx: number) => (
                <li
                  key={idx}
                  className="text-[#606060] flex items-center gap-1 text-sm md:text-base nunito leading-[180%]"
                >
                  <GoDotFill className="text-customGray text-[8px]" />
                  {item}
                </li>
              ))}
            </div>
          </ul>
          <ul className="">
            <h2 className="quick_sand font-bold text-lg md:text-2xl mb-4 ">
              Cabin Layout
            </h2>

            <div>
              {blueprint?.cabinLayout.map((item: any, idx: number) => (
                <li
                  key={idx}
                  className="text-[#606060] flex items-center gap-1 text-sm md:text-base nunito leading-[180%]"
                >
                  <GoDotFill className="text-customGray text-[8px]" />
                  {item.label} <span>({item.value})</span>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <ul className="">
          <h2 className="quick_sand font-bold text-lg md:text-2xl mb-4 ">
            Tenders
          </h2>

          <div>
            {blueprint?.tenders.map((item: any, idx: number) => (
              <li
                key={idx}
                className="text-[#606060] flex items-center gap-1 text-sm md:text-base nunito leading-[180%]"
              >
                <GoDotFill className="text-customGray text-[8px]" />
                {item}
              </li>
            ))}
          </div>
        </ul>
      </div>
      <OfferDetailsBookNow uri={uri} />
    </div>
  );
};

export default Amenities;
