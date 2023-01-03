// eslint-disable-next-line import/no-unresolved
import PlayerCounter from "@components/PlayerCounter/PlayerCounter";
import { useState } from "react";

export default function NewPlayer() {
  const [addP, setAddP] = useState([]);

  const onAddBtnClick = () => {
    setAddP(
      addP.concat(
        <PlayerCounter key={addP.length} style={{ backgroundColor: "red" }} />
      )
    );
  };

  return (
    <div>
      <button type="button" onClick={onAddBtnClick}>
        Add Player
      </button>
      {addP}
    </div>
  );
}
