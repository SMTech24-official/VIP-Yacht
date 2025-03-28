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

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "overview",
    children: <Overview />,
  },
  {
    key: "2",
    label: "Features",
    children: <Features />,
  },
  {
    key: "3",
    label: "Amenities",
    children: <Amenities />,
  },
];

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    className="custom-tabs"
  />
);

export default App;
