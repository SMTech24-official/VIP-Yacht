"use client";
import React from "react";
import { motion } from "framer-motion";

const OfferDetailsVideo = () => {
  return (
    <div className="container px-2 md:px-0 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="my-20"
      >
        <video width="800" className="w-full h-full rounded-[8px]" controls>
          <source src="/about.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
      </motion.div>
      <div className="badge py-3 md:py-5 px-6 md:px-10 bg-primary w-fit rounded-[8px] absolute left-1/2 -translate-x-1/2 bottom-[-11%] md:bottom-[-5%]">
        <h2 className="austin font-medium text-base md:text-2xl text-white ">
          Weekly price: €500,000
        </h2>
      </div>
    </div>
  );
};

export default OfferDetailsVideo;
