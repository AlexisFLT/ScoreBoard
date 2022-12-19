import "./standard.scss";
// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
// eslint-disable-next-line import/no-unresolved
import NewPlayer from "@components/NewPlayer/NewPlayer";
import React from "react";

export default function Standard() {
  return (
    <>
      <NavBar />
      <body className="Standard">
        <main>
          <h1>Standard</h1>
          <section className="newPlayer">
            <button type="button" className="btnNewP" onClick={<NewPlayer />}>
              New Player
            </button>
          </section>
        </main>
      </body>
    </>
  );
}
