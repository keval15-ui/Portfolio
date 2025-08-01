import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skill';
import Contact from './components/contact'; // Import the new Contact component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} /> {/* Use the Contact component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;