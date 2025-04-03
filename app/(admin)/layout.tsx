import React, { ReactNode } from "react";
import AdminLayout from "../components/adminLayout/AdminLayout";

const layout = ({ children }: { children: ReactNode }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default layout;
