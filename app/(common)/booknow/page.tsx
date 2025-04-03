"use client";

import React from "react";
import Banner from "@/app/components/common/Banner";
import Slider from "@/app/components/book_now/Slider";
import Badge from "@/app/components/book_now/Badge";
import ContactForm from "@/app/components/book_now/ContactForm";
import { useSearchParams } from "next/navigation";
import { useGetYachtByIdQuery } from "@/redux/service/ankor/extranalApi";
import Loading from "@/app/components/loading/Loading";

const BookNow = () => {
  const searchTerm = useSearchParams();
  const uri = searchTerm.get("uri");
  const { data, isLoading } = useGetYachtByIdQuery(uri || "");

  // Handle cases where URI is missing
  if (!uri) {
    return (
      <div className="text-center text-red-500 min-h-screen w-full flex justify-center items-center">
        URI not provided
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[500px]  items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Banner className="" title={data?.data.blueprint?.name} details="" />
      <div className="container px-2 md:px-0 flex items-center justify-center">
        <div className="max-w-[792px] w-full md:mt-20 mt-10">
          <Slider images={data?.data?.blueprint.images} />
          <Badge
            cabins={data?.data?.blueprint?.sleeps}
            guest={data?.data?.blueprint?.sleeps}
            crew={data?.data?.blueprint?.maxCrew}
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default BookNow;
