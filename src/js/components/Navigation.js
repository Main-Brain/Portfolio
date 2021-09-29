import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
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
        <NavLink to="/projects" activeClassName="active">PROJECTS</NavLink>
      </li>
      <li className="separator">/</li>
      <li>
        <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
      </li>
    </nav>
  </header>
);

export default Navigation;
