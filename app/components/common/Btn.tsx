import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface BtnProps {
  btnText: string;
}

const Btn: React.FC<BtnProps> = ({ btnText }) => {
  return (
    <div>
      <button className="bg-primary rounded-[50px] flex gap-4 items-center p-1 cursor-pointer">
        <span className="bg-white w-11 h-11 rounded-full flex items-center justify-center ">
          <IoIosArrowForward className="text-[#606060]" />
        </span>
        <span className="pr-5 austin font-medium text-white uppercase">
          {btnText}
        </span>
      </button>
    </div>
  );
};

export default Btn;
