import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <div className="coming-soon creative-layout">
              <div className="coming-soon-content">
                <div className="decorative-element star-1">⭐</div>
                <div className="decorative-element paper-clip">📎</div>
                <h2>About Me</h2>
                <div className="handwritten-text">
                  <p>Hi! I'm a passionate frontend developer who loves creating beautiful, interactive web experiences.</p>
                  <p>Currently crafting this section with lots of creativity and attention to detail...</p>
                </div>
                <div className="sticky-note">Coming Soon! 🎨</div>
              </div>
            </div>
          } />
          <Route path="/projects" element={
            <div className="coming-soon creative-layout">
              <div className="coming-soon-content">
                <div className="decorative-element star-2">✨</div>
                <h2>My Projects</h2>
                <div className="project-preview-grid">
                  <div className="project-placeholder">
                    <div className="project-icon">💻</div>
                    <p>Web Apps</p>
                  </div>
                  <div className="project-placeholder">
                    <div className="project-icon">📱</div>
                    <p>Mobile Apps</p>
                  </div>
                  <div className="project-placeholder">
                    <div className="project-icon">🎨</div>
                    <p>UI/UX Design</p>
                  </div>
                </div>
                <div className="sticky-note">Exciting projects loading... 🚀</div>
              </div>
            </div>
          } />
          <Route path="/skills" element={
            <div className="coming-soon creative-layout">
              <div className="coming-soon-content">
                <div className="decorative-element star-3">🌟</div>
                <h2>Skills & Tools</h2>
                <div className="skills-preview">
                  <div className="skill-block react">React</div>
                  <div className="skill-block js">JavaScript</div>
                  <div className="skill-block css">CSS3</div>
                  <div className="skill-block html">HTML5</div>
                </div>
                <div className="sticky-note">Leveling up daily! 💪</div>
              </div>
            </div>
          } />
          <Route path="/contact" element={
            <div className="coming-soon creative-layout">
              <div className="coming-soon-content">
                <div className="decorative-element star-4">💫</div>
                <h2>Let's Connect</h2>
                <div className="contact-preview">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <p>Email coming soon</p>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">💼</span>
                    <p>LinkedIn profile</p>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">🎯</span>
                    <p>Portfolio showcase</p>
                  </div>
                </div>
                <div className="sticky-note">Ready to collaborate! 🤝</div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;