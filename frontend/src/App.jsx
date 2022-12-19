import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import OptionNbPlayer from "@components/OptionNbPlayer/OptionNbPlayer";
import Home from "./pages/Home/Home";
import Standard from "./pages/Standard/Standard";
import GameOfThrones from "./pages/GameOfThrones/GameOfThrones";
import MCP from "./pages/MCP/MCP";
import SWL from "./pages/SWL/SWL";
import TwilightImperium from "./pages/TwilightImperium/TwilightImperium";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Standard" element={<Standard />} />
      <Route path="/GameOfThrones" element={<GameOfThrones />} />
      <Route
        path="/GameOfThrones/OptionNbPlayers"
        element={<OptionNbPlayer />}
      />
      <Route path="/MCP" element={<MCP />} />
      <Route path="/SWL" element={<SWL />} />
      <Route path="/TwilightImperium" element={<TwilightImperium />} />;
    </Routes>
  );
}
