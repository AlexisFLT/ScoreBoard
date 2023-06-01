import axios from "axios";
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
  const [name, setName] = useState({
    nickname: "",
  });

  const inputNameRef = useRef(null);
  const playerNameRef = useRef(null);
  const clickButtonRef = useRef(null);
  const editButtonRef = useRef(null);

  const handleName = (evt) => {
    setName({ ...name, nickname: evt.target.value });
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
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/player`, name)
            .catch(() => {
              // console.error(err);
            });
          // console.log(name);
          function getRandomColor() {
            const colors = [
              "#0956DB" /* BLUE */,
              "#EB0A21" /* RED */,
              "#056513" /* GREEN */,
              "#820BEB" /* PURPLE */,
              "#00A5F2" /* CYAN */,
              "#9E4B19" /* BROWN */,
              "#F7C522" /* YELLOW */,
              "#E65C0C" /* ORANGE */,
              "#050000" /* BLACK */,
              "#4A494F" /* DARK GREY */,
            ];
            const randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
          }
          setBgColor(getRandomColor());
        }}
      >
        <input
          type="text"
          className="inputName"
          ref={inputNameRef}
          placeholder="Player's Name"
          onChange={handleName}
          value={name.nickname}
          name="nickname"
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
                "#0956DB" /* BLUE */,
                "#EB0A21" /* RED */,
                "#056513" /* GREEN */,
                "#820BEB" /* PURPLE */,
                "#00A5F2" /* CYAN */,
                "#9E4B19" /* BROWN */,
                "#F7C522" /* YELLOW */,
                "#E65C0C" /* ORANGE */,
                "#050000" /* BLACK */,
                "#4A494F" /* DARK GREY */,
              ];
              const randomIndex = Math.floor(Math.random() * colors.length);
              return colors[randomIndex];
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
          {name.nickname}
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
