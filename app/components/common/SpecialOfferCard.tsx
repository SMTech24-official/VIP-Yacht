import Image from "next/image";
import React from "react";
import SpecialOffer1 from "../../assets/specialOffer1.png";
import { BsDot } from "react-icons/bs";
import Link from "next/link";

interface SpecialOfferCardProps {
  name: string;
  oldPrice: string;
  newPrice: string;
  guestNo: number;
  bedNo: number;
  cabinNO: number;
  bathroomNo: number;
}

const SpecialOfferCard: React.FC<SpecialOfferCardProps> = ({
  name,
  oldPrice,
  newPrice,
  guestNo,
  bedNo,
  cabinNO,
  bathroomNo,
}) => {
  return (
    <div>
      <Link
        href="/specialoffer/id"
        className="max-w-[384px] h-[350px] rounded-lg overflow-hidden relative z-10 cursor-pointer group"
      >
        <div className="overlay w-full rounded-lg opacity-0 h-full bg-[#0000006e] absolute left-0 top-0 group-hover:opacity-100 duration-300 transition-all"></div>
        <div className="w-full h-full absolute left-0 top-0 -z-10">
          <Image
            src={SpecialOffer1}
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
              {guestNo} Guest
            </li>
            <li className="flex items-center justify-center sans text-sm md:text-base">
              <BsDot className=" mr-2" />
              {bedNo} Bed
            </li>
            <li className="flex items-center justify-center sans text-sm md:text-base">
              <BsDot className=" mr-2" />
              {cabinNO} Cabin
            </li>
            <li className="flex items-center justify-center sans text-sm md:text-base">
              <BsDot className=" mr-2" />
              {bathroomNo} Bathroom
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default SpecialOfferCard;
