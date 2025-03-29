// src/components/AdminLayout.tsx
"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import {
  HiHome,
  HiUser,
  HiCog,
  HiChevronDown,
  HiMenuAlt2,
} from "react-icons/hi";
import { UserAvatarDropdown } from "../userAvatar/UserAvatarDropdown";
import { MdOutlineFolderSpecial } from "react-icons/md";

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: HiHome,
  },
  {
    label: "Special",
    href: "/admin/special",
    icon: MdOutlineFolderSpecial,
  },
  {
    label: "Contacts",
    href: "/contacts",
    icon: HiHome,
  },
  {
    label: "Blogs",
    icon: HiUser,
    dropdown: [
      {
        label: "All Blogs",
        href: "/admin/blog",
      },
      {
        label: "Add New Blog",
        href: "/admin/blog/add-blog",
      },
    ],
  },
  {
    label: "Bookings",
    href: "/admin/booking",
    icon: HiCog,
  },
  {
    label: "Destinations",
    icon: HiCog,
    dropdown: [
      {
        label: "All Destination",
        href: "/admin/destination",
      },
      {
        label: "Add Destination",
        href: "/admin/destination/add-destination",
      },
    ],
  },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <div className="flex h-screen overflow-hidden w-full">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isSidebarCollapsed ? "w-[80px]" : "w-[250px]"
        } bg-secondary overflow-y-auto h-full border-r p-4`}
      >
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={isSidebarCollapsed ? 40 : 64}
            height={isSidebarCollapsed ? 40 : 64}
            className="mx-auto mb-6"
          />
        </Link>

        {/* Menu Items */}
        <nav className="mt-4 grid grid-cols-1 gap-6">
          {menuItems.map((item, index) => (
            <div key={index}>
              {/* Single Menu Item */}
              {item.href && (
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 py-2 px-4 rounded-md ${
                    window.location.pathname === item.href
                      ? "bg-primary text-white"
                      : "hover:text-gray-700 text-white hover:bg-gray-200"
                  }`}
                >
                  {item.icon && <item.icon size={20} />}
                  {!isSidebarCollapsed && <span>{item.label}</span>}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full py-2 px-4 rounded-md text-white hover:text-gray-700 hover:bg-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon size={20} />}
                      {!isSidebarCollapsed && <span>{item.label}</span>}
                    </div>
                    <HiChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Items */}
                  {activeDropdown === item.label && (
                    <div className="pl-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`block py-2 px-4 rounded-md ${
                            window.location.pathname === subItem.href
                              ? "bg-primary text-white"
                              : "hover:text-gray-700 text-white hover:bg-gray-200"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full flex flex-col">
        {/* Header */}
        <nav className="px-5 py-4 border-b flex justify-between items-center">
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <HiMenuAlt2 size={20} />
          </button>
          <UserAvatarDropdown />
        </nav>

        {/* Content */}
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
