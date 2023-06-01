import "./standard.scss";
// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
import React from "react";
// import PlayerCounter from "@components/PlayerCounter/PlayerCounter";
import NewPlayer from "@components/NewPlayer/NewPlayer";

export default function Standard() {
  return (
    <>
      <NavBar />
      <section>
        <h1 className="standardTitle">Pick a game !</h1>
        <option>
          <select>1</select>
        </option>
        <section className="newPlayer">
          <NewPlayer />
        </section>
      </section>
    </>
  );
}
