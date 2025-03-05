import React from "react";
import Details from "../components/specialOffer/Details";
import Banner from "../components/common/Banner";

const OfferDetails = () => {
  return (
    <div>
      <Banner className="" title="SEMPER FIDELIS" details="" />
      <div className="container">
        <h2 className="my-10 austin font-medium text-[32px] text-center">
          Details
        </h2>
        <Details />
      </div>
    </div>
  );
};

export default OfferDetails;
