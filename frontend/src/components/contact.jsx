import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.',
        loading: false
      });
      return;
    }
    
    // Set loading state
    setFormStatus({
      ...formStatus,
      loading: true
    });

    // Replace with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_xyjl9d7';
    const templateId = 'template_az5thv7';
    const publicKey = 'VBT2EsL31Da1bQV8o';
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message! I\'ll get back to you soon.',
          loading: false
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setFormStatus({
          submitted: false,
          error: true,
          message: 'Something went wrong. Please try again later.',
          loading: false
        });
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-background-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="contact-decorative-elements">
        <div className="contact-floating-star star-1">⭐</div>
        <div className="contact-floating-star star-2">✨</div>
        <div className="contact-floating-star star-3">🌟</div>
        <div className="contact-paper-clip clip-1">📎</div>
        <div className="contact-paper-clip clip-2">📎</div>
        <div className="contact-sticky-note-decoration">📝</div>
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <div className="contact-subtitle">Let's Discuss Your Ideas & Questions</div>
        </div>

        {/* Introduction */}
        <div className="contact-intro-card">
          <p>I'm always interested in new projects, collaborations, or just chatting about web development!</p>
          <p>Fill out the form below or reach out through any of the provided contact methods.</p>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Send Me a Message</h2>
            
            <div className="contact-form-container">
              {formStatus.submitted ? (
                <div className="form-success-message">
                  <div className="success-icon">✅</div>
                  <h3>Thank You!</h3>
                  <p>{formStatus.message}</p>
                  <button 
                    className="reset-form-btn"
                    onClick={() => setFormStatus(prev => ({...prev, submitted: false}))}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                  {formStatus.error && (
                    <div className="form-error-message">
                      {formStatus.message}
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={formStatus.loading}
                  >
                    {formStatus.loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <div className="button-decoration">📨</div>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Other Ways to Connect */}
          <div className="connect-section">
            <h2 className="section-title">Other Ways to Connect</h2>
            
            <div className="connect-grid">
              <div className="connect-card">
                <div className="connect-icon">📧</div>
                <h3>Email</h3>
                <p>Feel free to email me directly at:</p>
                <a href="mailto:keval.solankure@example.com" className="connect-link">
                  keval.solankure@example.com
                </a>
              </div>
              
              <div className="connect-card">
                <div className="connect-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Connect with me professionally:</p>
                <a href="https://www.linkedin.com/in/keval-solankure" target="_blank" rel="noopener noreferrer" className="connect-link">
                  linkedin.com/in/keval-solankure
                </a>
              </div>
              
              <div className="connect-card">
                <div className="connect-icon">🐱</div>
                <h3>GitHub</h3>
                <p>Check out my code repositories:</p>
                <a href="https://github.com/kevalsolankure" target="_blank" rel="noopener noreferrer" className="connect-link">
                  github.com/kevalsolankure
                </a>
              </div>
              
              <div className="connect-card">
                <div className="connect-icon">🌐</div>
                <h3>Social Media</h3>
                <p>Follow me on social platforms:</p>
                <div className="social-links-grid">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-media-link">Twitter</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-media-link">Instagram</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-media-link">Dribbble</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What type of projects do you work on?</h3>
              <p>I specialize in creating responsive websites, web applications, and interactive UIs using modern frontend technologies like React, JavaScript, and CSS.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is your typical response time?</h3>
              <p>I typically respond to all inquiries within 24-48 hours during weekdays.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are you available for freelance work?</h3>
              <p>Yes, I'm open to freelance opportunities that align with my skills and interests.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you work remotely?</h3>
              <p>Yes, I'm comfortable working remotely and have experience collaborating with distributed teams.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <p>Looking forward to connecting with you soon!</p>
          <a href="/projects" className="contact-btn projects-btn">View My Work</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;