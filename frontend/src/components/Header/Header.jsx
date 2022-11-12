import React from "react";
import "./header.css";

function Header() {
  // const logo = (
  //   <img
  //     src={../../assets/logoMinis&Bros.svg}
  //     className="logo"
  //     alt="standard"
  //   />
  // );

  return (
    <nav>
      {/* <div>{logo}</div> */}
      <ul>
        <li className="imageStandard image">
          <p className="texte">Standard</p>
        </li>
        <li className="imageTDF image">
          <p className="texte">Game of Thrones</p>
        </li>
        <li className="imageMCP image">
          <p className="texte">Marvel Crisis Protocol</p>
        </li>
        <li className="imageSWL image">
          <p className="texte">Star Wars Legion</p>
        </li>
        <li className="imageTI image">
          <p className="texte">Twilight Imperium</p>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
