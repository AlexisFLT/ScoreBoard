import "./src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Home from "./src/pages/Home";
import Standard from "./src/pages/Standard";
import GameOfThrones from "./src/pages/GameOfThrones";
import MCP from "./src/pages/MCP";
import SWL from "./src/pages/SWL";
import TwilightImperium from "./src/pages/TwilightImperium";

export default function App() {
  return (
    <Router>
      <section className="links">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Standard" element={<Standard />} />
          <Route path="/GameOfThrones" element={<GameOfThrones />} />
          <Route path="/MCP" element={<MCP />} />
          <Route path="/SWL" element={<SWL />} />
          <Route path="/TwilightImperium" element={<TwilightImperium />} />;
        </Routes>
      </section>
    </Router>
  );
}
