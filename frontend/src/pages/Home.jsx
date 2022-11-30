import React from "react";
// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
// eslint-disable-next-line import/no-unresolved
import Welcome from "@components/Welcome/Welcome";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section className="welcome">
        <Welcome />
      </section>
    </div>
  );
}
