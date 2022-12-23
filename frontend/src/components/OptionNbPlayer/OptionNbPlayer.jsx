// eslint-disable-next-line import/no-unresolved
import NavBar from "@components/NavBar/NavBar";
import { useState } from "react";
import "./optionNbPlayer.scss";

export default function OptionNbPlayer() {
  const [number, setNumber] = useState("");
  const hNumber = () => {
    setNumber(number);
  };
  return (
    <>
      <NavBar />
      <div className="gameOfThrones">
        <section className="blockHowMany">
          <section className="howMany">
            <form>
              <p className="howManyText">How many players ?</p>
              <select className="howManyGOT" onChange={setNumber}>
                <option className="optionGOT" value="---">
                  {" "}
                  ---{" "}
                </option>
                <option className="optionGOT" value="0">
                  0 ? Why are you here ?
                </option>
                <option className="optionGOT" value="1">
                  1 ? Come back with some friends
                </option>
                <option className="optionGOT" value="2">
                  2 ? Come back with some friends
                </option>
                <option className="optionGOT" value={number}>
                  3
                </option>
                <option className="optionGOT" value={number}>
                  4
                </option>
                <option className="optionGOT" value={number}>
                  5
                </option>
                <option className="optionGOT" value={number}>
                  6
                </option>
                <option className="optionGOT" value={number}>
                  7
                </option>
                <option className="optionGOT" value={number}>
                  8
                </option>
              </select>
              <input
                className="OKbtn"
                type="submit"
                value="OK"
                onClick={hNumber}
              />
            </form>
          </section>
        </section>
      </div>
    </>
  );
}
