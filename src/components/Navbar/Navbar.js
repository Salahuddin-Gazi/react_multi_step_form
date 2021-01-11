import React from "react";
import * as bootstrap from "react-bootstrap";
import FirstForm from "../Form/FirstForm";
// import "./Navbar.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <bootstrap.Navbar bg="dark" expand="lg" className="mr-10" variant="light">
        <bootstrap.Nav.Link href="/">Home</bootstrap.Nav.Link>
        <bootstrap.Nav.Link href="/form">Form</bootstrap.Nav.Link>
        {/* <bootstrap.Nav inline type="text">
          Welcome To Multi Input Form, Try Yourself
        </bootstrap.Nav> */}
      </bootstrap.Navbar>
    </React.Fragment>
  );
};

export default Navbar;
