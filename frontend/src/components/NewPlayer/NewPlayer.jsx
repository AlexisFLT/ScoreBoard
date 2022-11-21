// eslint-disable-next-line import/no-unresolved
import Compteur from "@components/Compteur/Compteur";
import { useState } from "react";

export default function NewPlayer() {
  const [addP, setAddP] = useState([]);

  const onAddBtnClick = () => {
    setAddP(addP.concat(<Compteur key={addP.length} />));
  };

  return (
    <div>
      <button type="button" onClick={onAddBtnClick}>
        New Player
      </button>
      {addP}
    </div>
  );
}
