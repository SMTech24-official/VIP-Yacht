/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import CardComponent from "./Card"; // Import your CardComponent
import { Pagination } from "antd"; // Import Ant Design Pagination
import { useGetAllYatchQuery } from "@/redux/service/ankor/extranalApi";
import { useSearchParams } from "next/navigation";

const CharterDetails = () => {
  const itemsPerPage = 8; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);

  const searchTerm = useSearchParams();
  const name = searchTerm.get("name");
  const charterType = searchTerm.get("charterType");
  const minLength = searchTerm.get("minLength");
  const maxLength = searchTerm.get("maxLength");
  const sleeps = searchTerm.get("sleeps");
  const yachtType = searchTerm.get("yachtType");
  const currency = searchTerm.get("currency");
  const priceMin = searchTerm.get("priceMin");
  const priceMax = searchTerm.get("priceMax");
  const region = searchTerm.get("region");

  // Filter out empty or undefined values
  const queryParams = [
    { name: "name", value: name },
    { name: "charterType", value: charterType },
    { name: "minLength", value: minLength },
    { name: "maxLength", value: maxLength },
    { name: "sleeps", value: sleeps },
    { name: "yachtType", value: yachtType },
    { name: "currency", value: currency },
    { name: "priceMin", value: priceMin },
    { name: "priceMax", value: priceMax },
    { name: "region", value: region },
  ].filter((param) => param.value); // Include only non-empty values

  // Fetch data using filtered query parameters
  const { data, isLoading } = useGetAllYatchQuery(queryParams);

  // Ensure data is loaded and has the expected structure
  const yachts = data?.data?.hits || [];

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = yachts.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change from Ant Design Pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render yacht cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {currentItems.map((yacht: any) => (
          <CardComponent
            key={yacht.uri}
            charter={{
              uri: yacht.uri,
              make: yacht.make, // Use yacht make as location
              name: yacht.name,
              hero: yacht.hero, // Replace placeholder with actual image variant
              sleeps: yacht.sleeps,
              cabins: yacht.cabins,
              length: yacht.length,
              builtYear: yacht.builtYear,
            }}
          />
        ))}
      </div>

      {/* Ant Design Pagination Component */}
      <div className="flex justify-end mt-10">
        <Pagination
          current={currentPage}
          total={yachts.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false} // Disable showing page size options
        />
      </div>
    </div>
  );
};

export default CharterDetails;
