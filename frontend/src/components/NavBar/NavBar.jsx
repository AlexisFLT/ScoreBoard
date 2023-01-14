// import { useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../assets/logo.png";

function NavBar() {
  // const trasnlateRef = useRef(null);

  return (
    <header>
      <nav>
        <ul className="navbar">
          <li className="home">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
