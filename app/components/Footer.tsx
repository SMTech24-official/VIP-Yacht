import Image from "next/image";
import React from "react";
import logo from "../assets/Logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const itemsQuick = [
  {
    id: 1,
    name: "Yacht Charter",
    link: "/",
  },
  {
    id: 2,
    name: "Special Offer",
    link: "/",
  },
  {
    id: 3,
    name: "About us",
    link: "/",
  },
  {
    id: 4,
    name: "Management",
    link: "/",
  },
  {
    id: 5,
    name: "Destination",
    link: "/",
  },
];

const itemsHelp = [
  {
    id: 1,
    name: "Tearms & Condition",
    link: "/",
  },
  {
    id: 2,
    name: "Campus Ink",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="bg-footer pt-20 pb-5 px-[120px] text-white">
      <div className="container flex flex-col md:gap-[84px]">
        {/* top */}
        <div className="top flex justify-between gap-[181px] w-full">
          {/* left */}
          <div className="left max-w-[250px]">
            <div className="">
              <Image src={logo} alt="logo" />
            </div>
            <p className="austin font-medium mb-10 text-base leading-[140%] mt-2">
              Redefining Luxury Sailing Across the World&apos;s Finest Waters.
            </p>
            <h4 className="mb-5">Follow Us</h4>
            <div className="flex items-center">
              <Link href="/" className="pr-[14px] py-1 text-xl">
                <FaFacebook />
              </Link>
              <Link href="/" className="pr-[14px] py-1 text-xl">
                <FaInstagram />
              </Link>
              <Link href="/" className="pr-[14px] py-1 text-xl">
                <FaXTwitter />
              </Link>
              <Link href="/" className="pr-[14px] py-1 text-xl">
                <FaLinkedin />
              </Link>
              <Link href="/" className="text-xl py-1">
                <FaYoutube />
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="right flex-1 flex justify-between">
            <div className="">
              <h3 className="font-medium leading-[130%] mb-4 text-xl">
                Quick links
              </h3>
              <ul className="flex flex-col gap-2">
                {itemsQuick?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="sans hover:opacity-75 duration-200 transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h3 className="font-medium leading-[130%] mb-4 text-xl">
                Help Center
              </h3>
              <ul className="flex flex-col gap-2">
                {itemsHelp?.map((item) => (
                  <li key={item?.id}>
                    <Link
                      href={item?.link}
                      className="sans hover:opacity-75 duration-200 transition-all"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h3 className="font-medium leading-[130%] mb-4 text-xl">
                Call us :
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  Whats App :
                  <Link
                    href="https://wa.me/97141234567"
                    className="sans hover:opacity-75 duration-200 transition-all"
                  >
                    {" "}
                    +971 4 123 4567
                  </Link>
                </li>
                <li>
                  Call :
                  <Link
                    href="tel:+971509876543"
                    className="sans font-light hover:opacity-75 duration-200 transition-all"
                  >
                    {" "}
                    +971 50 987 6543
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="bottom flex justify-between border-t border-t-white pt-2">
          <div className="left">
            <h3 className="sans">© 2025 Global Boonyacht</h3>
          </div>
          <div className="right">
            <ul className="flex flex-row gap-2">
              <li className="flex">
                <Link
                  href="/"
                  className="sans hover:opacity-75 duration-200 transition-all"
                >
                  Legal Notice
                </Link>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <Link
                  href="/"
                  className="sans hover:opacity-75 duration-200 transition-all"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <Link
                  href="/"
                  className="sans hover:opacity-75 duration-200 transition-all"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
