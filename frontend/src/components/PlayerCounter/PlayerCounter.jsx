import React, { useRef, useState } from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineEdit,
} from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import "./playerCounter.scss";

export default function PlayerCounter() {
  // COUNTER
  const [nbClicks, setNbClicks] = React.useState(0);
  function clickPlus() {
    setNbClicks(nbClicks + 1);
  }
  function clickMinus() {
    setNbClicks(nbClicks - 1);
  }

  const [bgColor, setBgColor] = useState("#062b56");
  const [name, setName] = useState("Name ?");

  const inputNameRef = useRef(null);
  const playerNameRef = useRef(null);
  const clickButtonRef = useRef(null);
  const editButtonRef = useRef(null);

  const handleName = (event) => {
    setName(event.target.value);
  };

  return (
    <section className="player" style={{ backgroundColor: bgColor }}>
      <form
        className="formPlayer"
        onSubmit={(evt) => {
          evt.preventDefault();
          inputNameRef.current.classList.add("hidden");
          playerNameRef.current.classList.remove("hidden");
          playerNameRef.current.classList.add("playerName");
          clickButtonRef.current.classList.add("hidden");
          editButtonRef.current.style.display = "unset";
          function getRandomColor() {
            const colors = [
              "#6b0505",
              "#E800C3",
              "#860909",
              "#0e4b06",
              "#4b0636;",
              "#000000",
              "#06414b",
              "#FFFFFF",
              "#EA5705",
              "#E800C3",
              "#57391D",
              "#1E1E1E",
            ];
            let randomCol = "";
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < colors.length; i++) {
              randomCol = colors[Math.floor(Math.random() * 12)];
            }
            return randomCol;
          }
          setBgColor(getRandomColor());
        }}
      >
        <input
          type="text"
          className="inputName"
          ref={inputNameRef}
          placeholder={name}
          onChange={handleName}
          style={{ backgroundColor: bgColor }}
        />
        <button
          className="clickButton"
          ref={clickButtonRef}
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            inputNameRef.current.classList.add("hidden");
            playerNameRef.current.classList.remove("hidden");
            playerNameRef.current.classList.add("playerName");
            clickButtonRef.current.classList.add("hidden");
            editButtonRef.current.style.display = "unset";
            function getRandomColor() {
              const colors = [
                "#6b0505",
                "#E800C3",
                "#860909",
                "#0e4b06",
                "#4b0636;",
                "#000000",
                "#06414b",
                "#FFFFFF",
                "#EA5705",
                "#E800C3",
                "#57391D",
                "#1E1E1E",
              ];
              let randomCol = "";
              // eslint-disable-next-line no-plusplus
              for (let i = 0; i < colors.length; i++) {
                randomCol = colors[Math.floor(Math.random() * 16)];
              }
              return randomCol;
            }
            setBgColor(getRandomColor());
          }}
          style={{ backgroundColor: bgColor }}
        >
          <FaCheck />
        </button>
        <button
          type="button"
          ref={editButtonRef}
          className="editButton"
          onClick={(evt) => {
            evt.preventDefault();
            inputNameRef.current.classList.remove("hidden");
            clickButtonRef.current.classList.remove("hidden");
            playerNameRef.current.classList.add("hidden");
            playerNameRef.current.classList.remove("playerName");
            editButtonRef.current.style.opacity = 0;
          }}
          style={{ backgroundColor: bgColor }}
        >
          <AiOutlineEdit />
        </button>
      </form>
      <div className="playerNameFinal">
        <h2
          ref={playerNameRef}
          id="playerName"
          className="hidden"
          style={{ backgroundColor: bgColor }}
        >
          {name}
        </h2>
        <article className="buttons">
          <button
            type="button"
            className="clickPlus"
            onClick={clickPlus}
            style={{ backgroundColor: bgColor }}
          >
            <AiOutlinePlusSquare />
          </button>
          <p className="score">{nbClicks}</p>
          <button
            type="button"
            className="clickMinus"
            onClick={clickMinus}
            style={{ backgroundColor: bgColor }}
          >
            <AiOutlineMinusSquare />
          </button>
        </article>
      </div>
    </section>
  );
}
