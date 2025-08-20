import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-background-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="about-decorative-elements">
        <div className="about-floating-star star-1">⭐</div>
        <div className="about-floating-star star-2">✨</div>
        <div className="about-floating-star star-3">🌟</div>
        <div className="about-paper-clip clip-1">📎</div>
        <div className="about-paper-clip clip-2">📎</div>
        <div className="about-sticky-note-decoration">💡</div>
      </div>

      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <div className="about-subtitle">Frontend Developer & UI Enthusiast</div>
        </div>

        {/* Introduction */}
        <div className="about-intro-card">
          <div className="about-intro-content">
            <div className="about-avatar">
              <div className="about-avatar-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="about-intro-text">
              <h2 className="handwritten-title">Hello there!</h2>
              <p>I’m Keval, a B.Tech CSE (Big Data Analytics) student at SRM University, passionate about machine learning, data visualization, and analytics. I’ve won the Build 2 Deploy hackathon, participated in Genesis 24 (Web Development), and contributed as Technical Head of White Hat Hackers Club, Event Coordinator of E-Treasure Hunt, and Technical Member of Exadata and NIC.</p>
              <p>My journey in web development started with a curiosity about how websites work and has evolved into a career focused on creating exceptional user experiences.</p>
            </div>
          </div>
        </div>

        {/* My Journey */}
        <div className="journey-section">
          <h2 className="section-title">My Journey</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2025 - Present</div>
                <h3>Achievements & Roles at SRM University</h3>
                <p>🏆 Winner – Build 2 Deploy (Exadata Hackathon): Built and deployed an ML model using vector regression to predict batsman performance.

🌐 Participant – Genesis 24 (Web Development Symposium): Competed in a national-level Web Development event.

👨‍💻 Technical Head – White Hat Hackers Club: Guided peers, organized technical activities, and mentored juniors.

🧭 Event Coordinator – E-Treasure Hunt: Successfully planned and executed a university-level treasure hunt event.

🔹 Technical Member – Exadata & NIC: Actively contributing to technical clubs at SRM through projects and events.</p>
                <div className="timeline-tag">Professional</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2025 - 2026</div>
                <h3>2024 Aug – Present | B.Tech CSE (Big Data Analytics), SRM University</h3>
                <p>Currently pursuing my degree with a focus on machine learning, data visualization, and analytics in second year .</p>
                <div className="timeline-tag">Education</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2024 - 2025</div>
                <h3>2024 | Started B.Tech Journey at SRM (Aug 18, 2024)</h3>
                <p>Embarked on my engineering journey in Big Data Analytics.</p>
                <div className="timeline-tag">Personal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="about-skills-section">
          <h2 className="section-title">My Skills</h2>
          
          <div className="skills-container">
            <div className="skills-category">
              <h3>Frontend</h3>
              <div className="skill-pills">
                <div className="skill-pill">React</div>
                <div className="skill-pill">JavaScript</div>
                <div className="skill-pill">HTML5</div>
                <div className="skill-pill">CSS3/SASS</div>
                <div className="skill-pill">Responsive Design</div>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-pills">
                <div className="skill-pill">Git</div>
                <div className="skill-pill">VS Code</div>
                <div className="skill-pill">Figma</div>
                <div className="skill-pill">npm/yarn</div>
                <div className="skill-pill">Webpack</div>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Soft Skills</h3>
              <div className="skill-pills">
                <div className="skill-pill">Problem Solving</div>
                <div className="skill-pill">Communication</div>
                <div className="skill-pill">Time Management</div>
                <div className="skill-pill">Teamwork</div>
                <div className="skill-pill">Adaptability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="interests-section">
          <h2 className="section-title">When I'm Not Coding</h2>
          
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">📚</div>
              <h3>Reading</h3>
              <p>Tech blogs, sci-fi novels, and design books</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">🎮</div>
              <h3>Gaming</h3>
              <p>Strategy games and immersive RPGs</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">🏃‍♂️</div>
              <h3>Fitness</h3>
              <p>Morning runs and weekend hikes</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">✈️</div>
              <h3>Travel</h3>
              <p>Exploring new places and cultures</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="quote-section">
          <blockquote>
            "The best way to predict the future is to create it."
          </blockquote>
          <div className="quote-author">— Abraham Lincoln</div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <p>Interested in working together? Feel free to check out my projects or get in touch!</p>
          <div className="about-buttons">
            <a href="/projects" className="about-btn projects-btn">View My Projects</a>
            <a href="/contact" className="about-btn contact-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;