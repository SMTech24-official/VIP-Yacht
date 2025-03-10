import React from "react";

const listItem = [
  { id: 1, label: "cabins", amount: 5 },
  { id: 2, label: "guest", amount: 8 },
  { id: 3, label: "crew", amount: 4 },
];

const Badge = () => {
  return (
    <div className="pt-6 container flex items-center justify-center">
      <ul className="flex gap-20">
        {listItem.map((item, index) => (
          <li
            className={`flex flex-col items-center justify-center gap-[2px] relative ${
              index !== listItem.length - 1
                ? "after:content-[''] after:absolute after:right-[-40px] after:top-1/2 after:h-[40%] after:w-[2px] after:bg-primary after:-translate-y-1/2"
                : ""
            }`}
            key={item.id}
          >
            <span className="quick_sand text-2xl md:text-[32px] font-bold text-fontColor">
              {item.amount}
            </span>
            <h3 className="quick_sand font-bold text-base md:text-xl text-fontGray uppercase">
              {item.label}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Badge;
