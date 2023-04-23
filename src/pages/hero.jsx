import React from "react";
import Recruiters from "../components/heroRecruiters";
import MainSide from "../components/hero/heroform";
import CenterMain from "../components/heroCenter";

const recuiters = () => {
  return (
    <div
      className="flex-container"
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        display: "flex",
        background: "#BFEAF5",
        height: "100%",
        padding: "20px",
      }}
    >
      <Recruiters />
      <CenterMain />
      <MainSide />
    </div>
  );
};

export default recuiters;
