import React, { useState } from 'react';
import '../../styles/Projects.css'; 

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "SAKSHAM",
      description: "An educational platform for underprivileged students with learning resources, mentorship, and scholarship opportunities.",
      image: "/project-saksham.jpg",
      tags: ["React", "Firebase", "Node.js", "Express"],
      categories: ["education", "full-stack"],
      liveUrl: "https://saksham-edu.org",
      codeUrl: "https://github.com/kevalsolankure/saksham"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A feature-rich online shopping platform with product management, cart functionality, and payment integration.",
      image: "/project-ecommerce.jpg",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      categories: ["e-commerce", "full-stack"],
      liveUrl: "https://shop-example.com",
      codeUrl: "https://github.com/kevalsolankure/e-shop"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Electronic health records system for clinics to manage patient data, appointments, and medical histories.",
      image: "/project-healthcare.jpg",
      tags: ["React", "TypeScript", "Express", "PostgreSQL"],
      categories: ["healthcare", "full-stack"],
      liveUrl: "https://healthmanage.example.com",
      codeUrl: "https://github.com/kevalsolankure/health-manage"
    },
    {
      id: 4,
      title: "Smart City Dashboard",
      description: "Interactive dashboard for monitoring and managing smart city services including traffic, energy, and waste management.",
      image: "/project-smartcity.jpg",
      tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      categories: ["iot", "frontend"],
      liveUrl: "https://smartcity.example.com",
      codeUrl: "https://github.com/kevalsolankure/smart-city"
    },
    {
      id: 5,
      title: "Fintech Analytics Tool",
      description: "Financial analysis platform with data visualization, budget tracking, and investment portfolio management.",
      image: "/project-fintech.jpg",
      tags: ["React", "Chart.js", "Express", "MySQL"],
      categories: ["finance", "full-stack"],
      liveUrl: "https://fintech-analytics.example.com",
      codeUrl: "https://github.com/kevalsolankure/fintech-analytics"
    },
    {
      id: 6,
      title: "Agriculture Management System",
      description: "Crop monitoring and farm management system using IoT sensors to track soil health, water usage, and crop growth.",
      image: "/project-agriculture.jpg",
      tags: ["React", "Node.js", "LoRaWAN", "MongoDB"],
      categories: ["agriculture", "iot"],
      liveUrl: "https://agri-smart.example.com",
      codeUrl: "https://github.com/kevalsolankure/agri-manager"
    }
  ];

  const filterProjects = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
        </div>
        
        <p className="projects-intro">
          Explore my portfolio of projects spanning various sectors and industries.
          Each project represents solutions to real-world challenges.
        </p>
        
        <div className="projects-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => filterProjects('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
            onClick={() => filterProjects('education')}
          >
            Education
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'full-stack' ? 'active' : ''}`}
            onClick={() => filterProjects('full-stack')}
          >
            Full Stack
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'iot' ? 'active' : ''}`}
            onClick={() => filterProjects('iot')}
          >
            IoT
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'healthcare' ? 'active' : ''}`}
            onClick={() => filterProjects('healthcare')}
          >
            Healthcare
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" fill="currentColor"/>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link code-link">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
                      </svg>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-tag" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;