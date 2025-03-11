document.addEventListener('DOMContentLoaded', function() {
    // Animation system for projects page
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
    
    // Projects filtering functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.querySelector('.search-input');
    const noResultsMessage = document.querySelector('.no-results');
    
    // Handle filter button clicks
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get the filter value
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter the projects
            filterProjects(filterValue, searchInput.value);
        });
    });
    
    // Handle search input
    searchInput.addEventListener('input', () => {
        // Get the current filter
        const currentFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        
        // Filter the projects
        filterProjects(currentFilter, searchInput.value);
    });
    
    // Function to filter projects
    function filterProjects(category, searchTerm = '') {
        let visibleCount = 0;
        
        // Convert search term to lowercase for case-insensitive comparison
        searchTerm = searchTerm.toLowerCase();
        
        projectCards.forEach(card => {
            // Get card categories and content
            const cardCategories = card.getAttribute('data-category');
            const cardTitle = card.querySelector('.project-title').textContent.toLowerCase();
            const cardDescription = card.querySelector('.project-description').textContent.toLowerCase();
            const cardTags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            // Check if card matches both category and search term
            const matchesCategory = category === 'all' || cardCategories.includes(category);
            const matchesSearch = searchTerm === '' || 
                                 cardTitle.includes(searchTerm) || 
                                 cardDescription.includes(searchTerm) || 
                                 cardTags.some(tag => tag.includes(searchTerm));
            
            // Show or hide the card
            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
                visibleCount++;
                
                // Reset animation
                card.classList.remove(card.dataset.animation);
                setTimeout(() => {
                    card.classList.add(card.dataset.animation);
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show or hide no results message
        if (visibleCount === 0) {
            noResultsMessage.classList.remove('hidden');
        } else {
            noResultsMessage.classList.add('hidden');
        }
    }
    
    // Project modal functionality
    const projectLinks = document.querySelectorAll('.project-link');
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');
    
    // Open modal when project is clicked
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get project data
            const card = this.closest('.project-card');
            const projectTitle = card.querySelector('.project-title').textContent;
            const projectDescription = card.querySelector('.project-description').textContent;
            const projectImage = card.querySelector('.project-image img').getAttribute('src');
            const projectTags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);
            
            // Populate modal content
            modalBody.innerHTML = `
                <div class="modal-header">
                    <h2 class="modal-title">${projectTitle}</h2>
                </div>
                <div class="modal-image">
                    <img src="${projectImage}" alt="${projectTitle}">
                </div>
                <div class="modal-details">
                    <div class="modal-description">
                        <h3>Project Description</h3>
                        <p>${projectDescription}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel tincidunt luctus, nunc nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, velit vel tincidunt luctus, nunc nisl aliquam nisl, eu aliquam nisl nisl eu nisl.</p>
                    </div>
                    <div class="modal-technologies">
                        <h3>Technologies Used</h3>
                        <div class="modal-tags">
                            ${projectTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="modal-buttons">
                        <a href="#" class="modal-btn primary">View Live Demo <i class="fas fa-external-link-alt"></i></a>
                        <a href="#" class="modal-btn secondary">View Source Code <i class="fab fa-github"></i></a>
                    </div>
                </div>
            `;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when close button is clicked
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Enhanced parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Apply parallax effect to project cards with staggered effect
        document.querySelectorAll('.project-card').forEach((card, index) => {
            const speed = 0.02 + (index % 3 * 0.005);
            const yPos = -scrollPosition * speed;
            card.style.transform = `translateY(${yPos}px)`;
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
    
    // Create custom cursor elements for the projects page
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
        
        // Random color variations - focusing on the project theme colors
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
    const interactiveElements = document.querySelectorAll('a, button, .filter-btn, .project-card, .home-link');
    
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
    
    // Add modal animation style
    const style = document.createElement('style');
    style.textContent = `
        .modal-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        .modal-btn {
            padding: 0.8rem 1.5rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: var(--transition);
        }
        
        .modal-btn.primary {
            background: var(--primary);
            color: white;
        }
        
        .modal-btn.secondary {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text);
            border: 1px solid var(--glass);
        }
        
        .modal-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .modal-btn.primary:hover {
            background: var(--secondary);
        }
        
        .modal-btn.secondary:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .modal-image {
            margin-bottom: 2rem;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .modal-image img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .modal-title {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: var(--secondary);
        }
        
        .modal-technologies {
            margin-top: 2rem;
        }
        
        .modal-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
    `;
    document.head.appendChild(style);
});
