import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
//import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Performance from "./components/Performance";
import ProjectTemplate from "./components/Project/ProjectTemplate";
import Portfolio from "./components/Project/Portfolio";
import VJSystem from "./components/Project/VJSystem";
import LieofMemories from "./components/Project/LieofMemories";
import AudioVisualBattleSystem from "./components/Project/AudioVisualBattleSystem";
import EN from "./components/Project/EN";
import GenFC from "./components/Project/GenFC";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App ">
        <Header />

        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/Project/ProjectTemplate" element={<ProjectTemplate />} />
          <Route path="/Project/Portfolio" element={<Portfolio />} />
          <Route path="/Project/VJSystem" element={<VJSystem />} />
          <Route path="/Project/LieofMemories" element={<LieofMemories />} />
          <Route path="/Project/AudioVisualBattleSystem" element={<AudioVisualBattleSystem />} />
          <Route path="/Project/EN" element={<EN />} />
          <Route path="/Project/GenFC" element={<GenFC />} />
        </Routes>

      </div>
    </Router>
  );
}
export default App;