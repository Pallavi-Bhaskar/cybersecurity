import React from "react";
import Second from "../components/herogirl";
import Solving from "../components/heroGirlSolving";

const second = () => {
  return (
    <div
      className="flex-container mt-5 ms-3"
      style={{
        marginTop: "50px",
        marginLeft: "20px",
        marginRight: "20px",
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Second />
      <Solving />
    </div>
  );
};

export default second;
