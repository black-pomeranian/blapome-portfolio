import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="header">
      <div className="header-area">
        <Link to="/" className="title">
          <h3 className="text-light header-title"><nobr>𝔅𝔩𝔞𝔠𝔨 𝔓𝔬𝔪𝔢𝔯𝔞𝔫𝔦𝔞𝔫</nobr></h3>
        </Link>
        <div className="separator-line"></div>
        <button className="nav-toggle" onClick={() => setIsNavExpanded(!isNavExpanded)}>
          {isNavExpanded ? (
            <span className="menu-icon close"></span> 
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
      </button>
      <nav className={`nav ${isNavExpanded ? "expanded" : ""}`}>
        <ul>
          <li>
            <Link to="/about" className="header-link" onClick={() => setIsNavExpanded(false)}>About</Link>
          </li>
          <li>
            <Link to="/project" className="header-link" onClick={() => setIsNavExpanded(false)}>Project</Link> 
          </li>
          <li>
            <Link to="/performance" className="header-link" onClick={() => setIsNavExpanded(false)}>Performance</Link>
          </li>
        </ul>
      </nav>
      </div>
      <div className="box-area">
        
      </div>
    </header>
  );
};

export default Header;
