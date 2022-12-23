import React from "react";
import "./compteur.scss";

export default function Compteur() {
  const [nbClicks, setNbClicks] = React.useState(0);
  function Click() {
    setNbClicks(nbClicks + 1);
  }
  function Reset() {
    setNbClicks(0);
  }

  return (
    <section className="tabScore">
      <div className="j1">
        <p className="j1Color">Player One : {nbClicks}</p>
        <article className="buttons">
          <button type="button" className="click" onClick={Click}>
            Score
          </button>
          <button type="button" className="reset" onClick={Reset}>
            Reset
          </button>
        </article>
      </div>
    </section>
  );
}
