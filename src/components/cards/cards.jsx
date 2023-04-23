import React from "react";
// import "./cards.css";

export default function Cards() {
  return (
    <div className="row mt-5 mb-5">
      <div className="col-sm-4">
        <div
          className="card"
          style={{
            height: "100%",
            background: "#113CFC",
            color: "white",
            marginLeft: "20px",
            border: "none",
          }}
        >
          {/* immediate parent container  */}
          <div className="card-body">
            <h5 className="card-title ">LOOKING FOR A JOB?</h5>
            <p className="card-text me-3">
              Lorem ipsum dolor sit amet consectWith supporting text below as a
              natural lead-in to additionalm Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed ullam odio alias, minus laborum,
              animi distinctio dolorum illum commodi ut laboriosam
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div
          className="card"
          style={{
            height: "100%",
            background: "#41B3FF",
            color: "white",
            border: "none",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">LOOKING FOR A JOB?</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additionalm
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam
              odio alias, minus laborum, animi distinctio dolorum illum commodi
              ut laboriosam cum veritatis itaque, soluta voluptas provident
              voluptates! Dolor, provident! content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div
          className="card"
          style={{
            height: "100%",
            background: "white",
            color: "#008b8b",
            marginRight: "20px",
            border: "none",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">LOOKING FOR A JOB?</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additionalm
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam
              odio alias, minus laborum, animi distinctio dolorum illum commodi
              ut laboriosam cum veritatis itaque, soluta voluptas provident
              voluptates! Dolor, provident! content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
