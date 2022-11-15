import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="logo" />
        <li className="home">
          <Link to="/">
            <p className="homeText">Home</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
