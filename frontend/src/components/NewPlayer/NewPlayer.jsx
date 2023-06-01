// eslint-disable-next-line import/no-unresolved
import { AiOutlineUserAdd } from "react-icons/ai";
import PlayerCounter from "@components/PlayerCounter/PlayerCounter";
import "./style.scss";
import { useState } from "react";

export default function NewPlayer() {
  const [addP, setAddP] = useState([]);

  const onAddBtnClick = () => {
    setAddP(addP.concat(<PlayerCounter key={addP.length} />));
  };

  return (
    <div className="blockNP">
      <button type="button" className="buttonNP" onClick={onAddBtnClick}>
        <AiOutlineUserAdd />
      </button>
      {addP}
    </div>
  );
}
