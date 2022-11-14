import { Link } from "react-router-dom";
import "./games.css";

export default function Games() {
  return (
    <section className="gamesList">
      <ul className="leftList">
        <li className="imageStandard image">
          <Link to="/Standard">
            <p className="texte">Standard</p>
          </Link>
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
      </ul>
      <ul className="rightList">
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
    </section>
  );
}
