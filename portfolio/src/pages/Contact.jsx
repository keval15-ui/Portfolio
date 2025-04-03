import React, { useState } from 'react';
import '../../styles/Contact.css';
// import emailjs from 'emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({ submitted: true, error: false, message: 'Sending your message...' });
    
    // Simulate form submission
    try {
      // Replace with actual API call when ready
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success response
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Message sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again later.'+error
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="stars-small">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="star-small" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}></div>
        ))}
      </div>
      
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>
        
        <p className="contact-intro">
          Have a project in mind or want to explore collaboration opportunities? 
          Feel free to reach out, and I'll get back to you as soon as possible.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                </svg>
              </div>
              <div className="contact-detail">
                <h3>Email Me</h3>
                
                <a href="mailto:kevalsolankure@gmail.com" className="contact-link">Send Email</a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 14.25c-2.347 0-4.25-1.903-4.25-4.25S9.653 5.75 12 5.75s4.25 1.903 4.25 4.25-1.903 4.25-4.25 4.25zm0-7.5c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25 3.25-1.455 3.25-3.25-1.455-3.25-3.25-3.25z"/>
                  <path d="M12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-19.5C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
                </svg>
              </div>
              <div className="contact-detail">
                <h3>Location</h3>
                <p>Pune, India</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div className="contact-detail">
                <h3>Profiles</h3>
                <div className="social-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                  <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-container">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <div className="input-container">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                </div>
                
                <button type="submit" className="submit-btn" disabled={formStatus.submitted && !formStatus.error}>
                  {formStatus.submitted && !formStatus.error ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus.message && (
                  <div className={`form-status ${formStatus.error ? 'error' : 'success'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="orbit-decoration left">
        <div className="orbit"></div>
        <div className="orbit-planet"></div>
      </div>
    </section>
  );
};

export default Contact;