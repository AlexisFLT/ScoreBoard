// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
import axios from "axios";
import "./gameofthrones.scss";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { Link } from "react-router-dom";
// import sword from "../../assets/sword-removebg-preview.png";

export default function GameOfThrones() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.boardgameatlas.com/api/search?ids=LZM8VP9UpT&client_id=${
          import.meta.env.VITE_CLIENT_ID
        }`
      )
      .then(({ data }) => {
        setGames(data.games);
      });
  }, []);
  return (
    <>
      <NavBar />
      <div className="gameOfThrones">
        <section>
          {games.map((element) => {
            return (
              <h1 className="titleGame" key={element.id}>
                {element.name}
              </h1>
            );
          })}
        </section>
        <section>
          {games.map((element) => {
            return (
              <p className="descriptionGame" key={element.id}>
                {element.description_preview}
              </p>
            );
          })}
        </section>
        <section>
          {games.map((element) => {
            return (
              <p className="numPlayer" key={element.id}>
                {`${element.min_players} - 8 Players`}
              </p>
            );
          })}
        </section>
        <section>
          {games.map((element) => {
            return (
              <p className="playTime" key={element.id}>
                {`${element.min_playtime} - ${element.max_playtime} min`}
              </p>
            );
          })}
        </section>
        <section className="swordShield">
          <Link to="/GameOfThrones/OptionNbPlayers">
            <button className="btnPlay" type="button">
              <p className="wannaPlay">Play ?</p>
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}
