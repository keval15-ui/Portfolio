import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-background-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="projects-decorative-elements">
        <div className="projects-floating-star star-1">⭐</div>
        <div className="projects-floating-star star-2">✨</div>
        <div className="projects-floating-star star-3">🌟</div>
        <div className="projects-paper-clip clip-1">📎</div>
        <div className="projects-paper-clip clip-2">📎</div>
        <div className="projects-sticky-note-decoration">💡</div>
      </div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <div className="projects-subtitle">Creative Works & Technical Experiments</div>
        </div>

        {/* Introduction */}
        <div className="projects-intro-card">
          <p>Here's a collection of my recent work, showcasing my skills in frontend development, responsive design, and creative problem-solving.</p>
          <p>Each project represents a unique challenge and learning opportunity. Feel free to explore!</p>
        </div>

        {/* Featured Project */}
        <div className="featured-project">
          <h2 className="section-title">Featured Project</h2>
          <div className="featured-project-card">
            <div className="featured-project-image">
              <div className="project-image-placeholder">
                <span>🖥️</span>
              </div>
              <div className="featured-badge">Featured</div>
            </div>
            <div className="featured-project-content">
              <h3>Portfolio Website</h3>
              <p className="project-description">A creative, responsive portfolio showcasing my work and skills as a frontend developer. Built with React and modern CSS techniques.</p>
              <div className="project-tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Responsive Design</span>
              </div>
              {/* to change the links of them  */}
              <div className="project-links">
                <a href="https://your-live-demo-link.com" className="project-link demo-link">
                  <span className="link-icon">🔗</span>
                  <span>Live Demo</span>
                </a>
                <a href="https://your-github-repo-link.com" className="project-link code-link">
                  <span className="link-icon">💻</span>
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="projects-grid-section">
          <h2 className="section-title">All Projects</h2>
          
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-card-image">
                <div className="project-image-placeholder">
                  <span>🛒</span>
                </div>
              </div>
              <div className="project-card-content">
                <h3>E-Commerce Website</h3>
                <p>A fully responsive e-commerce platform with shopping cart functionality and product filtering.</p>
                <div className="project-tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Redux</span>
                  <span className="tech-tag">CSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link demo-link">Live Demo</a>
                  <a href="#" className="project-link code-link">Code</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-card-image">
                <div className="project-image-placeholder">
                  <span>🎮</span>
                </div>
              </div>
              <div className="project-card-content">
                <h3>JavaScript Game</h3>
                <p>An interactive browser-based game built with vanilla JavaScript and canvas.</p>
                <div className="project-tech-stack">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">HTML5 Canvas</span>
                  <span className="tech-tag">CSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link demo-link">Live Demo</a>
                  <a href="#" className="project-link code-link">Code</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-card-image">
                <div className="project-image-placeholder">
                  <span>🌤️</span>
                </div>
              </div>
              <div className="project-card-content">
                <h3>Weather App</h3>
                <p>A weather application that fetches real-time data from an API and displays forecasts.</p>
                <div className="project-tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">API Integration</span>
                  <span className="tech-tag">CSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link demo-link">Live Demo</a>
                  <a href="#" className="project-link code-link">Code</a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-card-image">
                <div className="project-image-placeholder">
                  <span>📝</span>
                </div>
              </div>
              <div className="project-card-content">
                <h3>Task Tracker</h3>
                <p>A task management application with drag-and-drop functionality and local storage.</p>
                <div className="project-tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Local Storage</span>
                  <span className="tech-tag">CSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link demo-link">Live Demo</a>
                  <a href="#" className="project-link code-link">Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Projects Coming Soon */}
        <div className="more-projects-section">
          <div className="more-projects-card">
            <h3>More Projects Coming Soon!</h3>
            <p>I'm constantly working on new projects and experiments. Check back soon to see what's new!</p>
            <div className="loading-indicator">
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <p>Interested in collaborating on a project? Let's connect!</p>
          <div className="projects-buttons">
            <a href="/contact" className="projects-btn contact-btn">Get In Touch</a>
            <a href="/about" className="projects-btn about-btn">About Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;