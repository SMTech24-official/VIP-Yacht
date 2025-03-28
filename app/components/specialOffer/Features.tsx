import React from "react";
import FeatureUI from "./FeatureUI";
import OfferDetailsBookNow from "./OfferDetailsBookNow";
const Features = () => {
  return (
    <div className="flex flex-col gap-[120px] mb-[60px] md:mb-[120px] mt-10">
      <FeatureUI />

      <OfferDetailsBookNow />
    </div>
  );
};

export default Features;
