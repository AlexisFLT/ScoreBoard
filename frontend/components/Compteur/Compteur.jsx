import React from "react";
import './reset.css';
import './compteur.css';


function Compteur() {

    const [nbClicks1, setNbClicks1] = React.useState(0);
    const [nbClicks2, setNbClicks2] = React.useState(0);
    function Click1() {
        setNbClicks1(nbClicks1 + 1)
    }
    function Click2() {
        setNbClicks2(nbClicks2 + 1)
    }
    function Reset1() {
        setNbClicks1(0);
    }
    function Reset2() {
        setNbClicks2(0);
    }
    return (
        <div className="main">
            <h1>Tableaux des Scores</h1>
            <aside className="newPlayer">
                <button className="click" onClick={Click1}>New Player</button>
            </aside>
            <section className="tabScore">
                <div className="j1">
                    <p className="j1Color">Player One : {nbClicks1}</p>
                    <article className="buttons">
                        <button className="click" onClick={Click1}>Score</button>
                        <button className="reset" onClick={Reset1}>Reset</button>
                    </article>
                </div>
                <div className="j2">
                    <p className="j2Color">Player Two : <span>{nbClicks2}</span></p>
                    <article className="buttons">
                        <button className="click" onClick={Click2}>Score</button>
                        <button className="reset" onClick={Reset2}>Reset</button>
                    </article>
                </div>

            </section>
        </div>
    )
}

export default Compteur;