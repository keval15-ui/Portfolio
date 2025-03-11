/**
 * Interactive 3D Particle System
 * Creates an immersive experience that transforms into text
 */

class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        this.overlay = document.querySelector('.canvas-overlay');
        this.container = document.getElementById('particle-container');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: this.canvas,
            alpha: true
        });
        
        this.particles = [];
        this.particleCount = window.innerWidth < 768 ? 3000 : 5000;
        this.targetPositions = [];
        this.currentState = 'initial'; // 'initial', 'dispersed', 'text', 'portal'
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.clickTime = 0;
        this.textShapes = null;
        
        this.colors = {
            primary: new THREE.Color('#6e42ff'),
            secondary: new THREE.Color('#00d0ff'),
            accent: new THREE.Color('#ff2970')
        };
        
        this.init();
    }
    
    init() {
        // Set up renderer
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Set up camera position
        this.camera.position.z = 10;
        
        // Create a particle material
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: this.colors.primary,
            transparent: true,
            blending: THREE.AdditiveBlending,
            vertexColors: true
        });
        
        // Create particle geometry
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        const sizes = new Float32Array(this.particleCount);
        
        // Initialize particles in a spherical formation
        for (let i = 0; i < this.particleCount; i++) {
            // Generate random positions in a sphere
            const radius = 5;
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);
            
            positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
            positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            positions[i * 3 + 2] = radius * Math.cos(theta);
            
            // Store initial position for animation
            this.particles.push({
                position: new THREE.Vector3(
                    positions[i * 3],
                    positions[i * 3 + 1],
                    positions[i * 3 + 2]
                ),
                target: new THREE.Vector3(
                    positions[i * 3],
                    positions[i * 3 + 1],
                    positions[i * 3 + 2]
                ),
                velocity: new THREE.Vector3(
                    Math.random() * 0.01 - 0.005,
                    Math.random() * 0.01 - 0.005,
                    Math.random() * 0.01 - 0.005
                ),
                speed: Math.random() * 0.01 + 0.005,
                size: Math.random() * 3 + 0.5
            });
            
            // Randomize colors between primary and secondary
            const color = Math.random() > 0.5 ? this.colors.primary : this.colors.secondary;
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
            
            // Randomize sizes
            sizes[i] = this.particles[i].size;
        }
        
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        // Create the particle system
        this.particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        this.scene.add(this.particleSystem);
        
        // Add event listeners
        window.addEventListener('resize', this.onWindowResize.bind(this));
        window.addEventListener('click', this.onClick.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        
        // Initialize text shapes for later use
        this.generateTextShapes("KEVAL");
        
        // Start animation
        this.animate();
    }
    
    generateTextShapes(text) {
        // Create text geometry for particles to form
        const loader = new THREE.FontLoader();
        
        // Since we're not loading an external font, simulate the process
        // In a real application, you would load a font file
        setTimeout(() => {
            // Create positions for text formation
            const textPositions = [];
            const fontSize = window.innerWidth < 768 ? 0.8 : 1.2;
            const gridSize = 0.05;
            const textWidth = text.length * fontSize;
            
            // Create a grid of points that form the text
            for (let x = -textWidth / 2; x < textWidth / 2; x += gridSize) {
                for (let y = -fontSize / 1.5; y < fontSize / 1.5; y += gridSize) {
                    // For each letter, determine if the point is within the letter shape
                    // This is a simplification - in a real app, use actual font geometry
                    const letterWidth = fontSize * 0.8;
                    const spacing = fontSize * 0.2;
                    
                    for (let i = 0; i < text.length; i++) {
                        const letterX = x + i * (letterWidth + spacing) - textWidth / 2 + letterWidth / 2;
                        if (this.pointIsInLetter(text[i], letterX, y, letterWidth, fontSize)) {
                            textPositions.push(new THREE.Vector3(
                                letterX,
                                y,
                                0
                            ));
                        }
                    }
                }
            }
            
            this.targetPositions = textPositions;
        }, 1000);
    }
    
    pointIsInLetter(letter, x, y, width, height) {
        // Simplified check to determine if a point falls within letter geometry
        // For a real application, use actual font geometry
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        
        // Define basic shapes for each letter
        switch(letter) {
            case 'K':
                // Vertical line
                if (x > -halfWidth && x < -halfWidth + width * 0.3) return true;
                // Diagonal lines
                const slope1 = (y - halfHeight) / (x - (-halfWidth + width * 0.3));
                const slope2 = (y + halfHeight) / (x - (-halfWidth + width * 0.3));
                if (slope1 < -1 && slope2 > 1) return true;
                return false;
            case 'E':
                // Vertical line
                if (x > -halfWidth && x < -halfWidth + width * 0.3) return true;
                // Horizontal lines
                if (y > halfHeight - height * 0.2 || y < -halfHeight + height * 0.2 || 
                    (y < height * 0.1 && y > -height * 0.1)) {
                    if (x > -halfWidth && x < halfWidth) return true;
                }
                return false;
            case 'V':
                // Calculate if point is within a V shape
                const normalizedX = (x + halfWidth) / width;
                const expectedY = -height * (Math.abs(normalizedX - 0.5) * 2);
                return y < expectedY + 0.1 && y > expectedY - 0.1;
            case 'A':
                // Calculate if point is within an A shape
                const normX = (x + halfWidth) / width;
                const expectedYA = height * (1 - Math.abs(normX - 0.5) * 2);
                // Vertical bar in A
                if (y < 0 && Math.abs(x) < width * 0.1) return true;
                return y < expectedYA + 0.1 && y > expectedYA - 0.1;
            case 'L':
                // Vertical line
                if (x > -halfWidth && x < -halfWidth + width * 0.3) return true;
                // Horizontal bottom line
                if (y < -halfHeight + height * 0.2) {
                    if (x > -halfWidth && x < halfWidth) return true;
                }
                return false;
            default:
                // Default rectangle for any other character
                return x > -halfWidth && x < halfWidth && y > -halfHeight && y < halfHeight;
        }
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        // Update particle positions based on current state
        this.updateParticles();
        
        // Render the scene
        this.renderer.render(this.scene, this.camera);
    }
    
    updateParticles() {
        const positions = this.particleSystem.geometry.attributes.position;
        const colors = this.particleSystem.geometry.attributes.color;
        
        // Update each particle based on its current state and target
        for (let i = 0; i < this.particleCount; i++) {
            const particle = this.particles[i];
            
            // Different behavior based on current system state
            switch(this.currentState) {
                case 'initial':
                    // Gentle floating motion in initial state
                    particle.position.x += particle.velocity.x;
                    particle.position.y += particle.velocity.y;
                    particle.position.z += particle.velocity.z;
                    
                    // Boundary checking - bounce off invisible sphere
                    const distance = particle.position.length();
                    if (distance > 5) {
                        particle.velocity.multiplyScalar(-1);
                    }
                    break;
                    
                case 'dispersed':
                    // Random motion in dispersed state
                    particle.position.x += particle.velocity.x * 2;
                    particle.position.y += particle.velocity.y * 2;
                    particle.position.z += particle.velocity.z * 2;
                    
                    // Regenerate velocity if particle goes too far
                    const dispersedDistance = particle.position.length();
                    if (dispersedDistance > 8) {
                        particle.velocity.set(
                            Math.random() * 0.02 - 0.01,
                            Math.random() * 0.02 - 0.01,
                            Math.random() * 0.02 - 0.01
                        );
                    }
                    break;
                    
                case 'text':
                    // Move towards text formation target positions
                    if (i < this.targetPositions.length) {
                        // Have a target position for this particle
                        const target = this.targetPositions[i];
                        
                        // Move towards target
                        const dx = target.x - particle.position.x;
                        const dy = target.y - particle.position.y;
                        const dz = target.z - particle.position.z;
                        
                        particle.position.x += dx * 0.05;
                        particle.position.y += dy * 0.05;
                        particle.position.z += dz * 0.05;
                        
                        // Update color based on distance to target
                        const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
                        if (distance < 0.1) {
                            // Close to target - use accent color
                            colors.array[i * 3] = this.colors.accent.r;
                            colors.array[i * 3 + 1] = this.colors.accent.g;
                            colors.array[i * 3 + 2] = this.colors.accent.b;
                        }
                    } else {
                        // No target position - float outside text
                        particle.position.x += particle.velocity.x * 0.5;
                        particle.position.y += particle.velocity.y * 0.5;
                        particle.position.z += particle.velocity.z * 0.5;
                        
                        // Keep these particles at a distance
                        const dist = particle.position.length();
                        if (dist < 4) {
                            const pushDir = particle.position.clone().normalize();
                            particle.position.add(pushDir.multiplyScalar(0.1));
                        }
                    }
                    break;
                    
                case 'portal':
                    // Create a portal effect - spiral into center
                    const distFromCenter = particle.position.length();
                    
                    // Direction to center
                    const toCenter = new THREE.Vector3(0, 0, 0).sub(particle.position).normalize();
                    
                    // Add spiraling motion
                    const spiral = new THREE.Vector3(
                        -particle.position.y * 0.1,
                        particle.position.x * 0.1,
                        0
                    ).normalize().multiplyScalar(0.05);
                    
                    // Combine motions
                    const motion = toCenter.multiplyScalar(0.01 * distFromCenter).add(spiral);
                    particle.position.add(motion);
                    
                    // When particles get close to center, prepare to transition to main page
                    if (distFromCenter < 0.5 && Date.now() - this.clickTime > 2000) {
                        this.transitionToMainPage();
                    }
                    break;
            }
            
            // Update position in geometry buffer
            positions.array[i * 3] = particle.position.x;
            positions.array[i * 3 + 1] = particle.position.y;
            positions.array[i * 3 + 2] = particle.position.z;
        }
        
        // Mark attributes for update
        positions.needsUpdate = true;
        colors.needsUpdate = true;
    }
    
    // Window resize handler
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    // Mouse move handler for interactive effects
    onMouseMove(event) {
        // Calculate mouse position in normalized device coordinates
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Subtle camera movement based on mouse position
        this.camera.position.x = this.mouse.x * 0.5;
        this.camera.position.y = this.mouse.y * 0.5;
        this.camera.lookAt(0, 0, 0);
    }
    
    // Click handler to advance states
    onClick() {
        this.clickTime = Date.now();
        
        // Transition between states
        switch(this.currentState) {
            case 'initial':
                // First click - disperse particles
                this.currentState = 'dispersed';
                setTimeout(() => {
                    // After dispersion, form text
                    this.currentState = 'text';
                    
                    // Update particle colors for text state
                    const colors = this.particleSystem.geometry.attributes.color;
                    
                    for (let i = 0; i < this.particleCount; i++) {
                        if (i < this.targetPositions.length) {
                            // Particles forming text get primary color
                            colors.array[i * 3] = this.colors.primary.r;
                            colors.array[i * 3 + 1] = this.colors.primary.g;
                            colors.array[i * 3 + 2] = this.colors.primary.b;
                        } else {
                            // Background particles get secondary color
                            colors.array[i * 3] = this.colors.secondary.r * 0.5;
                            colors.array[i * 3 + 1] = this.colors.secondary.g * 0.5;
                            colors.array[i * 3 + 2] = this.colors.secondary.b * 0.5;
                        }
                    }
                    colors.needsUpdate = true;
                }, 1500);
                break;
                
            case 'text':
                // Second click - start portal effect
                this.currentState = 'portal';
                this.overlay.style.opacity = '0';
                
                // Update material for portal effect
                this.particleSystem.material.size = 0.08;
                
                // Change colors for portal effect
                const colors = this.particleSystem.geometry.attributes.color;
                for (let i = 0; i < this.particleCount; i++) {
                    // Mix between accent and primary color
                    const mixFactor = Math.random();
                    colors.array[i * 3] = this.colors.accent.r * mixFactor + this.colors.primary.r * (1 - mixFactor);
                    colors.array[i * 3 + 1] = this.colors.accent.g * mixFactor + this.colors.primary.g * (1 - mixFactor);
                    colors.array[i * 3 + 2] = this.colors.accent.b * mixFactor + this.colors.primary.b * (1 - mixFactor);
                }
                colors.needsUpdate = true;
                break;
        }
    }
    
    // Transition to main portfolio page
    transitionToMainPage() {
        // Only transition once
        if (this.transitioning) return;
        this.transitioning = true;
        
        // Set flag to remember that user has seen the intro
        sessionStorage.setItem('hasSeenIntro', 'true');
        
        // Fade out particle container
        this.container.style.opacity = '0';
        
        // Show main content
        const mainContent = document.querySelector('.container');
        mainContent.classList.remove('hidden');
        
        // Initialize typing effect in footer
        this.initTypingEffect();
        
        // After transition completes, clean up resources
        setTimeout(() => {
            // Remove canvas to free resources
            this.container.style.display = 'none';
            
            // Dispose of Three.js resources
            this.particleSystem.geometry.dispose();
            this.particleSystem.material.dispose();
            this.scene.remove(this.particleSystem);
        }, 1000);
    }
    
    // Initialize the typing effect in footer
    initTypingEffect() {
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            const textToType = "Keval Solankure | Portfolio";
            let i = 0;
            
            function typeWriter() {
                if (i < textToType.length) {
                    typingText.textContent += textToType.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            // Start typing
            typeWriter();
        }
    }
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already seen the intro animation
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro') === 'true';
    
    if (hasSeenIntro) {
        // Skip intro animation and show main content immediately
        const particleContainer = document.getElementById('particle-container');
        const mainContent = document.querySelector('.container');
        
        if (particleContainer) {
            particleContainer.style.display = 'none';
        }
        
        if (mainContent) {
            mainContent.classList.remove('hidden');
            
            // Initialize typing effect in footer
            setTimeout(() => {
                const typingText = document.querySelector('.typing-text');
                if (typingText) {
                    const textToType = "Keval Solankure | Portfolio";
                    let i = 0;
                    
                    function typeWriter() {
                        if (i < textToType.length) {
                            typingText.textContent += textToType.charAt(i);
                            i++;
                            setTimeout(typeWriter, 100);
                        }
                    }
                    
                    // Start typing
                    typeWriter();
                }
            }, 500);
        }
    } else {
        // First time visit, show intro animation
        // Wait a moment for everything to load
        setTimeout(() => {
            new ParticleSystem();
        }, 500);
    }
});