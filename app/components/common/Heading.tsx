import React from "react";

interface HeadingProps {
  className: string;
  headingTxt: string;
}

const Heading: React.FC<HeadingProps> = ({ className, headingTxt }) => {
  return (
    <h2
      className={`austin font-medium text-[40px] capitalize leading-[150%] ${className}`}
    >
      {headingTxt}
    </h2>
  );
};

export default Heading;
