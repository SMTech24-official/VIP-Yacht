"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`md:h-[44px] md:w-[48px] h-10 w-10 flex items-center justify-center border rounded-md ${
          currentPage === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <IoIosArrowBack />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          className={`md:h-[44px] md:w-[48px] h-10 w-10  flex flex-wrap items-center justify-center rounded-md border transition ${
            currentPage === i + 1
              ? "bg-primary text-white border-none"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`md:h-[44px] md:w-[48px] h-10 w-10 flex items-center justify-center border rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
