import { Link } from "react-router-dom";
import "./games.scss";

export default function Games() {
  return (
    <section className="gamesList">
      <ul className="gamesColumn">
        <Link to="/Standard">
          <li className="imageStandard image">
            <p className="texte">Standard</p>
          </li>
        </Link>

        <Link to="/GameOfThrones">
          <li className="imageTDF image">
            <p className="texte">Game of Thrones</p>
          </li>
        </Link>
        <Link to="/MCP">
          <li className="imageMCP image">
            <p className="texte">Marvel Crisis Protocol</p>
          </li>
        </Link>

        <Link to="/SWL">
          <li className="imageSWL image">
            <p className="texte">Star Wars Legion</p>
          </li>
        </Link>
        <Link to="TwilightImperium">
          <li className="imageTI image">
            <p className="texte">Twilight Imperium</p>
          </li>
        </Link>
      </ul>
    </section>
  );
}
