import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NoHeaderLayout from "./components/NoHeaderLayout"; // 新しいレイアウトコンポーネントをインポート
import P5Background from "./components/P5Background";

import HomePage from "./components/HomePage";
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
import Podcast from "./components/Project/Podcast";
import FFFReel from "./components/Project/FFF_Reel";
import R108 from "./components/Project/r108";
import Sticker from "./components/Project/Sticker";
import GOODNEWS from "./components/Project/GoodNews";

function App() {
  return (
    <Router>
      <div className="App ">
        <P5Background />
        <Routes>
          <Route path="/" element={<><Header /><HomePage /></>} />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/performance" element={<><Header /><Performance /></>} />
          <Route path="/project" element={<><Header /><Project /></>} />
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
          <Route path="/Project/Podcast" element={<><Header /><Podcast /></>}  />
          <Route path="/Project/FFF_Reel" element={<><Header /><FFFReel /></>}  />
          <Route path="/Project/r108" element={<><Header /><R108 /></>}  />
          <Route path="/Project/Sticker" element={<><Header /><Sticker /></>}  />
          <Route path="/Project/GoodNews" element={<><Header /><GOODNEWS /></>}  />

        </Routes>
      </div>
    </Router>
  );
}
export default App;