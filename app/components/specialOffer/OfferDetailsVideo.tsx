/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import getHeroImageUrl from "@/utils/getImageHeroUrl";
import formatNumberAsEuro from "@/utils/formatNumberAsEuro";

interface OfferDetailsVideoProps {
  images: string[]; // Array of image URLs or identifiers
  pricing?: number;
}

const OfferDetailsVideo: FC<OfferDetailsVideoProps> = ({ images, pricing }) => {
  console.log(pricing);
  return (
    <div className="container min-h-[500px] pt-12 px-2 md:px-0 relative">
      {/* Swiper Component */}
      <Swiper className="rounded-xl !h-full overflow-hidden">
        {images?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image
              className="size-full rounded-xl"
              objectFit="cover"
              quality={100}
              height={600}
              width={960}
              alt={`image ${idx + 1}`}
              src={`https://api.ankor.io${getHeroImageUrl(item || "", "960w")}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Price Badge */}
      <div className="badge absolute left-1/2 -translate-x-1/2 bottom-20 transform translate-y-1/2 z-20">
        <div className="w-max bg-primary py-3 md:py-5 px-6 md:px-10 rounded-[8px]">
          <h2 className="austin font-medium text-base md:text-2xl text-white">
            Weekly price: €{formatNumberAsEuro(pricing || 0)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsVideo;
