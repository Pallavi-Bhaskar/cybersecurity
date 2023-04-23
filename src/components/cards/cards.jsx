import React from "react";
import "./cards.css";

export default function Cards() {
  return (
    <div class="row">
      <div class="col-sm-4">
        <div
          class="card"
          style={{
            height: "100%",
            background: "#318CE7",
            color: "white",
            marginLeft: "20px",
            border: "none",
          }}
        >
          {/* immediate parent container  */}
          <div class="card-body">
            <h5 class="card-title">
              LOOKING FOR A JOB?With supporting text below as a natural lead-in
              to additionalm Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed ullam odio alias, minus laboru
            </h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectWith supporting text below as a
              natural lead-in to additionalm Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed ullam odio alias, minus laborum,
              animi distinctio dolorum illum commodi ut laboriosam
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div
          class="card"
          style={{
            height: "100%",
            background: "#ADD8E6",
            color: "white",
            border: "none",
          }}
        >
          <div class="card-body">
            <h5 class="card-title">LOOKING FOR A JOB?</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additionalm
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam
              odio alias, minus laborum, animi distinctio dolorum illum commodi
              ut laboriosam cum veritatis itaque, soluta voluptas provident
              voluptates! Dolor, provident! content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div
          class="card"
          style={{
            height: "100%",
            background: "white",
            color: "#008b8b",
            marginRight: "20px",
            border: "none",
          }}
        >
          <div class="card-body">
            <h5 class="card-title">LOOKING FOR A JOB?</h5>
            <p class="card-text">
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
