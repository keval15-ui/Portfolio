import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skill'; // Import the new Skills component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} /> {/* Use the Skills component */}
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