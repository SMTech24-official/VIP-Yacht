"use client";
import React from "react";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import OfferDetailsBookNow from "./OfferDetailsBookNow";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <div className="mt-10 mb-[60px] md:mb-[120px]">
      <div className="flex md:flex-row flex-col gap-6 mb-[60px] md:mb-[120px]">
        <div className="left md:w-1/2">
          <p className="sans text-xl leading-[150%]">
            Operation Area : Corsica, Sardinia, Italy, Marseille, Balearic Is.,
            Spain, Caribbean Sea
          </p>
          <p className="mt-6 flex gap-2 ml-1 leading-[190%]">
            <GoDotFill className="text-2xl  " />
            Semper Fidelis has undergone a stunning transformation at Viters
            Shipyard, with a complete refit and refurbishment. The interior is a
            masterpiece of modern design, crafted from clear varnished teak to
            create a warm and inviting atmosphere. The spacious layout includes
            a large master cabin and two guest cabins forward, complemented by
            an elegant saloon and dining room amidship.
          </p>
        </div>
        <div className="right md:w-1/2">
          <p className="flex gap-2 ml-1 leading-[190%]">
            <GoDotFill className="text-2xl" />
            Toward the aft, you’ll find a cutting-edge navigation station, chart
            table, and crew cabin to port, while the starboard side boasts a
            fully equipped galley and a comfortable crew mess. The innovative
            transom design reveals a garage housing the tender, seamlessly
            combining practicality with style. Sailing on Ocean Monarch is an
            unparalleled experience—her exceptional upwind performance and
            responsive handling make every journey a true pleasure. Whether
            cruising or racing, Ocean Monarch embodies the perfect balance of
            elegance, innovation, and seaworthiness.
          </p>
        </div>
      </div>
      <OfferDetailsBookNow />
    </div>
  );
};

export default Overview;
