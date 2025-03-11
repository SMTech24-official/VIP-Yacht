"use client";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const steps = [
  "Contact Information",
  "About Your Trip",
  "Request Confirmation",
];

export default function BookingForm() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false); // New state for submission

  const handleSubmit = () => {
    setSubmitted(true); // Set submission state to true
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-10 mb-[60px] md:mb-[120px] w-full max-w-4xl mx-auto bg-white p-8 rounded-md"
      >
        <h2 className="text-center text-[32px] quick_sand font-bold text-fontGray">
          Thank you !
        </h2>
        <p className="text-center nunito font-medium text-lg text-primary mt-6">
          Thank you for your interest. Our team will contact you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="mt-10 mb-[60px] md:mb-[120px] w-full max-w-4xl mx-auto bg-white pt-8 rounded-md ">
      {/* Step Progress Indicator */}
      <div className="relative flex flex-col items-center">
        {/* Progress Line */}
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-full md:w-10/12 h-[2px] bg-[#ECECEC] z-20">
          <div
            className="h-1 bg-primary transition-all"
            style={{ width: `${(selectedIndex / (steps.length - 1)) * 100}%` }}
          />
          <span className="absolute left-[-1px] top-1/2 -translate-y-1/3 w-[10px] h-[10px] bg-primary rounded-full z-0"></span>
          <span className="absolute right-[-1px] top-1/2 -translate-y-1/3 w-[10px] h-[10px] bg-primary rounded-full z-0"></span>
          <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/3 w-[10px] h-[10px] bg-primary rounded-full z-0"></span>
        </div>
      </div>

      {/* Tab Component */}
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex justify-between">
          {steps.map((step, index) => (
            <Tab
              key={index}
              className="cursor-pointer quick_sand py-2 font-bold text-sm md:text-lg text-fontGray rounded-lg w-fit md:w-[120px] text-center"
            >
              {step}
            </Tab>
          ))}
        </Tab.List>

        {/* Panels for each Tab */}
        <Tab.Panels>
          <Tab.Panel>
            {/* Step 1: Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-4 mt-12"
            >
              <label className="block text-primary nunito font-medium text-base md:text-xl">
                Name*
              </label>
              <input
                type="text"
                className="nunito w-full p-2 border rounded-md  placeholder:text-primary text-primary py-4 px-5 border-primary outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your full name"
              />

              <label className="block text-primary nunito font-medium text-base md:text-xl">
                Email*
              </label>
              <input
                type="email"
                className="nunito w-full p-2 border rounded-md  placeholder:text-primary text-primary py-4 px-5 border-primary outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />

              <label className="block text-primary nunito font-medium text-base md:text-xl">
                Country*
              </label>
              <div className="rounded-md border border-primary px-5 py-4">
                <select className="nunito w-full bg-transparent border-none placeholder:text-primary text-primary  outline-none mr-4 rounded-lg">
                  <option className="">United States</option>
                  <option className="">United Kingdom</option>
                  <option className="">Canada</option>
                </select>
              </div>
              <label className="block text-primary nunito font-medium text-base md:text-xl">
                Phone number*
              </label>
              <input
                type="number"
                className="nunito w-full p-2 border rounded-md  placeholder:text-primary text-primary py-4 px-5 border-primary outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your Phone number"
              />
              <p className=" nunito text-sm md:text-base text-fontGray leading-[150%] md:text-center">
                Your privacy is of utmost importance to us. Rest assured, your
                details will be kept confidential and will not be shared with
                any third parties.
              </p>
            </motion.div>
          </Tab.Panel>

          <Tab.Panel>
            {/* Step 2: About Your Trip */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-4 mt-12"
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-1">
                <div className="flex flex-col gap-4">
                  <label className="block text-primary nunito font-medium text-base md:text-xl">
                    Type of Boat*
                  </label>
                  <input
                    type="text"
                    className="nunito w-full p-2 border rounded-md  placeholder:text-primary text-primary py-4 px-5 border-primary outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter type of boat"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="block text-primary nunito font-medium text-base md:text-xl">
                    Model or Description Boat*
                  </label>
                  <input
                    type="text"
                    className="nunito w-full p-2 border rounded-md placeholder:text-primary text-primary py-4 px-5 border-primary outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter type of boat"
                  />
                </div>
              </div>

              <label className="block text-primary nunito font-medium text-base md:text-xl">
                Guests*
              </label>
              <input
                type="number"
                className="nunito w-full p-2 border rounded-md  placeholder:text-primary text-primary py-4 px-5 border-primary outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter number of guests"
              />

              <label className="block text-primary nunito font-medium text-base md:text-xl">
                Destination*
              </label>
              <input
                type="text"
                className="nunito w-full p-2 border rounded-md  placeholder:text-primary text-primary py-4 px-5 border-primary outline-none focus:ring-2 focus:ring-primary"
                placeholder="Destination"
              ></input>
              <p className="nunito text-sm md:text-base text-fontGray leading-[150%]">
                Will you need complimentary conciergeries such as flights,
                nursery, special shuttle vehicles etc. ?
              </p>
              <div className="flex gap-4">
                <label className="flex items-center nunito text-fontGray">
                  <input
                    type="radio"
                    name="need"
                    value="yes"
                    className="peer hidden"
                  />
                  {/* Custom Circle for Email Address */}
                  <span className="w-4 h-4 mr-2 rounded-full border-2 border-primary relative after:absolute after:w-0 after:h-2 after:bg-primary after:rounded-full  after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:w-2"></span>
                  Yes
                </label>
                <label className="flex items-center nunito text-fontGray">
                  <input
                    type="radio"
                    name="need"
                    value="no"
                    className="peer hidden"
                  />
                  {/* Custom Circle for Phone Number */}
                  <span className="w-4 h-4 mr-2 rounded-full border-2 border-primary relative after:absolute after:w-0 after:h-2 after:bg-primary after:rounded-full  after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:w-2"></span>
                  No
                </label>
              </div>
            </motion.div>
          </Tab.Panel>

          <Tab.Panel>
            {/* Step 3: Request Confirmation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-4 mt-12"
            >
              <label className="block text-primary nunito font-medium text-base md:text-xl">
                You prefer to be Contacted by*
              </label>
              <div className="flex gap-4">
                <label className="flex items-center nunito text-fontGray">
                  <input
                    type="radio"
                    name="contact"
                    value="email"
                    className="peer hidden"
                  />
                  {/* Custom Circle for Email Address */}
                  <span className="w-4 h-4 mr-2 rounded-full border-2 border-primary relative after:absolute after:w-0 after:h-2 after:bg-primary after:rounded-full  after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:w-2"></span>
                  Email Address
                </label>
                <label className="flex items-center nunito text-fontGray">
                  <input
                    type="radio"
                    name="contact"
                    value="phone"
                    className="peer hidden"
                  />
                  {/* Custom Circle for Phone Number */}
                  <span className="w-4 h-4 mr-2 rounded-full border-2 border-primary relative after:absolute after:w-0 after:h-2 after:bg-primary after:rounded-full  after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:w-2"></span>
                  Phone Number
                </label>
              </div>

              <label className="block text-primary nunito font-medium text-base md:text-xl">
                Please, add any additional comments below*
              </label>
              <textarea
                className="nunito w-full p-2 border rounded-md  placeholder:text-primary text-primary py-4 px-5 border-primary outline-none focus:ring-2 focus:ring-primary"
                placeholder="Any additional comments?"
              ></textarea>
            </motion.div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setSelectedIndex((prev) => Math.max(prev - 1, 0))}
          className={`bg-primary w-fit hover:bg-white border border-transparent hover:border-primary text-white hover:text-fontGray duration-300 transition-all rounded-[50px] flex gap-4 items-center p-1  cursor-pointer quick_sand uppercase group ${
            selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedIndex === 0}
        >
          <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-primary">
            <IoIosArrowForward className="text-[#606060] group-hover:text-white" />
          </span>
          <span className="mr-3 quick_sand md:text-base text-sm font-bold">
            previous
          </span>
        </button>
        {selectedIndex === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="bg-primary w-fit hover:bg-white border border-transparent hover:border-primary text-white hover:text-fontGray duration-300 transition-all rounded-[50px] flex gap-4 items-center p-1  cursor-pointer quick_sand uppercase group"
          >
            <span className="ml-3 quick_sand md:text-base text-sm font-bold">
              send
              {/* {selectedIndex === steps.length - 1 ? "Submit" : "Next"} */}
            </span>
            <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-primary">
              <BsFillSendFill className="text-[#606060] group-hover:text-white" />
            </span>
          </button>
        ) : (
          <button
            onClick={() =>
              setSelectedIndex((prev) => Math.min(prev + 1, steps.length - 1))
            }
            className="bg-primary w-fit hover:bg-white border border-transparent hover:border-primary text-white hover:text-fontGray duration-300 transition-all rounded-[50px] flex gap-4 items-center p-1  cursor-pointer quick_sand uppercase group"
          >
            <span className="ml-3 quick_sand md:text-base text-sm font-bold">
              next
            </span>
            <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-primary">
              <IoIosArrowForward className="text-[#606060] group-hover:text-white" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

// {selectedIndex === steps.length - 1 ? (
//   <button
//     onClick={handleSubmit}
//     className="btn bg-primary text-white py-3 px-8 rounded-lg"
//   >
//     Submit
//   </button>
// ) : (
//   <button
//     onClick={() => setSelectedIndex((prev) => prev + 1)}
//     className="btn text-white bg-primary py-3 px-8 rounded-lg"
//   >
//     Next <IoIosArrowForward className="ml-3 text-xl" />
//   </button>
// )}
