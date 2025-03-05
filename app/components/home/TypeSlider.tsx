import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="w-[384px] rounded-lg">
            <img src="../../assets/type1.png" alt="" />
            <h3 className="austin text-xl font-medium mt-5 text-center">
              SEMPER VICTOR
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-[384px] rounded-lg">
            <img src="../../assets/type2.png" alt="" />
            <h3 className="austin text-xl font-medium mt-5 text-center">
              SEMPER VICTOR
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-[384px] rounded-lg">
            <img src="../../assets/type1.png" alt="" />
            <h3 className="austin text-xl font-medium mt-5 text-center">
              SEMPER VICTOR
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
