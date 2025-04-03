"use client";

import DestinationCard from "@/app/components/admin/card/DestinationCard";
import { useGetAllDestinationsQuery } from "@/redux/service/own/destination/destinationApi";
import { Empty, Pagination, Skeleton } from "antd";
import { useState } from "react";

const Destination = () => {
  const [page, setPage] = useState(1); // Initialize page with a default value
  const { data, isLoading } = useGetAllDestinationsQuery([
    {
      name: "page",
      value: page,
    },
    {
      name: "limit",
      value: 10,
    },
  ]);

  console.log(data);

  // Log the API response for debugging
  console.log("API Response:", data);

  return (
    <div className="p-6">
      {isLoading ? (
        // Show loading skeleton while fetching data
        <div className="grid grid-cols-3 gap-6">
          {new Array(10).fill(null).map((_, idx) => (
            <Skeleton active title paragraph key={idx} />
          ))}
        </div>
      ) : (
        // Render destinations or show empty state
        <div>
          {Array.isArray(data?.data) && data?.data.length > 0 ? (
            <div>
              <div className="grid grid-cols-3 gap-6">
                {data?.data.map((item) => (
                  <DestinationCard key={item.id} {...item} />
                ))}
              </div>
              <div className="flex items-center justify-center mt-8">
                <Pagination total={10} onChange={(page) => setPage(page)} />
              </div>
            </div>
          ) : (
            // Show empty state if no data is available
            <div className="min-h-screen flex items-center justify-center">
              <Empty description="No destinations found" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Destination;
