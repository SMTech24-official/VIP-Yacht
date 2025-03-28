/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import YatchCard from "@/app/components/admin/card/YatchCard";
import { useGetAllYatchQuery } from "@/redux/service/ankor/extranalApi";
import { Input } from "antd";
import { useState, useEffect } from "react";

const AllYatch = () => {
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Construct query parameters based on the search term
  const queryParams = searchTerm ? [{ name: "name", value: searchTerm }] : [];

  // Fetch data from the API with the search term as a query parameter
  const { data, isLoading, error, refetch } = useGetAllYatchQuery(queryParams);

  // Manually trigger a refetch when the search term becomes empty
  useEffect(() => {
    if (!searchTerm) {
      refetch(); // Refetch when the search term is cleared
    }
  }, [searchTerm, refetch]);

  // Log the API response for debugging
  console.log("API Response:", data);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        {/* Total Yatch Count */}
        <h2 className="text-xl font-bold">
          <b>Total Yatch:</b> {data?.data?.estHits || 0}
        </h2>

        {/* Search Input */}
        <Input
          className="!w-[250px]"
          placeholder="Search yatch name"
          onChange={(e) => setSearchTerm(e.target.value)} // Update the state
        />
      </div>

      {/* Loading State */}
      {isLoading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p>Error fetching yatch data.</p>}

      {/* Display Yatch Data */}
      {data?.data?.hits?.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {data.data.hits.map((yatch: any, index: number) => (
            <YatchCard {...yatch} key={index} />
          ))}
        </div>
      ) : (
        <p>No yatch found.</p>
      )}
    </div>
  );
};

export default AllYatch;
