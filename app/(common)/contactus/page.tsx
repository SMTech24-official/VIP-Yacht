import Banner from "@/app/components/common/Banner";
import ContactMedia from "@/app/components/contact_us/ContactMedia";
import ContactForm from "@/app/components/contact_us/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner className="" title="contact us" details="" />
      <div className="container px-2 md:px-0 flex items-center justify-center pt-10 md:pt-20 pb-[60px] md:pb-[120px]">
        <div className="max-w-[932px] bg-[#F6F6F6] rounded-[8px] p-10">
          <h1 className="quick_sand text-3xl md:text-5xl font-bold text-center mb-10">
            Get In touch
          </h1>
          <div className="relative grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-20 items-center justify-center">
            <div className="col-span-2">
              <ContactForm />
            </div>
            <div className="hidden md:block h-[81%] w-[1px] bg-primary absolute right-[31%] top-[3%]"></div>
            <div className="">
              <ContactMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
