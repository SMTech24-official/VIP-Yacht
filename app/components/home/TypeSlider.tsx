"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[384px] h-[350px] rounded-lg">
            <Image
              src="./type1.png"
              alt="SEMPER VICTOR"
              width={384}
              height={400}
            />
            <h3 className="austin text-xl font-medium mt-5 text-center">
              SEMPER VICTOR
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[384px] h-[350px] rounded-lg">
            <Image
              src="./type1.png"
              alt="SEMPER VICTOR"
              width={384}
              height={400}
            />
            <h3 className="austin text-xl font-medium mt-5 text-center">
              SEMPER VICTOR
            </h3>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="w-[384px] rounded-lg">
            <img
              src="./type1.png"
              alt="SEMPER VICTOR"
              width={400}
              height={400}
            />
            <h3 className="austin text-xl font-medium mt-5 text-center">
              SEMPER VICTOR
            </h3>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
