import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Satish</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul className="n-list-items">
            <li><Link activeClass="active" to="/">Home </Link></li>
            <li><Link to="/intro">About </Link></li>
            <li><Link to="skills">Skills</Link></li>
            <li><Link to="experience">Experience</Link></li>
            <li><Link to="portfolio">Portfolio</Link></li>
            
          </ul>
        </div>
        <Link to="contact">
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
