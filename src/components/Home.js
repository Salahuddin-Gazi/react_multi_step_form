import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FirstForm from "./Form/FirstForm";

const Home = () => {
  return (
    <div>
      <h3>This is a react form project</h3>
      <Link to="/form">Go to the form page</Link>
    </div>
  );
};

export default Home;
