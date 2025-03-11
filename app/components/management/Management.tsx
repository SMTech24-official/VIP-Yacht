"use client";
import Image from "next/image";
import React from "react";
import groupImg from "../../assets/management.png";
import management2 from "../../assets/management2.png";
// import crew1 from "../../assets/management_crew1.png";
// import crew2 from "../../assets/management_crew2.png";
// import crew3 from "../../assets/management_crew3.png";
import sailboatIcon from "../../assets/sailboatIcon.png";
import { motion } from "framer-motion";
import Card from "./Crew2";

const offerItem = [
  {
    id: 1,
    label:
      "Establishing a robust communication structure to heighten efficiency",
  },
  {
    id: 2,
    label: "Expert management of yard periods and maintenance plans",
  },
  {
    id: 3,
    label: "Technical support, service, and repair",
  },
  {
    id: 4,
    label: "Transparent financial structures covering all services",
  },
  {
    id: 5,
    label: "Ensuring a hassle-free and enjoyable yacht ownership journey",
  },
  {
    id: 6,
    label: "Brokerage and sales assistance",
  },
  {
    id: 7,
    label: "Comprehensive insurance solutions",
  },
  {
    id: 8,
    label: "Professional crew recruitment services",
  },
  {
    id: 9,
    label: "Meticulous handling of every aspect of yacht ownership",
  },
];

const Management = () => {
  return (
    <div className="container px-2 md:px-0 md:py-[120px] py-[60px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center justify-center md:mb-[120px] mb-[60px]"
      >
        <div className="left w-full">
          <Image
            src={groupImg}
            alt=""
            height={400}
            width={400}
            className="w-full rounded-[8px]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="right"
        >
          <h2 className=" font-bold text-[22px] md:text-[32px] leading-[130%] md:leading-[150%] mb-6 quick_sand">
            Effortless Yacht Management for Seamless Sailing
          </h2>
          <p className="nunito text-sm md:text-base leading-[150%] text-fontGray">
            At Boon Yachts, we offer a holistic approach to yacht management,
            combining innovation and expertise to ensure your vessel operates at
            peak performance. Our dedicated team excels in unifying
            communication between owners, crew, and maintenance teams, creating
            a seamless flow of information and coordination. From tailored
            seasonal plans to real-time operational support, we ensure every
            detail is handled with precision, allowing you to enjoy a worry-free
            yachting experience year-round. Trust Boon Yachts to deliver
            unmatched reliability, efficiency, and peace of mind for your valued
            investment.
          </p>
        </motion.div>
      </motion.div>
      {/* crew */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-10"
      >
        <h3 className="uppercase pl-14 text-secondary nunito relative after:absolute after:bg-secondary after:h-[1px] after:w-[45px] after:left-0 after:top-1/2 after:-translate-y-1/2">
          our skilled team
        </h3>
        <h2 className="quick_sand font-bold text-[28px] md:text-[40px] leading-[130%] md:leading-[150%] mt-2">
          Meet Our Proffesional Crew
        </h2>
      </motion.div>
      {/* crew */}
      <Card />
      {/* what we offer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:my-[120px] my-[60px]"
      >
        <h2 className="quick_sand font-bold text-3xl md:text-[32px] leading-[150%] text-center mb-10">
          What We Offer
        </h2>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-7">
          {offerItem?.map((item) => (
            <li key={item.id} className="flex gap-3">
              <Image
                src={sailboatIcon}
                alt=""
                className="h-6 w-6"
                width={50}
                height={50}
              />
              <p className="nunito md:text-base text-sm leading-[120%] text-fontGray">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
      {/* what we offer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="left"
        >
          <h2 className=" font-bold text-xl leading-[130%]  md:text-[32px] md:leading-[150%] mb-6 quick_sand">
            Enhancing Yacht Performance for Peaceful Journeys
          </h2>
          <p className="nunito leading-[150%] text-fontGray md:text-base text-sm">
            Backed by a wealth of expertise, we are dedicated to optimizing
            every aspect of your yacht’s functionality and performance. From
            meticulous maintenance to tailored upgrades, we ensure your vessel
            operates at its peak, allowing you to embrace the freedom of the
            open seas with absolute peace of mind.
          </p>
        </motion.div>
        <div className="right w-full">
          <Image
            src={management2}
            alt="journey"
            height={400}
            width={400}
            className="w-full rounded-[8px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Management;
