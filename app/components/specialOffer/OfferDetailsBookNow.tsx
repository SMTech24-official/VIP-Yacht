import React from "react";
import Btn from "../common/Btn";

const OfferDetailsBookNow = () => {
  return (
    <div className="bg-[url(./assets/details2.png)] py-10 px-[165px] text-white flex items-center justify-center flex-col gap-6 rounded-lg overflow-hidden">
      <h3 className="text-[48px] quick_sand text-center font-bold leading-[120%]">
        Ready to set sail? Reach out to us and let’s make it happen!
      </h3>
      <p className="">Get in touch with our team below. Inquire now</p>
      <Btn btnText="book now" />
    </div>
  );
};

export default OfferDetailsBookNow;
