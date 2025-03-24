import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Melina Nevarez</p>
      <nav>
        <ul>
          <li>
          <a href="https://github.com/melinanev" target="_blank">
          <img src="src/assets/images/github.png" alt="GitHub" className="social-icon" />
            </a>
          </li>
          <li>
          <a href="www.linkedin.com/in/melina-nevarez-rvt-555208111" target="_blank">
          <img src="src/assets/images/linkedinlogo.png" alt="LinkedIn" class="social-icon"/>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
