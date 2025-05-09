import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Performance from "./components/Performance";
import ProjectTemplate from "./components/Project/ProjectTemplate";
import Portfolio from "./components/Project/Portfolio";
import VJSystem from "./components/Project/VJSystem";
import LieofMemories from "./components/Project/LieofMemories";
import AudioVisualBattleSystem from "./components/Project/AudioVisualBattleSystem";
import EN from "./components/Project/EN";
import GenFC from "./components/Project/GenFC";
import DreamFootball from "./components/Project/DreamFootball";
import DreamFootballGame from "./components/Project/DreamFootballGame";
import FFF from "./components/Project/FFF";
import NoHeaderLayout from "./components/NoHeaderLayout"; // 新しいレイアウトコンポーネントをインポート

function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path="/" element={<><Header /><Project /></>} />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/performance" element={<><Header /><Performance /></>} />
          <Route path="/Project/ProjectTemplate" element={<><Header /><ProjectTemplate /></>} />
          <Route path="/Project/Portfolio" element={<><Header /><Portfolio /></>} />
          <Route path="/Project/VJSystem" element={<><Header /><VJSystem /></>} />
          <Route path="/Project/LieofMemories" element={<><Header /><LieofMemories /></>} />
          <Route path="/Project/AudioVisualBattleSystem" element={<><Header /><AudioVisualBattleSystem /></>} />
          <Route path="/Project/EN" element={<><Header /><EN /></>} />
          <Route path="/Project/GenFC" element={<><Header /><GenFC /></>} />
          <Route path="/Project/DreamFootball" element={<><Header /><DreamFootball /></>} />
          <Route path="/Project/DreamFootball/game" element={<NoHeaderLayout><DreamFootballGame /></NoHeaderLayout>} />
          <Route path="/Project/FFF" element={<><Header /><FFF /></>}  />
        </Routes>
      </div>
    </Router>
  );
}
export default App;