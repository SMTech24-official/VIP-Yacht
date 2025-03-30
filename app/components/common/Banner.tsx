import React from "react";

interface BannerProps {
  className: string;
  title: string;
  details: string;
}

const Banner: React.FC<BannerProps> = ({ className, title, details }) => {
  return (
    <div
      className={`relative  z-10 h-[460px] md:h-[560px] bg-[url(./assets/specialOfferBg.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center gap-6 text-white ${className}`}
    >
      <div className="overlay hero w-full h-full absolute left-0 top-0 -z-10"></div>
      <div className="flex flex-col items-center justify-center gap-5 px-4 md:px-0">
        <h1 className="quick_sand text-5xl text-center md:text-[40px] font-bold">
          {title}
        </h1>
        <p className="poppins text-center text-sm md:text-base">{details}</p>
      </div>
    </div>
  );
};

export default Banner;
