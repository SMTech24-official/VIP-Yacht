import React from "react";
import Banner from "./components/home/Banner";
import Btn from "./components/common/Btn";
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
      <div className="container">
        <Choose />
      </div>
      <Blog />
      <NewsLatter />
    </div>
  );
};

export default page;
