"use client";

import React from "react";
import { motion } from "framer-motion";

const Badge = ({
  cabins,
  guest,
  crew,
}: {
  cabins: number;
  guest: number;
  crew: number;
}) => {
  const listItem = [
    { id: 1, label: "cabins", amount: cabins },
    { id: 2, label: "guest", amount: guest },
    { id: 3, label: "crew", amount: crew },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-6 container flex items-center justify-center"
    >
      <ul className="flex gap-20">
        {listItem.map((item, index) => (
          <li
            className={`flex flex-col items-center justify-center gap-[2px] relative ${
              index !== listItem.length - 1
                ? "after:content-[''] after:absolute after:right-[-40px] after:top-1/2 after:h-[40%] after:w-[2px] after:bg-primary after:-translate-y-1/2"
                : ""
            }`}
            key={item.id}
          >
            <span className="quick_sand text-2xl md:text-[32px] font-bold text-fontColor">
              {item.amount} {/* Directly render the number */}
            </span>
            <h3 className="quick_sand font-bold text-base md:text-xl text-fontGray uppercase">
              {item.label}
            </h3>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Badge;
