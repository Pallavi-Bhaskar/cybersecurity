import React from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";

export default function Categories() {
  return (
    <div style={{ margin: "10px 10px" }}>
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox1"
        value="option1"
        label="Freelance"
        inline
      />
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox2"
        value="option2"
        label="Full time"
        inline
      />
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox3"
        value="option3"
        label="Internship"
        inline
      />
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox3"
        value="option3"
        label="Part Time"
        inline
      />
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox3"
        value="option3"
        label="temporary"
        inline
      />
      <MDBCheckbox
        name="inlineCheck"
        id="inlineCheckbox3"
        value="option3"
        label="job"
        inline
      />
    </div>
  );
}
