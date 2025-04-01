import Image from "next/image";
import React from "react";
import boatAnimated from "../../assets/boat_7308549.gif";
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <Image
        src={boatAnimated}
        alt="Example GIF"
        width={500}
        height={300}
        className="w-[200px]"
      />
      <p className="md:text-lg sm:text-base text-gray-600 text-sm">
        Well Come to Global BoonYacht
      </p>
    </div>
  );
};
export default Loading;
