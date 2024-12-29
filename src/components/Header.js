import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="header">
        <Link to="/" className="title">
          <h3 className="text-light header-title"><nobr>𝔅𝔩𝔞𝔠𝔨 𝔓𝔬𝔪𝔢𝔯𝔞𝔫𝔦𝔞𝔫</nobr></h3>
        </Link>
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
            <Link to="/" className="header-link" onClick={() => setIsNavExpanded(false)}>Project</Link> 
          </li>
          <li>
            <Link to="/contact" className="header-link" onClick={() => setIsNavExpanded(false)}>Performance</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
