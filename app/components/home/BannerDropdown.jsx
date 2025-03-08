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
    <div className="flex flex-col ">
      <div className="grid md:grid-cols-5 grid-cols-2  gap-4 p-4 rounded-[8px] text-white relative">
        {[
          "Destination",
          "Type of Yacht",
          "Yacht Length",
          "Number of Guests",
        ].map((label, index) => (
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
        ))}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="hidden md:block"
        >
          <button className=" bg-primary w-full cursor-pointer text-white p-4 md:p-0 md:px-[42px] md:h-[88px] rounded-lg flex items-center gap-2 uppercase font-medium">
            <HiMagnifyingGlass className="text-white text-xl" />{" "}
            <span className="austin ">SEARCH</span>
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="w-full flex items-center justify-centers"
      >
        <button className=" bg-primary md:hidden mx-4 w-full  cursor-pointer text-white p-4 md:p-0 md:px-[42px] md:h-[88px] rounded-lg flex items-center justify-center gap-2 uppercase font-medium">
          <HiMagnifyingGlass className="text-white text-xl" />{" "}
          <span className="austin ">SEARCH</span>
        </button>
      </motion.div>
    </div>
  );
}
