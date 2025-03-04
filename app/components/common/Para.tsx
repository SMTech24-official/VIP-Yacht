import React from "react";

interface ParaProps {
  className: string;
  paraText: string;
}

const Para: React.FC<ParaProps> = ({ className, paraText }) => {
  return (
    <p className={`leading-[150%] font-normal sans mt-4 ${className}`}>
      {paraText}
    </p>
  );
};

export default Para;
