"use client";
import React from "react";
import SpecialOfferCard from "../common/SpecialOfferCard";
import Banner from "../common/Banner";
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
  {
    id: 4,
    name: "IKIGAI",
    oldPrice: 28000,
    newPrice: 25200,
    guest: 14,
    bed: 8,
    cabin: 2,
    bathroom: 1,
  },
  {
    id: 5,
    name: "MANE ET NOCTE",
    oldPrice: 28000,
    newPrice: 25200,
    guest: 14,
    bed: 8,
    cabin: 2,
    bathroom: 1,
  },
  {
    id: 6,
    name: "SEMPER FIDELIS",
    oldPrice: 28000,
    newPrice: 25200,
    guest: 14,
    bed: 8,
    cabin: 2,
    bathroom: 1,
  },
];

const SpecialOfferPage = () => {
  return (
    <div>
      <Banner
        className="bg-[url(./assets/specialOfferBg.png)] mb-20"
        title="Special Offers"
        details=" Explore our latest special offers on charter yachts, available now!
        Discover exclusive deals below."
      />
      <div className="container ">
        <div className="flex gap-6 mb-6 flex-wrap">
          {offerItem?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }} // Initial state: slightly transparent and off-screen
              animate={{ opacity: 1, y: 0 }} // Final state: fully opaque and on screen
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Delay the animation for each card to create staggered effect
                ease: "easeOut",
              }}
              className=""
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
      </div>
    </div>
  );
};

export default SpecialOfferPage;
