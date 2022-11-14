// eslint-disable-next-line import/no-unresolved
import NewPlayer from "@components/NewPlayer/NewPlayer";
import React from "react";

export default function Standard() {
  return (
    <section className="newPlayer">
      <button type="button" className="btnNewP" onClick={<NewPlayer />}>
        New Player
      </button>
    </section>
  );
}
