"use client";
import Image from "next/image";
import React from "react";
import logo from "../assets/Logo.png";
import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItem = [
  {
    id: 1,
    name: "Yacht Charter",
    link: "/",
  },
  {
    id: 2,
    name: "About us",
    link: "/about",
  },
  {
    id: 3,
    name: "Special Offer",
    link: "/specialoffer",
  },
  {
    id: 4,
    name: "Management",
    link: "/management",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="r py-3 bg-gradient-to-r from-[#264463] to-[#021D45] relative z-[1000]">
      <div className="container flex items-center justify-between">
        {/* logo */}
        <div className="logo">
          <Image src={logo} alt="Logo" width={150} height={52} />
        </div>
        {/* menu */}
        <ul className="flex gap-8 items-center">
          {menuItem.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`text-white sans relative ${
                  pathName === item.link
                    ? "after:absolute after:w-full after:top-[-8px] after:left-0 after:bg-white after:h-[1px]"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* btn */}
        <Link
          href="/"
          className="bg-white rounded-[40px] px-[25px] py-3 text-fontColor font-medium austin"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
