document.addEventListener('DOMContentLoaded', function() {
    // Animation system for skills page
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
    
    // Animate skill progress bars when they come into view
    function animateSkillBars() {
        const skillProgress = document.querySelectorAll('.skill-progress');
        skillProgress.forEach(progress => {
            const width = progress.style.width;
            progress.style.width = '0';
            
            setTimeout(() => {
                progress.style.width = width;
            }, 500);
        });
    }
    animateSkillBars();
    
    // Animate learning progress bars
    function animateLearningBars() {
        const learningProgress = document.querySelectorAll('.learning-progress');
        learningProgress.forEach(progress => {
            const width = progress.style.width;
            progress.style.width = '0';
            
            setTimeout(() => {
                progress.style.width = width;
            }, 800);
        });
    }
    animateLearningBars();
    
    // Add interactive effects to skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.transform = 'rotate(10deg) scale(1.1)';
            
            const progress = this.querySelector('.skill-progress');
            progress.style.boxShadow = '0 0 15px var(--primary)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.transform = 'rotate(0) scale(1)';
            
            const progress = this.querySelector('.skill-progress');
            progress.style.boxShadow = 'none';
        });
    });
    
    // Add hover effects to tool items
    document.querySelectorAll('.tool-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const logo = this.querySelector('.tool-logo');
            logo.style.transform = 'scale(1.2)';
            logo.style.color = 'var(--accent)';
        });
        
        item.addEventListener('mouseleave', function() {
            const logo = this.querySelector('.tool-logo');
            logo.style.transform = 'scale(1)';
            logo.style.color = 'var(--secondary)';
        });
    });
    
    // Enhanced parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Apply subtle parallax to skill categories with staggered effect
        document.querySelectorAll('.skills-category').forEach((item, index) => {
            const speed = 0.02 + (index * 0.005);
            const yPos = -scrollPosition * speed;
            item.style.transform = `translateY(${yPos}px)`;
        });
        
        // Animate section headings on scroll
        document.querySelectorAll('.category-heading').forEach((heading) => {
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
    
    // Add floating effect to soft skill pills
    document.querySelectorAll('.soft-skill-item').forEach((item, index) => {
        const delay = index * 0.2;
        const duration = 3 + Math.random() * 2;
        
        item.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        // Create the keyframes for the float animation
        if (!document.getElementById('float-keyframes')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'float-keyframes';
            styleSheet.textContent = `
                @keyframes float {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-10px); }
                }
            `;
            document.head.appendChild(styleSheet);
        }
    });
    
    // Create custom cursor elements for the skills page
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
        
        // Random color variations - focusing on the skills theme colors
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
    const interactiveElements = document.querySelectorAll('a, .skill-card, .tool-item, .soft-skill-item, .home-link');
    
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

    // Add complementary styles for cursor and trail effects
    const style = document.createElement('style');
    style.textContent = `
        .cursor-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        }
        
        .cursor {
            position: fixed;
            width: 10px;
            height: 10px;
            background: var(--secondary);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 15px var(--secondary);
            opacity: 0.7;
            transition: width 0.2s, height 0.2s, opacity 0.2s;
        }
        
        .cursor-ring {
            position: fixed;
            width: 30px;
            height: 30px;
            border: 2px solid rgba(0, 208, 255, 0.5);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.15s ease-out;
        }
        
        .cursor-dot {
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--accent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
            pointer-events: none;
            z-index: 10000;
            box-shadow: 0 0 10px var(--accent);
            transition: transform 0.1s;
        }
        
        .trail {
            position: fixed;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--primary);
            opacity: 0;
            pointer-events: none;
            z-index: 9997;
            mix-blend-mode: screen;
            animation: fadeOut 1s linear forwards;
        }
        
        @keyframes fadeOut {
            0% {
                opacity: 0.7;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0.3);
            }
        }
        
        /* Cursor states */
        .link-hover .cursor {
            width: 15px;
            height: 15px;
            background: var(--accent);
            opacity: 0.9;
        }
        
        .link-hover .cursor-ring {
            width: 40px;
            height: 40px;
            border-color: var(--accent);
            border-width: 1px;
        }
    `;
    document.head.appendChild(style);
});
