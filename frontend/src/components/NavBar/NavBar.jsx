import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li className="home">
            <Link to="/">
              <p className="homeText hidden">Home</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
