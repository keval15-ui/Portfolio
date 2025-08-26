import React from 'react';
import './skill.css';

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-background-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="skills-decorative-elements">
        <div className="skills-floating-star star-1">⭐</div>
        <div className="skills-floating-star star-2">✨</div>
        <div className="skills-floating-star star-3">🌟</div>
        <div className="skills-paper-clip clip-1">📎</div>
        <div className="skills-paper-clip clip-2">📎</div>
        <div className="skills-sticky-note-decoration">💡</div>
      </div>

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <h1 className="skills-title">My Skills</h1>
          <div className="skills-subtitle">Technologies & Tools I Work With</div>
        </div>

        {/* Introduction */}
        <div className="skills-intro-card">
          <p>As a passionate frontend developer, I've cultivated a diverse set of skills across various technologies and tools.</p>
          <p>Here's an overview of my technical expertise and the tools I use daily to create exceptional web experiences.</p>
        </div>

        {/* Main Skills Section */}
        <div className="main-skills-section">
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skill-categories">
            {/* Frontend Development */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">🎨</div>
                <h3> Programming Languages</h3>
              </div>
              
              <div className="skill-bars">
                <div className="skill-item">
                  <div className="skill-info">
                    <span>React</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-info">
                    <span>JavaScript</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-info">
                    <span>HTML5 & CSS3</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Responsive Design</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* JavaScript Frameworks & Libraries */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">📚</div>
                <h3>Frameworks & Libraries</h3>
              </div>
              
              <div className="skill-bars">
                
                
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Next.js</span>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Material UI</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Tailwind CSS</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="tools-section">
          <h2 className="section-title">Tools & Platforms</h2>
          
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">💻</div>
              <h3>Development</h3>
              <ul className="tool-list">
                <li>VS Code</li>
                <li>Git & GitHub</li>
              
              </ul>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">🎭</div>
              <h3>Design</h3>
              <ul className="tool-list">
                <li>Figma</li>
                <li>Canva</li>
                
                
                
              </ul>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">🚀</div>
              <h3>Deployment</h3>
              <ul className="tool-list">
                <li>Vercel</li>
                <li>Supabase</li>
                <li>Firebase</li>
                
              </ul>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">🧪</div>
              <h3>Testing</h3>
              <ul className="tool-list">
                <li>Jest</li>
                <li>React Testing Library</li>
                <li>Cypress</li>
                <li>Selenium</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-section">
          <h2 className="section-title">Soft Skills</h2>
          
          <div className="soft-skills-grid">
            <div className="soft-skill-card">
              <div className="soft-skill-icon">🧠</div>
              <h3>Problem Solving</h3>
              <p>Analytical thinking and creative approaches to complex challenges</p>
            </div>
            
            <div className="soft-skill-card">
              <div className="soft-skill-icon">👥</div>
              <h3>Teamwork</h3>
              <p>Effective collaboration with cross-functional teams</p>
            </div>
            
            <div className="soft-skill-card">
              <div className="soft-skill-icon">🗣️</div>
              <h3>Communication</h3>
              <p>Clear and concise verbal and written communication</p>
            </div>
            
            <div className="soft-skill-card">
              <div className="soft-skill-icon">⏱️</div>
              <h3>Time Management</h3>
              <p>Prioritizing tasks and meeting deadlines efficiently</p>
            </div>
            
            <div className="soft-skill-card">
              <div className="soft-skill-icon">🔄</div>
              <h3>Adaptability</h3>
              <p>Quick learning and adaptation to new technologies</p>
            </div>
            
            <div className="soft-skill-card">
              <div className="soft-skill-icon">🔍</div>
              <h3>Attention to Detail</h3>
              <p>Meticulous focus on quality and user experience</p>
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="learning-section">
          <div className="learning-card">
            <h2>Currently Learning</h2>
            <div className="learning-items">
              <div className="learning-item">
                <div className="learning-icon">🔄</div>
                <span>TypeScript</span>
              </div>
              <div className="learning-item">
                <div className="learning-icon">🔄</div>
                <span>GraphQL</span>
              </div>
              <div className="learning-item">
                <div className="learning-icon">🔄</div>
                <span>Next.js</span>
              </div>
              <div className="learning-item">
                <div className="learning-icon">🔄</div>
                <span>Three.js</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Skills;