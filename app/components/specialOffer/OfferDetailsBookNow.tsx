import React from "react";
import Btn from "../common/Btn";

const OfferDetailsBookNow = ({ uri }: { uri: string }) => {
  return (
    <div className="bg-[url(./assets/details2.png)] bg-no-repeat bg-center bg-cover py-10 px-5 md:px-[165px] text-white flex items-center justify-center flex-col gap-6 rounded-lg overflow-hidden">
      <h3 className="md:text-[48px] text-2xl quick_sand text-center font-bold leading-[120%]">
        Ready to set sail? Reach out to us and let’s make it happen!
      </h3>
      <p className="md:text-base text-sm">
        Get in touch with our team below. Inquire now
      </p>
      <div className="bg-primary rounded-full">
        <Btn href={`/booknow?uri=${uri}`} btnText="book now" />
      </div>
    </div>
  );
};

export default OfferDetailsBookNow;
