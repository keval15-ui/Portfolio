/**
 * Custom cursor animation
 * Creates a futuristic, interactive cursor effect that matches the portfolio theme
 */

class CursorEffect {
    constructor(options = {}) {
        // Default options
        this.options = Object.assign({
            trailDensity: 0.3,           // How often to create trail particles (0-1)
            cursorSpeed: 0.2,            // Main cursor smoothing (0-1)
            ringSpeed: 0.15,             // Ring cursor smoothing (0-1)
            dotSpeed: 0.3,               // Dot cursor smoothing (0-1)
            trailDuration: 1000,         // How long trail particles last (ms)
            primaryColor: '#6e42ff',     // Primary color
            secondaryColor: '#00d0ff',   // Secondary color 
            accentColor: '#ff2970',      // Accent color
            interactive: 'a, button, .orbit-item, .social-icon, .profile-circle, .timeline-marker, .home-link'
        }, options);
        
        // Cursor state
        this.mouseX = 0;
        this.mouseY = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.cursorRingX = 0;
        this.cursorRingY = 0;
        this.cursorDotX = 0;
        this.cursorDotY = 0;
        
        // Initialize effect
        this.init();
    }
    
    init() {
        // Create cursor elements
        this.createCursorElements();
        
        // Add event listeners
        this.addEventListeners();
        
        // Start animation loop
        this.animateCursor();
    }
    
    createCursorElements() {
        // Create container
        this.container = document.createElement('div');
        this.container.className = 'cursor-container';
        document.body.appendChild(this.container);
        
        // Create main cursor
        this.cursor = document.createElement('div');
        this.cursor.className = 'cursor';
        this.container.appendChild(this.cursor);
        
        // Create ring cursor
        this.cursorRing = document.createElement('div');
        this.cursorRing.className = 'cursor-ring';
        this.container.appendChild(this.cursorRing);
        
        // Create dot cursor
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        this.container.appendChild(this.cursorDot);
    }
    
    addEventListeners() {
        // Track mouse movements
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        // Handle interactive elements
        const interactiveElements = document.querySelectorAll(this.options.interactive);
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('link-hover');
            });
            
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('link-hover');
            });
            
            el.style.cursor = 'none';
        });
        
        // Handle mouse leaving/entering window
        document.addEventListener('mouseout', (e) => {
            if (e.relatedTarget === null) {
                this.cursor.style.opacity = '0';
                this.cursorRing.style.opacity = '0';
                this.cursorDot.style.opacity = '0';
            }
        });
        
        document.addEventListener('mouseover', () => {
            this.cursor.style.opacity = '0.7';
            this.cursorRing.style.opacity = '1';
            this.cursorDot.style.opacity = '1';
        });
    }
    
    createTrailParticle(x, y) {
        // Control density of trail particles
        if (Math.random() > this.options.trailDensity) return;
        
        // Create a trail particle
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        
        // Add some randomness to the trail
        const size = Math.random() * 5 + 3;
        trail.style.width = size + 'px';
        trail.style.height = size + 'px';
        
        // Random color variations
        const colorType = Math.random();
        let hue;
        
        if (colorType < 0.33) {
            // Primary color
            hue = 275; // Purple
        } else if (colorType < 0.66) {
            // Secondary color
            hue = 190; // Blue
        } else {
            // Accent color
            hue = 345; // Pink
        }
        
        trail.style.background = `hsl(${hue}, 90%, 70%)`;
        trail.style.boxShadow = `0 0 10px hsl(${hue}, 90%, 60%)`;
        
        this.container.appendChild(trail);
        
        // Remove after animation completes
        setTimeout(() => {
            if (trail && trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, this.options.trailDuration);
    }
    
    animateCursor() {
        // Calculate smoothed positions with different speeds for each element
        this.cursorX = this.lerp(this.cursorX, this.mouseX, this.options.cursorSpeed);
        this.cursorY = this.lerp(this.cursorY, this.mouseY, this.options.cursorSpeed);
        
        this.cursorRingX = this.lerp(this.cursorRingX, this.mouseX, this.options.ringSpeed);
        this.cursorRingY = this.lerp(this.cursorRingY, this.mouseY, this.options.ringSpeed);
        
        this.cursorDotX = this.lerp(this.cursorDotX, this.mouseX, this.options.dotSpeed);
        this.cursorDotY = this.lerp(this.cursorDotY, this.mouseY, this.options.dotSpeed);
        
        // Apply positions
        this.cursor.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`;
        this.cursorRing.style.transform = `translate(${this.cursorRingX}px, ${this.cursorRingY}px)`;
        this.cursorDot.style.transform = `translate(${this.cursorDotX}px, ${this.cursorDotY}px)`;
        
        // Create trail particles
        this.createTrailParticle(this.cursorX, this.cursorY);
        
        // Continue the animation loop
        requestAnimationFrame(this.animateCursor.bind(this));
    }
    
    // Linear interpolation helper function
    lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
}
