// ===================================
// Gothic Tarot Website - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavbar();
    initCursor();
    initWallwindIntro();
    initSmoothScroll();
    initAnimations();
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change menu button icon
            const isActive = navLinks.classList.contains('active');
            mobileMenuBtn.innerHTML = isActive ? '✕' : '☰';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !navLinks.contains(event.target)) {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '☰';
                }
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks) {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) {
                    mobileMenuBtn.innerHTML = '☰';
                }
            }
        });
    });
}

// ===================================
// CUSTOM CURSOR
// ===================================

function initCursor() {
    // Cursor customizado desativado para garantir compatibilidade de cliques
    console.log('Custom cursor disabled for better click compatibility');
}

// ===================================
// LOADING SCREEN - DEPRECATED
// ===================================

function initLoadingScreen() {
    // Legacy function - replaced by initWallwindIntro
    console.log('Loading screen replaced by Wallwind intro');
}

// ===================================
// WALLWIND INTRO ANIMATION
// ===================================

function initWallwindIntro() {
    const introScreen = document.getElementById('intro-screen');
    const windLinesContainer = document.getElementById('wind-lines');
    const particlesContainer = document.getElementById('intro-particles');
    
    if (!introScreen) return;

    // Configuration
    const config = {
        introDuration: 4500,      // Duration before fade out
        fadeOutDuration: 1500,    // Fade out animation duration
        batCount: 18,             // Number of bats
        windLineCount: 8,         // Number of wind lines
        particleCount: 20         // Number of floating particles
    };

    // Create wind lines
    function createWindLines() {
        if (!windLinesContainer) return;
        
        for (let i = 0; i < config.windLineCount; i++) {
            const line = document.createElement('div');
            line.className = 'wind-line';
            line.style.top = `${Math.random() * 100}%`;
            line.style.width = `${100 + Math.random() * 200}px`;
            line.style.animationDelay = `${Math.random() * 2}s`;
            line.style.animationDuration = `${1.5 + Math.random() * 1}s`;
            windLinesContainer.appendChild(line);
        }
    }

    // Create floating particles
    function createIntroParticles() {
        if (!particlesContainer) return;
        
        for (let i = 0; i < config.particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'intro-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 4}s`;
            particle.style.animationDuration = `${3 + Math.random() * 2}s`;
            particlesContainer.appendChild(particle);
        }
    }

    // Create bat SVG with glowing red eyes
    function createBatSVG() {
        return `
            <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <!-- Left Wing -->
                <g class="bat-wing-left">
                    <path d="M50 25 
                             Q40 20 30 10 
                             Q20 5 5 15 
                             Q10 20 15 25 
                             Q20 22 25 25 
                             Q30 28 35 25 
                             Q40 22 45 25"
                          fill="#000000"/>
                </g>
                <!-- Right Wing -->
                <g class="bat-wing-right">
                    <path d="M50 25 
                             Q60 20 70 10 
                             Q80 5 95 15 
                             Q90 20 85 25 
                             Q80 22 75 25 
                             Q70 28 65 25 
                             Q60 22 55 25"
                          fill="#000000"/>
                </g>
                <!-- Body -->
                <ellipse cx="50" cy="27" rx="8" ry="10" fill="#000000"/>
                <!-- Head -->
                <circle cx="50" cy="18" r="6" fill="#000000"/>
                <!-- Ears -->
                <path d="M45 14 L43 8 L47 12" fill="#000000"/>
                <path d="M55 14 L57 8 L53 12" fill="#000000"/>
                <!-- Glowing Red Eyes -->
                <defs>
                    <filter id="glow-${Math.random().toString(36).substr(2, 9)}" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1" result="blur"/>
                        <feMerge>
                            <feMergeNode in="blur"/>
                            <feMergeNode in="blur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <!-- Left Eye with Glow -->
                <circle cx="48" cy="17" r="1.5" fill="#ff0000" filter="url(#batEyeGlow)"/>
                <circle cx="48" cy="17" r="1" fill="#ff3333"/>
                <circle cx="48" cy="17" r="0.5" fill="#ffffff"/>
                <!-- Right Eye with Glow -->
                <circle cx="52" cy="17" r="1.5" fill="#ff0000" filter="url(#batEyeGlow)"/>
                <circle cx="52" cy="17" r="1" fill="#ff3333"/>
                <circle cx="52" cy="17" r="0.5" fill="#ffffff"/>
            </svg>
        `;
    }

    // Global SVG filter for eye glow (added once to document)
    const svgFilters = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgFilters.setAttribute('width', '0');
    svgFilters.setAttribute('height', '0');
    svgFilters.setAttribute('style', 'position: absolute;');
    svgFilters.innerHTML = `
        <defs>
            <filter id="batEyeGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                <feFlood flood-color="#ff0000" flood-opacity="1" result="flood"/>
                <feComposite in="flood" in2="blur" operator="in" result="glow"/>
                <feMerge>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
    `;
    document.body.appendChild(svgFilters);

    // Create bats container inside intro
    const batsContainer = document.createElement('div');
    batsContainer.className = 'bat-intro-container';
    batsContainer.style.zIndex = '20';
    introScreen.appendChild(batsContainer);

    // Flight patterns
    const flightTypes = ['fromBottom', 'fromLeft', 'fromRight', 'diagonal', 'spiral'];

    // Create individual bat
    function createBat(index) {
        const bat = document.createElement('div');
        bat.className = 'bat-creature';
        
        const size = 30 + Math.random() * 50;
        const flightType = flightTypes[Math.floor(Math.random() * flightTypes.length)];
        const animationDuration = 3 + Math.random() * 2;
        const delay = Math.random() * 1.5;
        
        bat.style.width = `${size}px`;
        bat.style.height = `${size * 0.5}px`;
        
        const rotation = -20 + Math.random() * 40;
        const driftX = -100 + Math.random() * 200;
        const driftY = -50 + Math.random() * 100;
        const startY = 10 + Math.random() * 80;
        
        switch(flightType) {
            case 'fromBottom':
                bat.style.left = `${5 + Math.random() * 90}%`;
                bat.style.bottom = '-100px';
                bat.style.setProperty('--drift-x', `${driftX}px`);
                bat.style.setProperty('--rotation', `${rotation}deg`);
                bat.style.animation = `batFlyFromBottom ${animationDuration}s ease-out ${delay}s forwards`;
                break;
                
            case 'fromLeft':
                bat.style.left = '-100px';
                bat.style.top = `${startY}vh`;
                bat.style.setProperty('--start-y', `${startY}vh`);
                bat.style.setProperty('--drift-y', `${driftY}px`);
                bat.style.setProperty('--rotation', `${-15 + Math.random() * 10}deg`);
                bat.style.animation = `batFlyFromLeft ${animationDuration}s ease-in-out ${delay}s forwards`;
                break;
                
            case 'fromRight':
                bat.style.right = '-100px';
                bat.style.top = `${startY}vh`;
                bat.style.setProperty('--start-y', `${startY}vh`);
                bat.style.setProperty('--drift-y', `${driftY}px`);
                bat.style.setProperty('--rotation', `${15 - Math.random() * 10}deg`);
                bat.style.animation = `batFlyFromRight ${animationDuration}s ease-in-out ${delay}s forwards`;
                break;
                
            case 'diagonal':
                bat.style.left = '-100px';
                bat.style.bottom = '-100px';
                bat.style.animation = `batFlyDiagonal ${animationDuration + 1}s ease-out ${delay}s forwards`;
                break;
                
            case 'spiral':
                bat.style.left = `${40 + Math.random() * 20}%`;
                bat.style.top = `${40 + Math.random() * 20}%`;
                bat.style.animation = `batSpiral ${animationDuration + 1}s ease-out ${delay}s forwards`;
                break;
        }
        
        bat.innerHTML = createBatSVG();
        
        // Random wing flap speed
        const wingSpeed = 0.1 + Math.random() * 0.1;
        const leftWing = bat.querySelector('.bat-wing-left');
        const rightWing = bat.querySelector('.bat-wing-right');
        if (leftWing) leftWing.style.animationDuration = `${wingSpeed}s`;
        if (rightWing) rightWing.style.animationDuration = `${wingSpeed}s`;
        
        return bat;
    }

    // Add spiral animation to CSS dynamically
    const spiralStyle = document.createElement('style');
    spiralStyle.textContent = `
        @keyframes batSpiral {
            0% {
                opacity: 0;
                transform: translate(-150px, 100px) rotate(0deg) scale(0.5);
            }
            20% {
                opacity: 1;
            }
            80% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translate(150px, -200px) rotate(720deg) scale(1);
            }
        }
    `;
    document.head.appendChild(spiralStyle);

    // Initialize intro effects
    createWindLines();
    createIntroParticles();

    // Create bats with staggered timing
    for (let i = 0; i < config.batCount; i++) {
        setTimeout(() => {
            const bat = createBat(i);
            batsContainer.appendChild(bat);
        }, 200 + i * 100); // Stagger bat creation
    }

    // Fade out intro and show main content
    setTimeout(() => {
        introScreen.classList.add('fade-out');
        
        // Remove intro from DOM after fade
        setTimeout(() => {
            if (introScreen && introScreen.parentNode) {
                introScreen.parentNode.removeChild(introScreen);
            }
        }, config.fadeOutDuration);
    }, config.introDuration);

    console.log('🦇 Wallwind intro initialized with glowing-eyed bats');
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===================================
// ANIMATIONS ON SCROLL
// ===================================

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe cards and steps
    document.querySelectorAll('.service-card, .step, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// PARTICLES CONFIGURATION
// ===================================

if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        'particles': {
            'number': {
                'value': 50,
                'density': {
                    'enable': true,
                    'value_area': 800
                }
            },
            'color': {
                'value': '#4a0a0a'
            },
            'shape': {
                'type': 'circle'
            },
            'opacity': {
                'value': 0.3,
                'random': true,
                'anim': {
                    'enable': true,
                    'speed': 1,
                    'opacity_min': 0.1,
                    'sync': false
                }
            },
            'size': {
                'value': 3,
                'random': true,
                'anim': {
                    'enable': true,
                    'speed': 2,
                    'size_min': 0.1,
                    'sync': false
                }
            },
            'line_linked': {
                'enable': true,
                'distance': 150,
                'color': '#4a0a0a',
                'opacity': 0.2,
                'width': 1
            },
            'move': {
                'enable': true,
                'speed': 1,
                'direction': 'none',
                'random': true,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                    'enable': false,
                    'rotateX': 600,
                    'rotateY': 1200
                }
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': false,
                    'mode': 'grab'
                },
                'onclick': {
                    'enable': false,
                    'mode': 'push'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 140,
                    'line_linked': {
                        'opacity': 0.5
                    }
                },
                'push': {
                    'particles_nb': 4
                }
            }
        },
        'retina_detect': true
    });
}

// ===================================
// SOUND CONTROL (OPTIONAL)
// ===================================

let ambientSound = null;
let soundEnabled = false;

function toggleSound() {
    const soundBtn = document.querySelector('.sound-toggle');

    if (soundEnabled) {
        if (ambientSound) {
            ambientSound.pause();
        }
        soundEnabled = false;
        soundBtn.textContent = '🔇';
    } else {
        // Note: Add your ambient sound file path here
        // ambientSound = new Audio('path/to/ambient-sound.mp3');
        // ambientSound.loop = true;
        // ambientSound.play();
        soundEnabled = true;
        soundBtn.textContent = '🔊';
    }
}

// ===================================
// ADDITIONAL ANIMATIONS
// ===================================

// Add fade-in animation to elements
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .service-card, .step, .contact-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .service-card.animate, .step.animate, .contact-item.animate {
        opacity: 1;
        transform: translateY(0);
    }

    section {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s ease;
    }

    section.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(styleSheet);

// ===================================
// FLOATING ELEMENT ANIMATIONS
// ===================================

function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.floating-element');

    floatingElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });
}

// Initialize floating animations
addFloatingAnimation();

// ===================================
// PARALLAX EFFECT
// ===================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// SERVICE CARD CLICK TRACKING
// ===================================

// Removido listener que poderia interferir no redirecionamento nativo do navegador
// A animação de clique pode ser feita via CSS :active para evitar JS desnecessário

// ===================================
// MOBILE OPTIMIZATIONS
// ===================================

if (window.innerWidth <= 768) {
    // Disable custom cursor on mobile
    document.body.style.cursor = 'auto';

    // Optimize animations for mobile
    document.querySelectorAll('.bat, .spider').forEach(el => {
        el.style.animationDuration = '25s';
    });
}

// ===================================
// PRELOAD CRITICAL IMAGES
// ===================================

function preloadImages() {
    const imagesToPreload = [
        'images/sayuki-placeholder.jpg',
        'images/feedback-1.jpg',
        'images/feedback-2.jpg'
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload images
preloadImages();

// ===================================
// HANDLE WINDOW RESIZE
// ===================================

let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Re-initialize cursor for desktop/mobile switch
        const cursor = document.querySelector('.cursor');
        const cursorDot = document.querySelector('.cursor-dot');

        if (window.innerWidth > 768) {
            if (cursor) cursor.style.display = 'block';
            if (cursorDot) cursorDot.style.display = 'block';
        } else {
            if (cursor) cursor.style.display = 'none';
            if (cursorDot) cursorDot.style.display = 'none';
            document.body.style.cursor = 'auto';
        }
    }, 250);
});

console.log('🔮 Sayuki Tarot Website initialized');


// ===================================
// FLOATING PENTAGRAM DECORATIONS
// ===================================

function initFloatingPentagrams() {
    const body = document.body;
    
    // Create floating pentagram elements
    const pentagramSymbols = ['✡', '✡', '✡'];
    
    pentagramSymbols.forEach((symbol, index) => {
        const pentagram = document.createElement('div');
        pentagram.className = 'floating-pentagram';
        pentagram.textContent = symbol;
        pentagram.style.position = 'fixed';
        pentagram.style.opacity = '0.08';
        pentagram.style.pointerEvents = 'none';
        pentagram.style.zIndex = '0';
        pentagram.style.fontSize = (60 + index * 20) + 'px';
        pentagram.style.animation = `float ${6 + index * 2}s ease-in-out infinite`;
        
        if (index === 0) {
            pentagram.style.top = '10%';
            pentagram.style.left = '5%';
        } else if (index === 1) {
            pentagram.style.top = '60%';
            pentagram.style.right = '10%';
        } else {
            pentagram.style.bottom = '20%';
            pentagram.style.left = '15%';
        }
        
        body.appendChild(pentagram);
    });
}

// Initialize floating pentagrams
initFloatingPentagrams();

// ===================================
// DARK VIGNETTE EFFECT
// ===================================

function initDarkVignette() {
    const vignette = document.createElement('div');
    vignette.className = 'dark-vignette';
    vignette.style.position = 'fixed';
    vignette.style.top = '0';
    vignette.style.left = '0';
    vignette.style.width = '100%';
    vignette.style.height = '100%';
    vignette.style.background = 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)';
    vignette.style.pointerEvents = 'none';
    vignette.style.zIndex = '-1';
    document.body.appendChild(vignette);
}

// Initialize dark vignette
initDarkVignette();

// ===================================
// EERIE FOG EFFECT
// ===================================

function initEerieFog() {
    const fog = document.createElement('div');
    fog.className = 'eerie-fog';
    fog.style.position = 'fixed';
    fog.style.top = '0';
    fog.style.left = '0';
    fog.style.width = '100%';
    fog.style.height = '100%';
    fog.style.background = 'radial-gradient(ellipse at 20% 30%, rgba(74, 10, 10, 0.08) 0%, transparent 40%), radial-gradient(ellipse at 80% 70%, rgba(74, 10, 10, 0.08) 0%, transparent 40%)';
    fog.style.animation = 'eerieMove 15s ease-in-out infinite';
    fog.style.pointerEvents = 'none';
    fog.style.zIndex = '0';
    document.body.appendChild(fog);
}

// Initialize eerie fog
initEerieFog();

// ===================================
// MYSTICAL GLOW EFFECT ON HOVER
// ===================================

function initMysticalHover() {
    const cards = document.querySelectorAll('.service-card, .feedback-card, .step');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(102, 0, 0, 0.6), 0 0 60px rgba(102, 0, 0, 0.3)';
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            this.style.transform = '';
        });
    });
}

// Initialize mystical hover
initMysticalHover();

// ===================================
// PENTAGRAM ANIMATION ON SCROLL
// ===================================

function initPentagramScroll() {
    const pentagrams = document.querySelectorAll('.pentagram');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        pentagrams.forEach((pentagram, index) => {
            const speed = 0.5 + (index * 0.1);
            pentagram.style.transform = `rotate(${scrolled * speed}deg)`;
        });
    });
}

// Initialize pentagram scroll animation
initPentagramScroll();

// ===================================
// ENHANCED DARK EFFECTS
// ===================================

function enhanceDarkEffects() {
    // Add dark accent class to important elements
    const titles = document.querySelectorAll('h2, h3');
    titles.forEach(title => {
        title.classList.add('glow-text');
    });
    
    // Add mystical borders to cards
    const cards = document.querySelectorAll('.service-card, .feedback-card');
    cards.forEach(card => {
        card.style.borderTop = '3px solid rgba(102, 0, 0, 0.6)';
        card.style.borderBottom = '3px solid rgba(102, 0, 0, 0.3)';
    });
}

// Enhance dark effects
enhanceDarkEffects();

// ===================================
// MYSTICAL PARTICLE EFFECTS
// ===================================

function createMysticalParticles() {
    const container = document.querySelector('.hero');
    
    if (!container) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(102, 0, 0, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in infinite`;
        particle.style.pointerEvents = 'none';
        
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 7000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 500);
}

// Initialize mystical particles
createMysticalParticles();

console.log('🔮 Enhanced dark effects and mystical animations initialized');

