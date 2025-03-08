"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function YachtSearch() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="flex flex-wrap gap-4 md:gap-0 md:justify-between justify-center items-center p-4 rounded-[8px] text-white relative">
      {["Destination", "Type of Yacht", "Yacht Length", "Number of Guests"].map(
        (label, index) => (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="backdrop-blur-lg bg-gray-600/20 rounded-xl overflow-hidden"
            key={index}
          >
            <label className="block text-white mb-1  px-4 mt-4 austin text-sm ">
              {label}
            </label>
            <div className="relative">
              {/* Positioning the arrow */}
              <span className="absolute top-1/2 -translate-y-1/2 right-4 md:right-5 text-xl">
                <IoIosArrowDown className="md:text-base text-sm" />
              </span>
              <select className="md:w-[233px] w-[150px] md:h-[50px] py-1 appearance-none rounded-lg focus:outline-none border-none relative bg-gradient-to-r text-white text-xs md:text-sm austin px-4 capitalize">
                <option
                  value=""
                  className="text-gray-600 austin text-xs md:text-sm capitalize"
                >{`Please choose`}</option>

                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-gray-600 austin text-xs md:text-sm capitalize"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )
      )}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <button className="bg-primary cursor-pointer text-white p-4 md:p-0 md:px-[42px] md:h-[88px] rounded-lg flex items-center gap-2 uppercase font-medium">
          <HiMagnifyingGlass className="text-white text-xl" />{" "}
          <span className="austin hidden md:block">SEARCH</span>
        </button>
      </motion.div>
    </div>
  );
}
