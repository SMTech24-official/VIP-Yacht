"use client";
import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import aboutImg from "../../assets/about1.png";
import Image from "next/image";
import Btn from "../common/Btn";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative md:h-[740px] md:py-[120px]">
      <div className="container relative px-2 md:px-0">
        <div className="left max-w-[486px]">
          <h3 className="uppercase pl-14  text-secondary sans relative after:absolute after:bg-secondary after:h-[1px] after:w-[45px] after:left-0 after:top-1/2 after:-translate-y-1/2">
            about us
          </h3>
          <Heading
            className="mt-[10px]"
            headingTxt="Sailing Beyond Limits with Unmatched Excellence"
          />
          <Para
            className="pt-6 pb-10"
            paraText="At the heart of our global yacht network lies a dedication to delivering unparalleled experiences on the water. With a legacy of craftsmanship, innovation, and trust, we connect yacht enthusiasts worldwide, offering services that redefine luxury and adventure."
          />
          <Btn href="/aboutus" btnText="LEARN MORE" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="md:absolute static mt-6 md:mt-0 right-[12%] top-[35%] z-20 md:w-[520px] rounded-[8px] overflow-hidden "
        >
          <video width="800" className="w-full h-full rounded-[8px]" controls>
            <source src="./about.mp4" type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </motion.div>
      </div>

      <div className="right hidden md:block absolute right-0 top-[-4%] w-[710px] z-0">
        <Image
          src={aboutImg}
          alt=""
          height={400}
          width={400}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
