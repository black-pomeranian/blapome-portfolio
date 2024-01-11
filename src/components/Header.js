import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <div className="title">
        <Link to="/" className="text-dark">
          <h3 className="text-dark">Black Pomeranian</h3>
        </Link>
      </div>
      <nav>
        <ul className="d-flex justify-content-end">
          <li>
            <Link to="/projects" className="text-dark">Projects</Link> 
          </li>
          <li>
            <Link to="/about" className="text-dark">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-dark">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
