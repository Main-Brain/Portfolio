import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="header-nav">
        <li>
          <NavLink to="/" activeClassName="active">HOME</NavLink>
        </li>
        <li className="separator">/</li>
        <li>
          <NavLink to="/about" activeClassName="active">ABOUT</NavLink>
        </li>
        <li className="separator">/</li>
        <li>
          <NavLink to="/skills" activeClassName="active">SKILLS</NavLink>
        </li>
        <li className="separator">/</li>
        <li>
          <NavLink to="/project" activeClassName="active">PROJECT</NavLink>
        </li>
        <li className="separator">/</li>
        <li>
          <NavLink to="/contcat" activeClassName="active">CONTCAT</NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Navigation;
