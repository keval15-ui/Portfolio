import React from "react";
import { Link } from "react-router-dom";
import "@/styles/Homepage.css";

const Homepage = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="star-field">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="comet"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h4 className="hero-greeting">Hi, My Name is</h4>
          <h1 className="hero-name">Keval Solankure</h1>

          <div className="hero-specialization-container">
            <div className="hero-specialization">
              <span className="specialization-item item-1">
                React Specialist
              </span>
              <span className="separator">|</span>
              <span className="specialization-item item-2">Frontend Dev</span>
              <span className="separator">|</span>
              <span className="specialization-item item-3">Backend Dev</span>
            </div>
          </div>

          <p className="hero-description">
            I build exceptional digital experiences with clean, efficient code.
            Passionate about creating responsive, user-friendly applications
            that solve real-world problems.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="primary-btn">
              View Projects
            </Link>
            <Link to="/contact" className="secondary-btn">
              Hire Me
            </Link>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-circle">
            <div className="cosmic-ring"></div>
            <img src="/profile-image.jpg" alt="" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
