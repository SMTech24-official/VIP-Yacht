"use client";

import SpecialCard from "@/app/components/admin/card/SpecialCard";
import { useGetAllSpecialsQuery } from "@/redux/service/own/special/specialApi";
import { Pagination, Skeleton } from "antd";

import { useState } from "react";

const Special = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllSpecialsQuery([
    { name: "page", value: page },
    { name: "limit", value: 10 },
  ]);

  console.log(data?.data);
  return (
    <div className="p-6">
      {isLoading ? (
        // Display a loading indicator
        <div className="grid grid-cols-3 gap-6 min-h-screen">
          {new Array(10).map((_, idx) => (
            <Skeleton key={idx} active paragraph title />
          ))}
        </div>
      ) : // Check if data is empty
      data?.data?.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-semibold">No specials found.</p>
        </div>
      ) : (
        // Render the grid and pagination when data is available
        <div>
          {/* Grid Layout */}
          <div className="grid grid-cols-3 gap-6 ">
            {data?.data?.map((item, index) => (
              <SpecialCard
                key={index}
                {...item}
                id={item.id ?? "default-id"}
                hero={item.hero ?? "default-hero"}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-6">
            <Pagination
              onChange={(page) => setPage(page)}
              total={Math.ceil(data?.meta?.total ?? 0)} // Calculate total pages dynamically
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Special;
