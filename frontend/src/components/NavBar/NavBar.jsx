import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  // let activeStyle = {
  //   textDecoration: "none",
  // };
  return (
    <nav>
      <div className="logo" />
      <ul>
        <li className="homeText">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
