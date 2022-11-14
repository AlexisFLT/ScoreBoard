import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  // let activeStyle = {
  //   textDecoration: "none",
  // };
  return (
    <nav>
      <div className="logo" />
      <ul>
        <li className="imageStandard image">
          <NavLink to="/Standard">
            <p className="texte">Standard</p>
          </NavLink>
        </li>
        <li className="imageTDF image">
          <Link to="/GameOfThrones">
            <p className="texte">Game of Thrones</p>
          </Link>
        </li>
        <li className="imageMCP image">
          <Link to="/MCP">
            <p className="texte">Marvel Crisis Protocol</p>
          </Link>
        </li>
        <li className="imageSWL image">
          <Link to="/SWL">
            <p className="texte">Star Wars Legion</p>
          </Link>
        </li>
        <li className="imageTI image">
          <Link to="TwilightImperium">
            <p className="texte">Twilight Imperium</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
