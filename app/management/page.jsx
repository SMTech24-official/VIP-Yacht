import React from "react";
import Management from "../components/management/Management";
import Banner from "../components/common/Banner";

const page = () => {
  return (
    <div>
      <Banner
        className="!bg-[url(./assets/managementBg.png)]"
        title="Yacht Management"
      />
      <Management />
    </div>
  );
};

export default page;
