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
        <h1 className="standardTitle">Let's play !</h1>
        <section className="newPlayer">
          <NewPlayer />
        </section>
      </section>
    </>
  );
}
