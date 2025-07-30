import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreWork = () => {
    navigate('/projects');
  };

  const handleReadMore = () => {
    navigate('/about');
  };

  return (
    <div className="hero creative-hero">
      <div className="hero-background-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="floating-star star-1">⭐</div>
        <div className="floating-star star-2">✨</div>
        <div className="floating-star star-3">🌟</div>
        <div className="paper-clip clip-1">📎</div>
        <div className="paper-clip clip-2">📎</div>
        <div className="sticky-note-decoration">💡</div>
      </div>

      <div className="hero-content creative-content">
        {/* Name Header */}
        <div className="name-header">
          <h1 className="main-name">Keval Solankure</h1>
          <div className="name-underline"></div>
        </div>

        {/* Avatar Section */}
        <div className="avatar-section">
          <div className="avatar-container">
            <div className="avatar-placeholder" role="img" aria-label="Developer avatar">
              <div className="avatar-icon">👨‍💻</div>
              <div className="pen-stylus">✏️</div>
            </div>
          </div>
          
          {/* 3D Portfolio Text */}
          <div className="portfolio-3d-text">
            <span className="portfolio-text">PORTFOLIO</span>
            <div className="text-shadow" aria-hidden="true"></div>
          </div>
        </div>
        
        {/* About Preview Section */}
        <div className="about-preview">
          <h3 className="about-title">A Little About Me</h3>
          <div className="about-content">
            <div className="handwritten-intro">
              <p>Hello! I'm Keval, a passionate frontend developer who loves creating beautiful, functional websites and applications. I specialize in React, JavaScript, and modern web technologies.</p>
              <p>I believe in clean code, responsive design, and creating delightful user experiences.</p>
              <button className="creative-cta read-more-btn" onClick={handleReadMore}>
                <span>Read More</span>
                <div className="button-decoration">📖</div>
              </button>
            </div>
            <div className="photo-frame">
              <div className="frame-inner">
                <div className="placeholder-photo">
                  👨‍💻
                </div>
                <div className="frame-caption">
                  That's me!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Blocks */}
        <div className="info-blocks">
          <div className="info-block experience">
            <div className="block-icon">💼</div>
            <h4>Experience</h4>
            <p>2+ Years</p>
          </div>
          <div className="info-block education">
            <div className="block-icon">🎓</div>
            <h4>Education</h4>
            <p>Computer Science</p>
          </div>
          <div className="info-block skills">
            <div className="block-icon">⚡</div>
            <h4>Skills</h4>
            <p>React, JS, CSS</p>
          </div>
          <div className="info-block tools">
            <div className="block-icon">🛠️</div>
            <h4>Tools</h4>
            <p>VS Code, Git</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="mailto:your.email@example.com" className="social-link email">
            <span className="social-icon">📧</span>
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/keval-solankure" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/keval15-ui" className="social-link github" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">🐱</span>
            <span>GitHub</span>
          </a>
        </div>

        {/* CTA Button */}
        <button className="cta-button creative-cta" onClick={handleExploreWork}>
          <span>Explore My Work</span>
          <div className="button-decoration">🚀</div>
        </button>
      </div>
    </div>
  );
};

export default Home;