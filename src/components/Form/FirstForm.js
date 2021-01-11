import React from "react";
import "./formStyles.css";
import SecondForm from "./SecondForm";

const FirstForm = () => {
  const handleNext = () => {
    <SecondForm />;
  };

  return (
    <form className="form1">
      <h2>Step 1</h2>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" name="text" />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" name="text" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </form>
  );
};

export default FirstForm;
