"use client";
import React from "react";
import Heading from "../common/Heading";
import SpecialOfferCard from "../common/SpecialOfferCard";
import Btn from "../common/Btn";
import { motion } from "framer-motion";
import { useGetAllSpecialsQuery } from "@/redux/service/own/special/specialApi";
import { Skeleton } from "antd";

const SpecialOffers = () => {
  const { data, isLoading } = useGetAllSpecialsQuery([]);
  return (
    <div className="container px-2 md:px-0 pb-[120px] flex flex-col md:items-center justify-center">
      <Heading className="text-center mb-10" headingTxt="special offers" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-6">
        {isLoading ? (
          <div className="grid grid-cols-3 gap-6">
            {new Array(3).fill(null).map((_, idx) => (
              <Skeleton key={idx} active title paragraph />
            ))}
          </div>
        ) : (
          data?.data?.slice(0, 3).map((item, index) => (
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
                hero={item.hero || ""}
                oldPrice={item.regularPrice.toString()}
                newPrice={item.sellPrice.toString()}
                cabins={item.cabins}
                sleeps={item.sleeps}
                length={item.length}
                make={item.make}
                uri={item.uri}
              />
            </motion.div>
          ))
        )}
      </div>
      <div className="">
        <Btn href="/specialoffer" btnText="See more" />
      </div>
    </div>
  );
};

export default SpecialOffers;
