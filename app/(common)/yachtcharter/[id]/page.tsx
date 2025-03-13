import React from "react";
import Details from "@/app/components/specialOffer/Details";
import Banner from "@/app/components/common/Banner";
import OfferDetailsVideo from "@/app/components/specialOffer/OfferDetailsVideo";

const OfferDetails = () => {
  return (
    <div>
      <Banner className="" title="SEMPER FIDELIS" details="" />
      <div className="container md:px-0 px-2">
        <OfferDetailsVideo />
        <h2 className="my-10 austin font-medium text-[32px] text-center">
          Details
        </h2>

        <Details />
      </div>
    </div>
  );
};

export default OfferDetails;
