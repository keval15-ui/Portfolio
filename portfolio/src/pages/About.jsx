import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="stars-small">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star-small"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-circle">
              <div className="cosmic-ring"></div>
              <img
                src="/about-profile.jpg"
                alt="Keval Solankure"
                className="about-image"
              />
            </div>

            <div className="planet-decoration planet-small"></div>
          </div>

          <div className="about-text">
            <h3 className="about-greeting">Who I Am</h3>
            <p className="about-paragraph">
              I'm a passionate full-stack developer with a focus on creating
              beautiful, functional, and user-centered digital experiences. With
              a background in computer science and a love for clean code, I
              bring creative solutions to complex problems.
            </p>

            <p className="about-paragraph">
              My journey in tech began 5 years ago, and since then I've worked
              with a variety of technologies and frameworks. I specialize in
              React for frontend development, Node.js for backend services, and
              have experience with modern cloud infrastructure.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "#0ff" }}
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
                  </svg>
                </div>
                <div className="detail-content">
                  <h4>Location</h4>
                  <p>Chennai, India</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ fill: "#0ff" }}
                  >
                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                  </svg>
                </div>
                <div className="detail-content email-content">
                  <h4>Email</h4>
                  <p className="email-text">kevalsolankure@gmail.com</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ fill: "#0ff" }}
                  >
                    <path d="M16.53 11.152l-8-5C8.221 5.958 7.833 6 7.5 6.31c-.333.31-.5.718-.5 1.157v10c0 .433.167.833.5 1.146.333.313.721.365 1.03.177l8-5c.311-.2.47-.512.47-.935 0-.418-.159-.735-.47-.935zM9 15.45V8.552L14.022 12 9 15.45z" />
                  </svg>
                </div>
                <div className="detail-content">
                  <h4>Experience</h4>
                  <p>Student B.Tech 1st Year</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ fill: "#0ff" }}
                  >
                    <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm9 15H6V8h3v2h6V8h3v11z" />
                  </svg>
                </div>
                <div className="detail-content">
                  <h4>Availability</h4>
                  <p>Open to Opportunities</p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="tech-stack">
          <h3 className="tech-stack-title">My Tech Stack</h3>
          <div className="tech-cards">
            <div className="tech-card">
              <div className="tech-icon frontend-icon"></div>
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>HTML5/CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="tech-card">
              <div className="tech-icon backend-icon"></div>
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>REST API</li>
                <li>GraphQL</li>
              </ul>
            </div>

            <div className="tech-card">
              <div className="tech-icon tools-icon"></div>
              <h4>Tools & Others</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Firebase</li>
                <li>Figma</li>
                <li>Agile/Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="orbit-decoration">
        <div className="orbit"></div>
        <div className="orbit-planet"></div>
      </div>
    </section>
  );
};

export default About;
