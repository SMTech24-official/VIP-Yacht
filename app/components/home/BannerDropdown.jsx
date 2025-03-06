"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function YachtSearch() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="flex justify-between p-4 rounded-lg text-white relative">
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
            <label className="block text-white mb-1 ml-6 mt-4 austin text-sm ">
              {label}
            </label>
            <select className="w-[233px] h-[50px] py-1 rounded-lg focus:outline-none border-none relative bg-gradient-to-r text-white uppercase px-4 capitalize">
              <option
                value=""
                className="text-gray-600 austin text-sm capitalize"
              >{`Please choose`}</option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="text-gray-600 austin text-sm capitalize"
                >
                  {option.label}
                </option>
              ))}
            </select>
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
        <button className="bg-primary cursor-pointer text-white px-[42px] h-[95px] rounded-lg flex items-center gap-2 uppercase font-medium">
          <HiMagnifyingGlass className="text-white text-xl" /> SEARCH
        </button>
      </motion.div>
    </div>
  );
}
