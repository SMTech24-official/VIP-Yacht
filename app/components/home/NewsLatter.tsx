import React from "react";

const NewsLatter = () => {
  return (
    <div className="py-[120px] px-5">
      <div className="bg-[url(./assets/newsletter.png)] bg-no-repeat bg-center bg-cover container px-4 text-white md:px-10 rounded-lg">
        <div className="md:w-[440px] py-[92px]">
          <h2 className="austin text-5xl md:text-[64px] font-medium">
            Newsletter
          </h2>
          <p className="py-6 text-base md:text-xl sans leading-[160%] font-light">
            Stay Updated with the Latest Yachting Trends – Exclusive Deals,
            Luxury Destinations, and Insider Insights Delivered Straight to Your
            Inbox!
          </p>
          <div className="w-full rounded-4xl bg-white flex justify-between py-[1px] pr-[2px] overflow-hidden pl-5 mt-10">
            <input
              type="text"
              placeholder="Enter Your email address"
              className="placeholder:text-gray-400 text-black border-none outline-none  bg-transparent"
            />
            <button className="bg-secondary md:py-[14px] py-3 px-4 md:px-7 austin font-normal rounded-4xl text-white cursor-pointer md:text-base text-xs">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
