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
  uri: string;
}

const Details: React.FC<DetailsProps> = ({ data, uri }) => {
  console.log(data);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "overview",
      children: (
        <Overview
          uri={uri}
          architect={data?.blueprint.architect}
          interiorDesigner={data?.blueprint.interiorDesigner}
          description={data?.description}
        />
      ),
    },
    {
      key: "2",
      label: "Features",
      children: <Features uri={uri} blueprint={data?.blueprint} />,
    },
    {
      key: "3",
      label: "Amenities",
      children: <Amenities uri={uri} blueprint={data?.blueprint} />,
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
