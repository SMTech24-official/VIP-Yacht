/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Overview from "./Overview";
import Features from "./Features";
import Amenities from "./Amenities";

const onChange = (key: string) => {
  console.log(key);
};

interface DetailsProps {
  data: any;
}

const Details: React.FC<DetailsProps> = ({ data }) => {
  console.log(data?.interiorDesigner);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "overview",
      children: (
        <Overview
          architect={data?.blueprint.architect}
          interiorDesigner={data?.blueprint.interiorDesigner}
          description={data?.description}
        />
      ),
    },
    {
      key: "2",
      label: "Features",
      children: <Features blueprint={data?.data?.blueprint} />,
    },
    {
      key: "3",
      label: "Amenities",
      children: <Amenities />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="custom-tabs"
    />
  );
};

export default Details;
