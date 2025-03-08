"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const menuItem = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Yacht Charter", link: "/yachtcharter" },
  { id: 3, name: "About Us", link: "/about" },
  { id: 4, name: "Special Offer", link: "/specialoffer" },
  { id: 5, name: "Management", link: "/management" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="py-4 bg-gradient-to-r from-[#264463] to-[#021D45] shadow-lg relative z-[1000]">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={logo}
            alt="Logo"
            width={160}
            height={56}
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile & Tablet Menu Drawer */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="left"
            className="bg-[#021D45] text-white w-64 p-6 flex flex-col justify-between h-full mt-8"
          >
            <nav className="flex-1 mt-10">
              <ul className="flex flex-col gap-6">
                {menuItem.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className={`sans text-white font-medium text-lg tracking-wide transition-all duration-300 hover:text-gray-300 ${
                        pathName === item.link ? "underline" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <Link
                  href="/contact"
                  className="block md:hidden austin bg-white rounded-full  text-base w-fit px-8 py-3 -ml-1 text-black font-semibold tracking-wide shadow-md hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Contact
                </Link>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-10">
          {menuItem.map((item) => (
            <li key={item.id} className="list-none">
              <Link
                href={item.link}
                className={`sans text-white font-medium text-lg tracking-wide relative after:transition-all after:duration-300 after:absolute after:w-0 after:top-[-5px] after:left-0 after:bg-white after:h-[1px] hover:after:w-full ${
                  pathName === item.link
                    ? "after:absolute after:w-full after:top-[-5px] after:left-0 after:bg-white after:h-[1px]"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden austin lg:inline-block bg-white rounded-full px-6 py-3 text-[#021D45] font-semibold tracking-wide shadow-md hover:bg-primary hover:text-white transition-all duration-300"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
