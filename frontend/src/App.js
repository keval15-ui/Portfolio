import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects'; // Import the new Projects component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> {/* Use the Projects component */}
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