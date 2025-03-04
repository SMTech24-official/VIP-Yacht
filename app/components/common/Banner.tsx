import Image from "next/image";
import React from "react";
import bg from "../../assets/specialOfferBg.png";
interface BannerProps {
  className: string;
  title: string;
  details: string;
}

const Banner: React.FC<BannerProps> = ({ className, title, details }) => {
  return (
    <div
      className={`relative z-10 h-[460px] bg-[url(./assets/specialOfferBg.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-6 text-white ${className}`}
    >
      <div className="overlay w-full h-full absolute left-0 top-0 bg-[#0000003a] -z-10"></div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="quick_sand text-[40px] font-bold">{title}</h1>
        <p className="poppins">{details}</p>
      </div>
    </div>
  );
};

export default Banner;
