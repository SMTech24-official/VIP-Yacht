import Image from "next/image";
import React from "react";

import { BsDot } from "react-icons/bs";
import Link from "next/link";
import getHeroImageUrl from "@/utils/getImageHeroUrl";

interface SpecialOfferCardProps {
  name: string;
  oldPrice: string;
  newPrice: string;
  length: number;
  sleeps: number;
  cabins: number;
  make: string;
  hero: string;
  uri: string;
}

const SpecialOfferCard: React.FC<SpecialOfferCardProps> = ({
  name,
  oldPrice,
  newPrice,
  length,
  sleeps,
  cabins,
  make,
  hero,
  uri,
}) => {
  return (
    <div>
      <Link
        href={`/specialoffer/${uri}?oldPrice=${oldPrice}&newPrice=${newPrice}`}
        className="max-w-[384px] h-[350px] rounded-lg overflow-hidden relative z-10 cursor-pointer group"
      >
        <div className="overlay w-full rounded-lg opacity-0 h-full bg-[#0000006e] absolute left-0 top-0 group-hover:opacity-100 duration-300 transition-all"></div>
        <div className="w-full h-full absolute left-0 top-0 -z-10">
          <Image
            src={`https://api.ankor.io${getHeroImageUrl(hero || "", "320w")}`}
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="details relative z-10 text-white flex flex-col px-4 pt-[160px]">
          <h3 className="py-4 border-b border-b-white austin text-xl font-medium">
            {name}
          </h3>
          <div className="flex gap-3 py-[18px]">
            <span className="line-through opacity-50 text-[18px] line-through-custom">
              ${oldPrice}
            </span>
            <span className=" text-[18px]">${newPrice}</span>
          </div>
          <ul className="flex gap-2 mb-5">
            <li className="flex items-center justify-center sans text-sm md:text-base">
              {sleeps} Sleeps
            </li>
            <li className="flex items-center justify-center sans text-sm md:text-base">
              <BsDot className=" mr-2" />
              {length} Length
            </li>
            <li className="flex items-center justify-center sans text-sm md:text-base">
              <BsDot className=" mr-2" />
              {cabins} Cabin
            </li>
            <li className="flex items-center justify-center sans text-sm md:text-base">
              <BsDot className=" mr-2" />
              {make.slice(0, 10)} Make
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default SpecialOfferCard;
