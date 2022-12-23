import "./standard.scss";
// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
import React from "react";
import Compteur from "@components/Compteur/Compteur";

export default function Standard() {
  return (
    <>
      <NavBar />
      <section>
        <h1 className="standardTitle">Let's play !</h1>
        <section className="playerBox">
          <section className="newPlayer">
            <h2 className="playerName"> name</h2>
            <div>
              <Compteur />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
