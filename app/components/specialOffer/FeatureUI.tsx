/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const FeatureUI = ({ blueprint }: { blueprint: any }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {blueprint?.bathrooms && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Bathrooms</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.bathrooms}
            </span>
          </li>
        )}
        {blueprint?.beam && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Beam</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.beam}
            </span>
          </li>
        )}
        {blueprint?.cabins && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Cabins</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.cabins}
            </span>
          </li>
        )}
        {blueprint?.cruiseSpeed && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Cruise Speed</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.cruiseSpeed}
            </span>
          </li>
        )}
        {blueprint?.cruisingCapacity && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Cruise Capacity</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.cruisingCapacity}
            </span>
          </li>
        )}
        {blueprint?.decks && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Decks</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.decks}
            </span>
          </li>
        )}
        {blueprint?.draft && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Drafts</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.draft}
            </span>
          </li>
        )}
        {blueprint?.fuelCapacity && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Fuel Capacity</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.fuelCapacity}
            </span>
          </li>
        )}
        {blueprint?.hullConstruction && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Hull Construction</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.hullConstruction}
            </span>
          </li>
        )}
        {blueprint?.hullType && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Hull Type</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.hullType}
            </span>
          </li>
        )}
        {blueprint?.interiorDesigner && (
          <li>
            <div>
              <span className="font-semibold text-2xl">
                Hull Interior Designer
              </span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.interiorDesigner}
            </span>
          </li>
        )}
        {blueprint?.length && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Length</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.length}
            </span>
          </li>
        )}
        {blueprint?.make && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Make</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.make}
            </span>
          </li>
        )}
        {blueprint?.maxCrew && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Max Crew</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.maxCrew}
            </span>
          </li>
        )}
        {blueprint?.model && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Modal</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.model}
            </span>
          </li>
        )}
        {blueprint?.sleeps && (
          <li>
            <div>
              <span className="font-semibold text-2xl">Sleeps</span>
            </div>
            <span className="text-lg font-medium mt-3 block">
              {blueprint?.sleeps}
            </span>
          </li>
        )}
      </div>
    </div>
  );
};

export default FeatureUI;
