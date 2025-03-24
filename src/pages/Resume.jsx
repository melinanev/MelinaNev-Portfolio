import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div className="resume-content">
        <p>
          <a href="/Melina Nevarez 2025 Resume.pdf" download className="resume-download">
            Download My Resume
          </a>
        </p>
        
        <div className="proficiencies">
          <div className="frontend">
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          
          <div className="backend">
            <h3>Back-end Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;