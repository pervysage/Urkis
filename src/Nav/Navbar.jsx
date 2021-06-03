import React from "react";
import "./Nav.css";
function Navbar() {
  return (
    <nav className="NavContainer">
      <div className="NavItems">
        <h2>Home</h2>
      </div>
      <div className="NavItems">
        <h2>TechStack</h2>
      </div>
      <div className="NavItems">
        <h2>Skills</h2>
      </div>
      <div className="NavItems">
        <h2>Projects</h2>
      </div>
      <div className="NavItems">
        <h2>Contact</h2>
      </div>
    </nav>
  );
}

export default Navbar;
