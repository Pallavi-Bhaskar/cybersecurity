import React from "react";
import { Button } from "react-bootstrap";

const recruiters = () => {
  return (
    <div>
      <div class="me-3 ms-3 mt-2">
        <h1
          class="d-flex justify-content-start 
    "
          style={{ color: "#00425A" }}
        >
          Recruiters,
        </h1>
        <h1>Help Us Close Roles Faster</h1>
        <h1
          class="d-flex justify-content-start
    "
        >
          & 10X Your Income
        </h1>
        <button
          className="btn btn-primary justify-content-start"
          style={{
            marginTop: "30px",
            float: "left",
            backgroundColor: "#00425A",
            border: "none",
          }}
        >
          Sign Up now
        </button>
      </div>
    </div>
  );
};

export default recruiters;
