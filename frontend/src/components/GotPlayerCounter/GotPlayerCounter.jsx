import NavBar from "@components/NavBar/NavBar";
import "./gotPlayerCounter.scss";

export default function otPlayerCounter() {
  return (
    <>
      <NavBar />
      <div className="gameOfThrones">
        <div className="counter"> </div>
      </div>
    </>
  );
}
