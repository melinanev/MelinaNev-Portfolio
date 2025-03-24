import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import myLogo from '../assets/images/mylogo.svg';
import jonesyImage from '../assets/images/Jonesy.jpg';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <section>
        <button className="toggle" onClick={toggleDarkMode} style={{ fontSize: '32px', padding: '6px' }}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="name">       
          <h1 id="name">Melina Nevarez</h1>
        </div>
        <h2>Full Stack Web Developer, Registered Veterinary Technician and Operations Manager</h2>
        <nav id="navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            <button>About Me</button>
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Portfolio</button>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Contact</button>
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Resume</button>
          </NavLink>
        </nav>
      </section>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={myLogo} alt="My Logo" style={{ height: '5rem', width: 'auto' }} />
        <img src={jonesyImage} alt="Jonesy" style={{ height: '7rem', width: 'auto', paddingTop: '1rem'  }} />
      </div>
    </header>
  );
}

export default Header;
