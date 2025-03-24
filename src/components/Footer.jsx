import React from 'react';
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedinlogo.png';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Melina Nevarez</p>
      <nav>
        <ul>
          <li>
          <a href="https://github.com/melinanev" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/melina-nevarez-rvt-555208111" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon"/>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
