
"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Define the type for the filters state
interface FiltersState {
  region: string; // Single selection
  yachtTypes: string; // Single selection
  charterTypes: string; // Single selection
  minLength: number;
  maxLength: number;
  sleeps: string;
  priceMin: number;
  priceMax: number;
}

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize filters with values from the URL or default values
  const [filters, setFilters] = useState<FiltersState>({
    region: searchParams.get("region") || "",
    yachtTypes: searchParams.get("yachtTypes") || "",
    charterTypes: searchParams.get("charterTypes") || "",
    minLength: parseInt(searchParams.get("minLength") || "10", 10),
    maxLength: parseInt(searchParams.get("maxLength") || "150", 10),
    sleeps: searchParams.get("sleeps") || "",
    priceMin: parseInt(searchParams.get("priceMin") || "1000", 10),
    priceMax: parseInt(searchParams.get("priceMax") || "5000", 10),
  });

  // Handle changes in filter inputs
  const handleFilterChange = (
    field: keyof FiltersState,
    value: string | number
  ) => {
    if (
      field === "region" ||
      field === "yachtTypes" ||
      field === "charterTypes"
    ) {
      // For single-select fields, directly update the value
      setFilters((prevFilters) => ({
        ...prevFilters,
        [field]: value as string, // Replace the current value
      }));
    } else {
      // For other fields, update directly
      setFilters((prevFilters) => ({
        ...prevFilters,
        [field]: value,
      }));
    }
  };

  // Construct the query string and navigate to the search results page
  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    // Add single-select fields
    if (filters.region) queryParams.set("region", filters.region);
    if (filters.yachtTypes) queryParams.set("yachtTypes", filters.yachtTypes);
    if (filters.charterTypes)
      queryParams.set("charterTypes", filters.charterTypes);

    // Add other filters
    queryParams.set("minLength", filters.minLength.toString());
    queryParams.set("maxLength", filters.maxLength.toString());
    queryParams.set("sleeps", filters.sleeps);
    queryParams.set("priceMin", filters.priceMin.toString());
    queryParams.set("priceMax", filters.priceMax.toString());

    // Navigate to the search results page with query parameters
    router.push(`/yachtcharter?${queryParams.toString()}`);
  };

  // Reset all filters and clear the query parameters
  const resetFilters = () => {
    setFilters({
      region: "",
      yachtTypes: "",
      charterTypes: "",
      minLength: 10,
      maxLength: 150,
      sleeps: "",
      priceMin: 1000,
      priceMax: 5000,
    });
    router.push("/yachtcharter");
  };

  return (
    <motion.div
      className="border rounded-lg shadow-md w-full bg-[#F6F6F6] border-dotted border-primary"
      initial={{ opacity: 0, x: -100 }} // Start from left
      animate={{ opacity: 1, x: 0 }} // Move to normal position
      exit={{ opacity: 0, x: 100 }}
      transition={{
        opacity: { duration: 0.5 }, // Fade in/out duration
        x: { type: "spring", stiffness: 100, damping: 25 }, // Smooth movement from left to right
      }}
    >
      <h2 className="text-xl font-semibold mb-4 border-b-2 border-b-primary austin text-[40px] py-2 px-6">
        Filters
      </h2>
      <div className="px-6 py-4 grid gap-4">
        {/* Display Selected Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.region && (
            <span
              key={filters.region}
              className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-2"
            >
              {filters.region}
              <button
                onClick={() => handleFilterChange("region", "")}
                className="text-white hover:text-red-300"
              >
                ×
              </button>
            </span>
          )}
          {filters.yachtTypes && (
            <span
              key={filters.yachtTypes}
              className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-2"
            >
              {filters.yachtTypes}
              <button
                onClick={() => handleFilterChange("yachtTypes", "")}
                className="text-white hover:text-red-300"
              >
                ×
              </button>
            </span>
          )}
          {filters.charterTypes && (
            <span
              key={filters.charterTypes}
              className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-2"
            >
              {filters.charterTypes}
              <button
                onClick={() => handleFilterChange("charterTypes", "")}
                className="text-white hover:text-red-300"
              >
                ×
              </button>
            </span>
          )}
        </div>

        {/* Destination */}
        <div className="mb-4 flex flex-col justify-between gap-2">
          <label className="austin text-lg font-medium">Destination*</label>
          <Select
            onValueChange={(value) => handleFilterChange("region", value)}
          >
            <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Please choose" />
            </SelectTrigger>
            <SelectContent className="bg-[#F6F6F6] border-primary">
              <SelectItem value="Africa">Africa</SelectItem>
              <SelectItem value="Antarctica">Antarctica</SelectItem>
              <SelectItem value="Arabian Gulf">Arabian Gulf</SelectItem>
              <SelectItem value="Caribbean">Caribbean</SelectItem>
              <SelectItem value="East Mediterranean">
                East Mediterranean
              </SelectItem>
              <SelectItem value="Indian Ocean & South East Asia">
                Indian Ocean & South East Asia
              </SelectItem>
              <SelectItem value="North America">North America</SelectItem>
              <SelectItem value="Northern Europe">Northern Europe</SelectItem>
              <SelectItem value="South & Central America">
                South & Central America
              </SelectItem>
              <SelectItem value="West Mediterranean">
                West Mediterranean
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type of Yacht */}
        <div className="mb-4 flex flex-col justify-between gap-2">
          <label className="austin text-lg font-medium">Type of Yacht*</label>
          <Select
            onValueChange={(value) => handleFilterChange("yachtTypes", value)}
          >
            <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Please choose" />
            </SelectTrigger>
            <SelectContent className="bg-[#F6F6F6] border-primary">
              <SelectItem value="Gulet">Gulet</SelectItem>
              <SelectItem value="Sailing">Sailing</SelectItem>
              <SelectItem value="Catamaran">Catamaran</SelectItem>
              <SelectItem value="Motor">Motor</SelectItem>
              <SelectItem value="Power Catamaran">Power Catamaran</SelectItem>
              <SelectItem value="Classic">Classic</SelectItem>
              <SelectItem value="Expedition">Expedition</SelectItem>
              <SelectItem value="Sport fishing">Sport fishing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Charter Type */}
        <div className="mb-4 flex flex-col justify-between gap-2">
          <label className="austin text-lg font-medium">Charter Type*</label>
          <Select
            onValueChange={(value) => handleFilterChange("charterTypes", value)}
          >
            <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Please choose" />
            </SelectTrigger>
            <SelectContent className="bg-[#F6F6F6] border-primary">
              <SelectItem value="bareboat">Bareboat</SelectItem>
              <SelectItem value="crewed">Crewed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Length (M) */}
        <div className="mb-4 flex flex-col gap-2">
          <label className="austin text-lg font-medium">Length (M)</label>
          <Slider
            defaultValue={[filters.minLength, filters.maxLength]}
            min={10}
            max={150}
            step={1}
            onValueChange={(value) => {
              handleFilterChange("minLength", value[0]);
              handleFilterChange("maxLength", value[1]);
            }}
          />
          <div className="flex justify-between items-center gap-2">
            <Input
              placeholder="10"
              className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
              value={filters.minLength}
              onChange={(e) =>
                handleFilterChange("minLength", parseInt(e.target.value, 10))
              }
            />
            <span className="text-sm">—</span>
            <Input
              placeholder="150"
              className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
              value={filters.maxLength}
              onChange={(e) =>
                handleFilterChange("maxLength", parseInt(e.target.value, 10))
              }
            />
          </div>
        </div>

        {/* Number of Guests */}
        <div className="mb-4 flex flex-col justify-between gap-2">
          <label className="austin text-lg font-medium">
            Number of Guests*
          </label>
          <Select
            onValueChange={(value) => handleFilterChange("sleeps", value)}
          >
            <SelectTrigger className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent className="bg-[#F6F6F6] border-primary">
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Charter Rate (€) */}
        <div className="mb-4 flex flex-col gap-2">
          <label className="austin text-lg font-medium">Charter Rate (€)</label>
          <Slider
            defaultValue={[filters.priceMin, filters.priceMax]}
            min={1000}
            max={5000}
            step={100}
            onValueChange={(value: [number, number]) => {
              handleFilterChange("priceMin", value[0]);
              handleFilterChange("priceMax", value[1]);
            }}
          />
          <div className="flex justify-between items-center gap-2">
            <Input
              placeholder="1000"
              className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
              value={filters.priceMin}
              onChange={(e) =>
                handleFilterChange("priceMin", parseInt(e.target.value, 10))
              }
            />
            <span className="text-sm">—</span>
            <Input
              placeholder="5000"
              className="w-full bg-white border-none outline-none py-3 focus:ring-2 focus:ring-primary"
              value={filters.priceMax}
              onChange={(e) =>
                handleFilterChange("priceMax", parseInt(e.target.value, 10))
              }
            />
          </div>
        </div>

        {/* Search Button */}
        <Button
          className="w-full mt-4 text-white py-6 flex items-center justify-center cursor-pointer"
          onClick={handleSearch}
        >
          <Search className="w-6 h-8 mr-2" /> Search
        </Button>

        {/* Clear Filters Button */}
        <Button
          variant="outline"
          className="w-full mt-4 text-primary py-6 flex items-center justify-center cursor-pointer"
          onClick={resetFilters}
        >
          Clear Filters
        </Button>
      </div>
    </motion.div>
  );
}
