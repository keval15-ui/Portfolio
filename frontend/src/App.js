import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<div>Home Page - Coming Soon</div>} />
          <Route path="/about" element={<div>About Page - Coming Soon</div>} />
          <Route path="/projects" element={<div>Projects Page - Coming Soon</div>} />
          <Route path="/skills" element={<div>Skills Page - Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Page - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;