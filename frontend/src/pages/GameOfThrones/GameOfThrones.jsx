// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
import axios from "axios";
import "./gameofthrones.css";
import React, { useEffect, useState } from "react";
import OptionNbPlayer from "@components/OptionNbPlayer/OptionNbPlayer";
import sword from "../../assets/sword-removebg-preview.png";

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
    <main className="gameOfThrones">
      <NavBar />
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
        {/* <div className="btnPlay"></div> */}
        <button className="btnPlay" type="button" onClick={<OptionNbPlayer />}>
          <p className="wannaPlay">Wanna play ?</p>
        </button>
      </section>
    </main>
  );
}
