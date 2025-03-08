"use client";
import React from "react";
import Heading from "../common/Heading";
import SpecialOfferCard from "../common/SpecialOfferCard";
import Btn from "../common/Btn";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="container px-2 md:px-0 pb-[120px] flex flex-col justify-center">
      <Heading className="text-center mb-10" headingTxt="special offers" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-6">
        {offerItem?.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="mb-2"
          >
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
          </motion.div>
        ))}
      </div>
      <Link href="/specialoffer">
        <Btn btnText="See more" />
      </Link>
    </div>
  );
};

export default SpecialOffers;
