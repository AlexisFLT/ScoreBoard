// eslint-disable-next-line import/no-unresolved
import Games from "@components/Games/Games";
import "./welcome.css";

export default function Welcome() {
  return (
    <div>
      <h1 className="welcomeTitle">Welcome on ScoreBoard</h1>
      <p className="choose">Choose & Play</p>
      <Games />
    </div>
  );
}
