import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import "./playerCounter.scss";

export default function PlayerCounter() {
  const [nbClicks, setNbClicks] = React.useState(0);
  function clickPlus() {
    setNbClicks(nbClicks + 1);
  }
  function clickMinus() {
    setNbClicks(nbClicks - 1);
  }
  // function Reset() {
  //   setNbClicks(0);
  // }
  return (
    <section className="tabScore">
      <div className="player">
        <h2 className="playerName"> Name</h2>
        <article className="buttons">
          <button type="button" className="clickPlus" onClick={clickPlus}>
            <AiOutlinePlusSquare />
          </button>
          <p className="score">{nbClicks}</p>
          <button type="button" className="clickMinus" onClick={clickMinus}>
            <AiOutlineMinusSquare />
          </button>
        </article>
      </div>
    </section>
  );
}
