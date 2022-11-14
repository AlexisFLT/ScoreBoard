// eslint-disable-next-line import/no-unresolved
import Compteur from "@components/Compteur/Compteur";

export default function NewPlayer() {
  return (
    <aside className="newPlayer">
      <button type="button" className="btnNewP" onClick={<Compteur />}>
        New Player
      </button>
    </aside>
    // <section className="tabScore">
    //   <Compteur />
    // </section>
  );
}
