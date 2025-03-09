import Link from "next/link";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const contactItem = [
  {
    id: 1,
    label: "+971 4 458 4567",
    icon: <IoLogoWhatsapp />,
    href: "https://wa.me/+97144584567",
  },
  {
    id: 2,
    label: "info@globalboonyacht.com",
    icon: <IoMail />,
    href: "mailto:info@globalboonyacht.com",
  },
  {
    id: 3,
    label: "info@globalboonyacht.com",
    icon: <FaSkype />,
    href: "skype:info@globalboonyacht.com?call",
  },
];
const ContactMedia = () => {
  return (
    <div className="flex flex-col gap-6">
      {contactItem?.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className="flex gap-5 items-center"
        >
          <div className="text-fontGray text-xl">{item.icon}</div>
          <span className="nunito font-medium">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default ContactMedia;
