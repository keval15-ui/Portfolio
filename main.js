// This file contains the JavaScript code for the portfolio website.
// It may include functionality such as interactive elements, form validation, or dynamic content loading.

document.addEventListener('DOMContentLoaded', function() {
    // Animation System - Inspired by React's useEffect and framer-motion
    const AnimationController = {
        // Track elements to animate
        elements: [],
        
        // Observer to detect when elements enter viewport
        observer: null,
        
        // Initialize animation system
        init() {
            // Create intersection observer similar to React useInView hook
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Get animation data stored on the element
                        const el = entry.target;
                        const delay = parseFloat(el.dataset.delay || 0);
                        const duration = parseFloat(el.dataset.duration || 0.6);
                        const animation = el.dataset.animation || 'fadeIn';
                        
                        // Apply animation with setTimeout (like React's useEffect cleanup)
                        setTimeout(() => {
                            el.classList.add('animated', animation);
                            el.style.animationDuration = `${duration}s`;
                            el.style.opacity = '1';
                        }, delay * 1000);
                        
                        // Stop observing after animation is triggered (cleanup function)
                        this.observer.unobserve(el);
                    }
                });
            }, { 
                threshold: 0.1  // 10% of element must be visible
            });
            
            // Find all elements with data-animate attribute (like React component selector)
            const animatedElements = document.querySelectorAll('[data-animate]');
            animatedElements.forEach(el => {
                // Set initial state (like React's useState)
                el.style.opacity = '0';
                // Store in our elements array
                this.elements.push(el);
                // Begin observing
                this.observer.observe(el);
            });
        }
    };

    // Initialize animation system
    AnimationController.init();
    
    // Create staggered animation for nav items (similar to React loops with index)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.dataset.animate = 'true';
        item.dataset.animation = 'fadeInUp';
        item.dataset.delay = 0.3 + (index * 0.15);
        item.dataset.duration = 0.7;
    });
    
    // Animate logo and header elements with staggered timing
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.dataset.animate = 'true';
        logoElement.dataset.animation = 'fadeInDown';
        logoElement.dataset.delay = 0.1;
    }
    
    const headerTitle = document.querySelector('.header h1');
    if (headerTitle) {
        headerTitle.dataset.animate = 'true';
        headerTitle.dataset.animation = 'fadeInDown';
        headerTitle.dataset.delay = 0.25;
    }
    
    const headerTagline = document.querySelector('.header .tagline');
    if (headerTagline) {
        headerTagline.dataset.animate = 'true';
        headerTagline.dataset.animation = 'fadeInDown';
        headerTagline.dataset.delay = 0.4;
    }
    
    // Animate social links with horizontal stagger
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.dataset.animate = 'true';
        link.dataset.animation = 'fadeInUp';
        link.dataset.delay = 0.9 + (index * 0.1);
    });
    
    // Animate footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.dataset.animate = 'true';
        footer.dataset.animation = 'fadeIn';
        footer.dataset.delay = 1.3;
    }
    
    // Add subtle animation to background shapes
    const shapes = document.querySelectorAll('.shape');
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const depth = (index + 1) * 0.2;
            const moveX = (mouseX - 0.5) * depth * 40;
            const moveY = (mouseY - 0.5) * depth * 40;
            
            shape.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.1}deg)`;
        });
    });
    
    // Card Tilt Effect
    navItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            // Get position of mouse relative to card
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleY = (x - centerX) / 10;
            const angleX = (centerY - y) / 10;
            
            // Apply the rotation
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
        });
        
        item.addEventListener('mouseleave', function() {
            // Reset the rotation when mouse leaves
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            
            // Add hover effect if needed
            if (this.classList.contains('hovered')) {
                this.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(5deg)';
            }
        });
        
        item.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example: Form validation for contact form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            if (!name || !email) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Orbit rotation controls
    const orbitContainer = document.querySelector('.orbit-container');
    if (orbitContainer) {
        // Auto-rotation is handled by CSS, but we can add interactive controls
        orbitContainer.addEventListener('mouseenter', function() {
            document.querySelector('.orbit').style.animationPlayState = 'paused';
        });
        
        orbitContainer.addEventListener('mouseleave', function() {
            document.querySelector('.orbit').style.animationPlayState = 'running';
        });
    }
    
    // Keep orbit items facing forward despite parent rotation
    const orbitItems = document.querySelectorAll('.orbit-item');
    orbitItems.forEach(item => {
        // Counter-rotate each item to keep it facing forward
        const angle = parseFloat(item.style.getPropertyValue('--angle'));
        item.style.transform = `rotate(calc(-1 * var(--angle))) translateX(calc(var(--orbit-size) / 2)) rotate(var(--angle))`;
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '100';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Glowing effect on social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const glow = this.querySelector('.glow');
            if (glow) {
                glow.style.width = '150%';
                glow.style.height = '150%';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            const glow = this.querySelector('.glow');
            if (glow) {
                glow.style.width = '0';
                glow.style.height = '0';
            }
        });
    });
    
    // Rotating profile effect
    const profileCircle = document.querySelector('.profile-circle');
    if (profileCircle) {
        profileCircle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        profileCircle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Create custom cursor elements
    const cursorContainer = document.createElement('div');
    cursorContainer.className = 'cursor-container';
    document.body.appendChild(cursorContainer);
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursorContainer.appendChild(cursor);
    
    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    cursorContainer.appendChild(cursorRing);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorContainer.appendChild(cursorDot);
    
    // Variables for cursor position with smoothing
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let cursorRingX = 0, cursorRingY = 0;
    let cursorDotX = 0, cursorDotY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Create particle trail effect
    function createTrailParticle(x, y) {
        // Limit the creation of particles for performance
        if (Math.random() > 0.3) return;
        
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        
        // Add some randomness to the trail
        const size = Math.random() * 5 + 3;
        trail.style.width = size + 'px';
        trail.style.height = size + 'px';
        
        // Random color variations
        const hue = Math.random() < 0.5 ? 275 : Math.random() < 0.7 ? 190 : 345; // purple, blue, or pink
        trail.style.background = `hsl(${hue}, 90%, 70%)`;
        trail.style.boxShadow = `0 0 10px hsl(${hue}, 90%, 60%)`;
        
        cursorContainer.appendChild(trail);
        
        // Remove after animation completes
        setTimeout(() => {
            if (trail && trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 1000);
    }
    
    // Handle hover states for links and interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .orbit-item, .social-icon, .profile-circle');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('link-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('link-hover');
        });
    });
    
    // Animation loop for cursor with smoothing
    function animateCursor() {
        // Calculate smoothed positions with different speeds for each element
        cursorX = lerp(cursorX, mouseX, 0.2);
        cursorY = lerp(cursorY, mouseY, 0.2);
        
        cursorRingX = lerp(cursorRingX, mouseX, 0.15);
        cursorRingY = lerp(cursorRingY, mouseY, 0.15);
        
        cursorDotX = lerp(cursorDotX, mouseX, 0.3);
        cursorDotY = lerp(cursorDotY, mouseY, 0.3);
        
        // Apply positions
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorRing.style.transform = `translate(${cursorRingX}px, ${cursorRingY}px)`;
        cursorDot.style.transform = `translate(${cursorDotX}px, ${cursorDotY}px)`;
        
        // Create trail particles
        createTrailParticle(cursorX, cursorY);
        
        // Continue the animation loop
        requestAnimationFrame(animateCursor);
    }
    
    // Linear interpolation helper function
    function lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
    
    // Start the animation
    animateCursor();
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            cursor.style.opacity = '0';
            cursorRing.style.opacity = '0';
            cursorDot.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseover', () => {
        cursor.style.opacity = '0.7';
        cursorRing.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });
    
    // Prevent default cursor on interactive elements
    interactiveElements.forEach(el => {
        el.style.cursor = 'none';
    });
});