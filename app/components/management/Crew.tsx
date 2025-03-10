import React from "react";
// import crew1 from "../../assets/management_crew1.png";
// import crew2 from "../../assets/management_crew2.png";
// import crew3 from "../../assets/management_crew3.png";

const crewMembers = [
  {
    id: 1,
    name: "Harry Larson",
    role: "Yacht Officer",
    image: "./management_crew1.png",
    size: "full",
  },
  {
    id: 2,
    name: "Arnold Morris",
    role: "Captain",
    image: "./management_crew2.png",
    size: "square",
  },
  {
    id: 3,
    name: "Tomas Finn",
    role: "2nd Officer",
    image: "./management_crew3.png",
    size: "full",
  },
  {
    id: 4,
    name: "David Taylor",
    role: "Engineer",
    image: "./management_crew1.png",
    size: "half",
  },
  {
    id: 5,
    name: "Arnold Morris",
    role: "Captain",
    image: "./management_crew2.png",
    size: "half",
  },
  {
    id: 6,
    name: "Arnold Morris",
    role: "Captain",
    image: "./management_crew3.png",
    size: "square",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10  gap-x-6 auto-rows-[minmax(200px,_auto)]">
      {crewMembers.map((member) => (
        <div
          key={member.id}
          className={`relative z-10 rounded-[8px] overflow-hidden ${
            member.size === "full"
              ? "h-[480x]"
              : member.size === "half"
              ? " h-[400px]"
              : "h-[325px]"
          }`}
        >
          <div
            className="overlay w-full h-full absolute left-0 top-0 bg-no-repeat bg-cover bg-top -z-10"
            style={{ backgroundImage: `url(${member.image})` }}
          ></div>
          <div className="absolute left-5 bottom-5">
            <h3 className="quick_sand font-bold text-xl mb-2 text-white capitalize">
              {member.name}
            </h3>
            <h4 className="uppercase nunito font-medium text-white">
              {member.role}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
