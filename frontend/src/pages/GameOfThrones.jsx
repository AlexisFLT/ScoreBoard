// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
// eslint-disable-next-line import/no-unresolved
import NewPlayer from "@components/NewPlayer/NewPlayer";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <main>
      <header>
        <NavBar />
      </header>
      <section className="titleGame">
        {games.map((element) => {
          return <h1 key={element.id}>{element.name}</h1>;
        })}
      </section>
      <section className="descriptionGame">
        {games.map((element) => {
          return <p key={element.id}>{element.description_preview}</p>;
        })}
      </section>
      <section>
        <NewPlayer />
      </section>
    </main>
  );
}
