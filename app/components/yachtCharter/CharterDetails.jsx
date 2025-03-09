"use client";
import React from "react";
import Card from "../yachtCharter/Card";
import { motion } from "framer-motion";

const CardItems = [
  {
    id: 1,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
  {
    id: 2,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
  {
    id: 3,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
  {
    id: 4,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
];

const CharterDetails = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {CardItems?.map((item, index) => (
        <motion.div
          key={item.id}
          className=""
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        >
          <Card charter={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default CharterDetails;
