import React from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineEdit,
} from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import "./playerCounter.scss";

export default function PlayerCounter() {
  const [nbClicks, setNbClicks] = React.useState(0);
  function clickPlus() {
    setNbClicks(nbClicks + 1);
  }
  function clickMinus() {
    setNbClicks(nbClicks - 1);
  }

  const [name, setName] = React.useState("Name ?");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("inputName").style.display = "none";
    document.getElementById("clickButton").style.display = "none";
    document.getElementById("edit").style.display = "unset";
  };

  const inputDisabled = () => {
    document.getElementById("clickButton").style.display = "none";
    document.getElementById("inputName").style.display = "none";
    document.getElementById("edit").style.display = "unset";
  };

  const nameEdit = () => {
    document.getElementById("clickButton").style.display = "unset";
    document.getElementById("inputName").style.display = "unset";
    document.getElementById("edit").style.opacity = 0;
  };

  return (
    <section className="tabScore">
      <div className="player">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              id="inputName"
              className="inputName"
              onChange={handleName}
              value={name}
            />
            <button
              id="clickButton"
              className="clickButton"
              type="button"
              onClick={inputDisabled}
            >
              <FaCheck />
            </button>
            <button
              type="button"
              id="edit"
              className="editButton"
              hidden
              onClick={nameEdit}
            >
              <AiOutlineEdit />
            </button>
            <h2 id="playerName" className="playerName">
              {name}
            </h2>
          </label>
        </form>
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
