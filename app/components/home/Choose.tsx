"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Navigation styles

import { EffectCoverflow, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Chose() {
  return (
    <div className="relative">
      {/* Swiper Component */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[EffectCoverflow, Navigation]} // Include Navigation module
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/choose.png" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/choose.png" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/choose.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/choose.png" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/choose.png" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/choose.png" alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/choose.png" alt="Slide 7" />
        </SwiperSlide>
      </Swiper>
      <button className="custom-prev flex items-center justify-center">
        <IoIosArrowBack />
      </button>
      <button className="custom-next flex items-center justify-center">
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Chose;
