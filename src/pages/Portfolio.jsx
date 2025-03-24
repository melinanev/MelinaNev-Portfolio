import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Mod-7-Read-Me-Gen',
      className: 'read-me-gen',
      deployedUrl: '', // No deployed URL
      githubUrl: 'https://github.com/melinanev/Mod-7-Read-Me-Gen.git'
    },
    {
      id: 2,
      title: 'Mod8-Vehicle-Builder',
      className: 'vehicle-builder',
      deployedUrl: '', // No deployed URL
      githubUrl: 'https://github.com/melinanev/Mod8-Vehicle-Builder.git'
    },
    {
      id: 3,
      title: 'Mod-9-Weather-Web-Application',
      className: 'weather-app',
      deployedUrl: 'https://mod-9-weather-web-application.onrender.com',
      githubUrl: 'https://github.com/melinanev/Mod-9-Weather-Web-Application.git'
    },
    {
      id: 4,
      title: 'Mod-10-Employee-Tracker',
      className: 'employee-tracker',
      deployedUrl: '', // No deployed URL
      githubUrl: 'https://github.com/melinanev/Mod-10-Employee-Tracker.git'
    },
    {
      id: 5,
      title: 'Vetra',
      className: 'vetra',
      deployedUrl: 'https://pms-retail.onrender.com/',
      githubUrl: 'https://github.com/melinanev/PMS_retail.git'
    }

  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <ul className="portfolio-list">
        {projects.map(project => (
          <li key={project.id} className={`portfolio-item ${project.className}`}>
            <div>
              <h3>{project.title}</h3>
              {project.deployedUrl ? (
                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View Deployed App</a>
              ) : (
                <p style={{ fontSize: '10px' }} >Not Deployed</p>
              )}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
