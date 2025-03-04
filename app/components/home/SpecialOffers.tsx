import React from "react";
import Heading from "../common/Heading";
import SpecialOfferCard from "../common/SpecialOfferCard";
import { Cabin } from "next/font/google";
import Btn from "../common/Btn";
import { motion } from "framer-motion";

const offerItem = [
  {
    id: 1,
    name: "IKIGAI",
    oldPrice: 28000,
    newPrice: 25200,
    guest: 14,
    bed: 8,
    cabin: 2,
    bathroom: 1,
  },
  {
    id: 2,
    name: "MANE ET NOCTE",
    oldPrice: 28000,
    newPrice: 25200,
    guest: 14,
    bed: 8,
    cabin: 2,
    bathroom: 1,
  },
  {
    id: 3,
    name: "SEMPER FIDELIS",
    oldPrice: 28000,
    newPrice: 25200,
    guest: 14,
    bed: 8,
    cabin: 2,
    bathroom: 1,
  },
];

const SpecialOffers = () => {
  return (
    <div className="container pb-[120px] flex flex-col items-center justify-center">
      <Heading className="text-center mb-10" headingTxt="special offers" />
      <div className="flex gap-6 mb-6">
        {offerItem?.map((item) => (
          <SpecialOfferCard
            key={item.id}
            name={item.name}
            oldPrice={item.oldPrice.toString()}
            newPrice={item.newPrice.toString()}
            guestNo={item.guest}
            bedNo={item.bed}
            cabinNO={item.cabin}
            bathroomNo={item.bathroom}
          />
        ))}
      </div>
      <Btn btnText="See more" />
    </div>
  );
};

export default SpecialOffers;
