// eslint-disable-next-line import/no-unresolved
import Compteur from "@components/Compteur/Compteur";
// eslint-disable-next-line import/no-unresolved
import Header from "@components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <section>
          <Compteur />
        </section>
      </body>
    </div>
  );
}

export default App;
