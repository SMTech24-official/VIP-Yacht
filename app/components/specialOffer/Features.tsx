/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FeatureUI from "./FeatureUI";
import OfferDetailsBookNow from "./OfferDetailsBookNow";
const Features = ({ blueprint, uri }: { blueprint: any; uri: string }) => {
  console.log(blueprint);
  return (
    <div className="flex flex-col gap-[120px] mb-[60px] md:mb-[120px] mt-10">
      <FeatureUI blueprint={blueprint} />

      <OfferDetailsBookNow uri={uri} />
    </div>
  );
};

export default Features;
