import React from "react";
import Banner from "./components/home/Banner";
import Type from "./components/home/Type";
import SpecialOffers from "./components/home/SpecialOffers";
import Blog from "./components/home/Blog";
import AboutUs from "./components/home/AboutUs";
import NewsLatter from "./components/home/NewsLatter";
import Choose from "./components/home/Choose";

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
        <Choose />
      </div>
      <Blog />
      <NewsLatter />
    </div>
  );
};

export default page;
