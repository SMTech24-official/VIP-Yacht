import React from "react";
import type1 from "../../assets/type1.png";
import Image from "next/image";
// import Slider from "react-slick";
import Heading from "../common/Heading";
import TypeSlider from "../home/TypeSlider";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import Slider from "react-slick";

const Type = () => {
  return (
    <div className="container py-[120px] flex gap-6">
      <div className="left w-[384px]">
        <Heading
          className=""
          headingTxt="What type of yacht charter is right for you?"
        />
        <p className="leading-[150%] font-normal sans mt-4">
          Find Your Perfect Yacht Experience – From Luxury Crewed Charters to
          Adventure-Filled Bareboat Voyages, Discover the Ideal Yacht for Your
          Dream Getaway!
        </p>
      </div>
      <div className="right flex gap-5">
        <div className="w-[380px] rounded-lg">
          <Image src={type1} alt="SEMPER VICTOR" width={400} height={400} />
          <h3 className="austin text-xl font-medium mt-5 text-center">
            SEMPER VICTOR
          </h3>
        </div>
        <div className="w-[384px] rounded-lg">
          <Image src={type1} alt="SEMPER VICTOR" width={400} height={400} />
          <h3 className="austin text-xl font-medium mt-5 text-center">
            SEMPER VICTOR
          </h3>
        </div>
        {/* <TypeSlider /> */}
      </div>
    </div>
  );
};

export default Type;
