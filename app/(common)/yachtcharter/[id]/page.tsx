"use client";
import React from "react";
import Banner from "@/app/components/common/Banner";
import OfferDetailsVideo from "@/app/components/specialOffer/OfferDetailsVideo";
import { useParams } from "next/navigation";
import { useGetYachtByIdQuery } from "@/redux/service/ankor/extranalApi";
import Loading from "@/app/components/loading/Loading";
import Details from "@/app/components/specialOffer/Details";

const OfferDetails = () => {
  const params = useParams() as { id: string };
  console.log(params.id);
  const { data, isLoading } = useGetYachtByIdQuery(params.id);

  const blueprint = data?.data.blueprint;
  const pricing = data?.data?.pricing;
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  console.log(pricing);
  return (
    <div>
      <Banner className="" title={blueprint?.name} details="" />
      <div className="container md:px-0 px-2">
        <OfferDetailsVideo
          images={blueprint?.images}
          pricing={pricing?.weekPricingTo?.displayPrice}
        />
        <h2 className="my-10 austin font-medium text-[32px] text-center">
          Details
        </h2>

        <Details uri={params.id} data={data?.data} />
      </div>
    </div>
  );
};

export default OfferDetails;
