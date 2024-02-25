import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ProjectTemplate from "./components/Project/ProjectTemplate";
import Portfolio from "./components/Project/Portfolio";
import VJSystem from "./components/Project/VJSystem";
import LieofMemories from "./components/Project/LieofMemories";
import AudioVisualBattleSystem from "./components/Project/AudioVisualBattleSystem";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App ">
        <Header />
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Project/ProjectTemplate" element={<ProjectTemplate />} />
          <Route path="/Project/Portfolio" element={<Portfolio />} />
          <Route path="/Project/VJSystem" element={<VJSystem />} />
          <Route path="/Project/LieofMemories" element={<LieofMemories />} />
          <Route path="/Project/AudioVisualBattleSystem" element={<AudioVisualBattleSystem />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;