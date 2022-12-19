// eslint-disable-next-line import/no-unresolved
import Games from "@components/Games/Games";
import "./welcome.scss";

export default function Welcome() {
  return (
    <section className="welcomeBlock">
      {/* <h1 className="welcomeTitle">Welcome</h1> */}
      <p className="choose">What shall we play ?</p>
      <Games />
    </section>
  );
}
