"use client";
import React, { useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import Pagination from "../common/Pagination";
import img1 from "../../assets/yacht1.png";
import img2 from "../../assets/yacht3.png";
import img3 from "../../assets/yacht2.png";

const CardItems = [
  {
    id: 1,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    image: img1,
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
  {
    id: 2,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    image: img2,
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
  {
    id: 3,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    image: img3,
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
  {
    id: 4,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    image: img1,
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
  {
    id: 5,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    image: img2,
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
  {
    id: 6,
    location: "Crystal Voyages",
    title: "Blue Horizon",
    image: img3,
    guest: 8,
    bed: 8,
    cabin: 5,
    bathroom: 3,
    details:
      "A luxurious yacht offering elegance, comfort, and adventure on the open sea.",
  },
];

const CharterDetails = () => {
  const itemsPerPage = 8; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(CardItems.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = CardItems.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {currentItems.map((item, index) => (
          <motion.div
            key={item.id}
            className=""
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <Card charter={item} />
          </motion.div>
        ))}
      </div>

      {/* Pagination Component */}
      <div className="float-end mt-10">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CharterDetails;
