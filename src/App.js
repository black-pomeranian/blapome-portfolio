import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ProjectTemplate from "./components/Projects/ProjectTemplate";
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
          <Route path="/ProjectTemplate" element={<ProjectTemplate />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;