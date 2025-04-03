"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Navigation styles

import { EffectCoverflow, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetAllDestinationsQuery } from "@/redux/service/own/destination/destinationApi";
import Image from "next/image";
import { Skeleton } from "antd";
import Link from "next/link";

function Chose() {
  const { data, isLoading } = useGetAllDestinationsQuery([]);
  console.log(data);
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
        {isLoading
          ? new Array(5).fill(null).map((_, item) => (
              <SwiperSlide key={item}>
                <Skeleton active title paragraph />
              </SwiperSlide>
            ))
          : data?.data?.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  className="flex relative"
                  href={`/destination/${item.id}`}
                >
                  <Image
                    src={item.banner || ""}
                    height={600}
                    width={250}
                    alt="Slide 1"
                    className="w-full h-[617px]"
                  />
                  <div className="absolute bottom-5 w-full flex justify-center items-center z-10">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
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
