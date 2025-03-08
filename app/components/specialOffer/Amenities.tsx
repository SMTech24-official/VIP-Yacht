import React from "react";
import { GoDotFill } from "react-icons/go";
import OfferDetailsBookNow from "./OfferDetailsBookNow";

const room = [
  {
    id: 1,
    list: "Refrigerated mini bar",
  },
  {
    id: 2,
    list: "In-suite safe",
  },
  {
    id: 3,
    list: "Tea/coffee machine",
  },
];

const bedAndBath = [
  {
    id: 1,
    list: "Refrigerated mini bar",
  },

  {
    id: 2,
    list: "Down duvets and pillows",
  },
  {
    id: 3,
    list: "Orthopedic and hypo-allergenic pillows, on request",
  },
  {
    id: 4,
    list: "Cotton bathrobes",
  },
  {
    id: 5,
    list: "Make-up/shaving mirror",
  },
  {
    id: 6,
    list: "Hair dryer",
  },
  {
    id: 7,
    list: "Deluxe bathroom amenities",
  },
];

const services = [
  {
    id: 1,
    list: "Twice-daily housekeeping",
  },

  {
    id: 2,
    list: "24-hour Concierge",
  },
  {
    id: 3,
    list: "24-hour In-Suite Dining",
  },
];
const Technology = [
  {
    id: 1,
    list: "55 to 65-inch flat-screen HD TVs",
  },
  {
    id: 2,
    list: "Bedside USB charging stations (230/120V)",
  },
  {
    id: 3,
    list: "Multi-line telephone with voicemail",
  },
  {
    id: 4,
    list: "Tablet with access to Hotel services, spa and restaurant reservations, lighting and temperature control,",
  },
  {
    id: 5,
    list: "In-room entertainment with superior audio and video equipment, Bluetooth audio connectivity for enhanced listening, and connection for smart devices",
  },
];

const Amenities = () => {
  return (
    <div className="mb-[120px] mt-10">
      <div className="grid grid-cols-2 gap-x-3 md:gap-x-0  gap-y-10 mb-[120px]">
        <ul className="">
          <h2 className="quick_sand font-bold text-lg md:text-2xl mb-4 ">
            Room Highlights
          </h2>
          {room?.map((item) => (
            <div key={item.id} className="flex gap-1 items-center">
              <GoDotFill className="text-customGray text-[8px]" />
              <li className="text-[#606060] text-sm md:text-base nunito leading-[180%]">
                {item.list}
              </li>
            </div>
          ))}
        </ul>
        <ul className="">
          <h2 className="quick_sand font-bold text-lg md:text-2 mb-4 gap-y-10">
            Services
          </h2>
          {services?.map((item) => (
            <div key={item.id} className="flex gap-1 items-center">
              <GoDotFill className="text-customGray text-[8px]" />
              <li className="text-[#606060] text-sm md:text-base nunito leading-[180%]">
                {item.list}
              </li>
            </div>
          ))}
        </ul>
        <ul className="">
          <h2 className="quick_sand font-bold text-lg md:text-2 mb-4 gap-y-10">
            Bed & Bath
          </h2>
          {bedAndBath?.map((item) => (
            <div key={item.id} className="flex gap-1 items-center">
              <GoDotFill className="text-customGray text-[8px]" />
              <li className="text-[#606060] text-sm md:text-basese nunito leading-[180%] ">
                {item.list}
              </li>
            </div>
          ))}
        </ul>
        <ul className="">
          <h2 className="quick_sand font-bold text-lg md:text-2 mb-4 gap-y-10">
            Technology
          </h2>
          {Technology?.map((item) => (
            <div key={item.id} className="flex gap-1 ">
              <GoDotFill className="text-customGray text-[8px] mt-2" />
              <li className="text-[#606060] text-sm md:text-base nunito leading-[180%]">
                {item.list}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <OfferDetailsBookNow />
    </div>
  );
};

export default Amenities;
