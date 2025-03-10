import React from "react";
import Banner from "../components/common/Banner";
import Slider from "../components/book_now/Slider";
import ContactForm from "../components/book_now/ContactForm";
import Badge from "../components/book_now/Badge";

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
