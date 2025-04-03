"use client";
import React from "react";
import Banner from "../common/Banner";
import { motion } from "framer-motion";
import { Skeleton } from "antd";
import { useGetAllSpecialsQuery } from "@/redux/service/own/special/specialApi";
import SpecialOfferCard from "../common/SpecialOfferCard";

const SpecialOfferPage = () => {
  const { data, isLoading } = useGetAllSpecialsQuery([]);
  console.log(data);
  return (
    <div>
      <Banner
        className="bg-[url(./assets/specialOfferBg.png)] mb-20"
        title="Special Offers"
        details=" Explore our latest special offers on charter yachts, available now!
        Discover exclusive deals below."
      />
      <div className="container px-2 md:px-0">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-6 flex-wrap">
          {isLoading
            ? new Array(4)
                .fill(null)
                .map((_, idx) => <Skeleton key={idx} active title paragraph />)
            : data?.data?.map((item, index) => (
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
                    oldPrice={item.regularPrice.toString()}
                    newPrice={item.sellPrice.toString()}
                    length={item.length}
                    sleeps={item.sleeps}
                    cabins={item.cabins}
                    make={item.make}
                    hero={item.hero || ""}
                    uri={item.uri || ""}
                  />
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferPage;
