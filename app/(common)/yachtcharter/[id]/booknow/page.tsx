import React from "react";
import Banner from "@/app/components/common/Banner";
import Slider from "@/app/components/book_now/Slider";
import Badge from "@/app/components/book_now/Badge";
import ContactForm from "@/app/components/book_now/ContactForm";

const page = () => {
  return (
    <div>
      <Banner className="" title="Booking Bonyacht" details="" />
      <div className="container px-2 md:px-0 flex items-center justify-center">
        <div className="max-w-[792px] w-full md:mt-20 mt-10">
          <Slider />
          <Badge />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
