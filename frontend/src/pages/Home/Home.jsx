import "./home.scss";
import React from "react";
// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
// eslint-disable-next-line import/no-unresolved
import Welcome from "@components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <NavBar />
      <body className="Home">
        <main>
          <section className="welcome">
            <Welcome />
          </section>
        </main>
      </body>
    </>
  );
}
