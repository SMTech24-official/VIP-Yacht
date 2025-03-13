import Banner from "@/app/components/common/Banner";
import Management from "@/app/components/management/Management";
import React from "react";


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
