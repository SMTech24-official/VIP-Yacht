"use client";
import React from "react";
import type1 from "../../assets/type1.png";
import type2 from "../../assets/type2.png";
import Image from "next/image";
// import Slider from "react-slick";
import Heading from "../common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideItem = [
  {
    id: 1,
    img: type1,
    name: "SEMPER VICTOR",
  },
  {
    id: 1,
    img: type2,
    name: "SEMPER VICTOR",
  },
  {
    id: 1,
    img: type1,
    name: "SEMPER VICTOR",
  },
  {
    id: 1,
    img: type2,
    name: "SEMPER VICTOR",
  },
];

const Type = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="container pb-[120px] pt-[200px] grid grid-cols-3 gap-6">
      <div className="left col-span-1">
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
      <div className="right col-span-2">
        <div className="">
          <Slider {...settings}>
            {slideItem?.map((item) => (
              <div className="" key={item.id}>
                <div className="w-[380px] rounded-lg">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={400}
                    height={400}
                  />
                  <h3 className="austin text-xl font-medium mt-5 text-center">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
{
  /* <TypeSlider /> */
}

export default Type;
