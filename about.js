document.addEventListener('DOMContentLoaded', function() {
    // Animation system for about page
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Create intersection observer to trigger animations when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = parseFloat(el.dataset.delay || 0);
                const animation = el.dataset.animation || 'fadeIn';
                
                setTimeout(() => {
                    el.classList.add(animation);
                }, delay * 1000);
                
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all animated elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Ensure back to home button sets session storage
    const homeLink = document.querySelector('.home-link');
    if (homeLink) {
        homeLink.addEventListener('click', function() {
            sessionStorage.setItem('hasSeenIntro', 'true');
        });
    }
    
    // Enhanced parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Apply parallax effect to profile image with depth
        const profileImage = document.querySelector('.profile-image-wrapper');
        if (profileImage) {
            profileImage.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        }
        
        // Apply subtle parallax to timeline items with staggered effect
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            const speed = 0.03 + (index * 0.005);
            const yPos = -scrollPosition * speed;
            const rotation = scrollPosition * 0.01 * (index % 2 === 0 ? 1 : -1);
            item.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        });
        
        // Animate section headings on scroll
        document.querySelectorAll('.section-heading').forEach((heading) => {
            const headingPosition = heading.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            if (headingPosition < screenHeight * 0.8) {
                heading.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    heading.style.transform = 'scale(1)';
                }, 300);
            }
        });
        
        // Parallax effect on star background
        const stars1 = document.getElementById('stars1');
        const stars2 = document.getElementById('stars2');
        const stars3 = document.getElementById('stars3');
        
        if (stars1) stars1.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        if (stars2) stars2.style.transform = `translateY(${scrollPosition * 0.07}px)`;
        if (stars3) stars3.style.transform = `translateY(${scrollPosition * 0.04}px)`;
    });
    
    // Add mouse movement effect on bio content
    const bioContent = document.querySelector('.bio-content');
    if (bioContent) {
        bioContent.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            
            this.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`;
        });
        
        bioContent.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    }
    
    // Add magnetic effect to timeline markers
    document.querySelectorAll('.timeline-marker').forEach(marker => {
        document.addEventListener('mousemove', function(e) {
            const markerRect = marker.getBoundingClientRect();
            const markerCenterX = markerRect.left + markerRect.width / 2;
            const markerCenterY = markerRect.top + markerRect.height / 2;
            
            const distanceX = e.clientX - markerCenterX;
            const distanceY = e.clientY - markerCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
            if (distance < 100) {
                const strength = 30 / (distance + 5);
                marker.style.transform = `translate(${distanceX * strength}px, ${distanceY * strength}px) scale(1.2)`;
            } else {
                marker.style.transform = 'translate(0, 0) scale(1)';
            }
        });
    });
    
    // Create custom cursor elements for the about page
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
    const interactiveElements = document.querySelectorAll('a, button, .timeline-marker, .home-link');
    
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
});
