"use client";
import React from "react";
import Image from "next/image";
import { Card, Rating } from "@mui/material";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import getHeroImageUrl from "@/utils/getImageHeroUrl";

// Define the type for the yacht data
interface Yacht {
  uri: string;
  hero: string;
  name: string;
  length: string;
  cabins: string;
  sleeps: string;
  builtYear: string;
  make: string;
}

const CardComponent = ({ charter }: { charter: Yacht }) => {
  return (
    <Card className="md:max-w-[384px] w-full rounded-lg overflow-hidden border border-[#85848464] shadow-md transition-transform ">
      {/* Image Section */}
      <div className="w-full h-[250px] relative">
        <Image
          src={`https://api.ankor.io${getHeroImageUrl(
            charter.hero || "",
            "320w"
          )}`}
          alt={charter.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-center">
          <h2 className="austin font-medium text-lg uppercase">
            {charter?.name}
          </h2>
          <Rating name="read-only" value={3.5} readOnly />
        </div>

        {/* Specifications List */}
        <ul className="flex flex-wrap gap-2 text-sm">
          <li className="flex items-center">Length: {charter?.length}m</li>
          <li className="flex items-center">
            <BsDot className="mr-1" />
            Sleeps: {charter?.sleeps}
          </li>
          <li className="flex items-center">
            <BsDot className="mr-1" />
            Cabins: {charter?.cabins}
          </li>
          <li className="flex items-center">
            <BsDot className="mr-1" />
            Make: {charter?.make}
          </li>
        </ul>

        {/* Built Year */}
        <p className="text-gray-600 text-sm">Built in {charter?.builtYear}</p>

        {/* Details Link */}
        <Link
          href={`yachtcharter/${charter?.uri}`}
          className="block austin text-sm font-bold underline text-primary hover:text-primary-dark transition-colors"
        >
          View Details
        </Link>
      </div>
    </Card>
  );
};

export default CardComponent;
