import React from "react";
import Type from "../components/home/Type";
import Banner from "../components/home/Banner";
import SpecialOffers from "../components/home/SpecialOffers";
import AboutUs from "../components/home/AboutUs";
import Blog from "../components/home/Blog";
import NewsLatter from "../components/home/NewsLatter";
import Chose from "../components/home/Choose";

const page = () => {
  return (
    <div>
      <Banner />
      <Type />
      <SpecialOffers />
      <AboutUs />
      <div className="container px-2 md:px-0 py-[60px] md:py-[120px]">
        <h2 className="quick_sand font-bold text-2xl md:text-[40px] text-center mb-10">
          Choose your destination!
        </h2>
        <Chose />
      </div>
      <Blog />
      <NewsLatter />
    </div>
  );
};

export default page;
