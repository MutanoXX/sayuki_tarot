// ===================================
// Gothic Tarot Website - Main JavaScript (OPTIMIZED WITH BATS)
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
// WALLWIND INTRO ANIMATION - OPTIMIZED WITH BATS
// ===================================

function initWallwindIntro() {
    const introScreen = document.getElementById('intro-screen');
    const windLinesContainer = document.getElementById('wind-lines');
    const particlesContainer = document.getElementById('intro-particles');
    
    if (!introScreen) return;

    // Configuration - OPTIMIZED FOR PERFORMANCE
    const config = {
        introDuration: 4500,
        fadeOutDuration: 1500,
        batCount: 8,              // Increased from 6 for better visual effect
        windLineCount: 4,
        particleCount: 8
    };

    // Create wind lines - OPTIMIZED
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

    // Create floating particles - OPTIMIZED
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

    // Create bat SVG with glowing red eyes - OPTIMIZED
    function createBatSVG() {
        return `
            <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <!-- Left Wing -->
                <g class="bat-wing-left">
                    <path d="M50 25 Q40 20 30 10 Q20 5 5 15 Q10 20 15 25 Q20 22 25 25 Q30 28 35 25 Q40 22 45 25" fill="#000000"/>
                </g>
                <!-- Right Wing -->
                <g class="bat-wing-right">
                    <path d="M50 25 Q60 20 70 10 Q80 5 95 15 Q90 20 85 25 Q80 22 75 25 Q70 28 65 25 Q60 22 55 25" fill="#000000"/>
                </g>
                <!-- Body -->
                <ellipse cx="50" cy="27" rx="8" ry="10" fill="#000000"/>
                <!-- Head -->
                <circle cx="50" cy="18" r="6" fill="#000000"/>
                <!-- Ears -->
                <path d="M45 14 L43 8 L47 12" fill="#000000"/>
                <path d="M55 14 L57 8 L53 12" fill="#000000"/>
                <!-- Glowing Red Eyes with CSS-based glow -->
                <circle cx="48" cy="17" r="2" fill="#ff0000" class="bat-eye-glow"/>
                <circle cx="48" cy="17" r="1.2" fill="#ff3333"/>
                <circle cx="48" cy="17" r="0.5" fill="#ffffff"/>
                <circle cx="52" cy="17" r="2" fill="#ff0000" class="bat-eye-glow"/>
                <circle cx="52" cy="17" r="1.2" fill="#ff3333"/>
                <circle cx="52" cy="17" r="0.5" fill="#ffffff"/>
            </svg>
        `;
    }

    // Add global SVG styles for eye glow
    const svgStyle = document.createElement('style');
    svgStyle.textContent = `
        .bat-eye-glow {
            filter: drop-shadow(0 0 2px #ff0000) drop-shadow(0 0 4px #ff0000);
            opacity: 0.9;
        }
    `;
    document.head.appendChild(svgStyle);

    // Create bats container
    const batsContainer = document.createElement('div');
    batsContainer.className = 'bat-intro-container';
    batsContainer.style.zIndex = '20';
    introScreen.appendChild(batsContainer);

    // Flight patterns
    const flightTypes = ['fromBottom', 'fromLeft', 'fromRight', 'diagonal'];

    // Create individual bat - WITH WINGS AND GLOWING EYES
    function createBat(index) {
        const bat = document.createElement('div');
        bat.className = 'bat-creature';
        
        const size = 35 + Math.random() * 45;
        const flightType = flightTypes[Math.floor(Math.random() * flightTypes.length)];
        const animationDuration = 3.5 + Math.random() * 1.5;
        const delay = Math.random() * 1.2;
        
        bat.style.width = `${size}px`;
        bat.style.height = `${size * 0.5}px`;
        bat.style.willChange = 'transform, opacity';
        
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
                bat.style.left = `${Math.random() * 100}%`;
                bat.style.top = `${Math.random() * 100}%`;
                bat.style.animation = `batFlyDiagonal ${animationDuration + 1}s ease-out ${delay}s forwards`;
                break;
        }
        
        bat.innerHTML = createBatSVG();
        
        // Wing flap animation - optimized
        const wingSpeed = 0.12 + Math.random() * 0.08;
        const leftWing = bat.querySelector('.bat-wing-left');
        const rightWing = bat.querySelector('.bat-wing-right');
        if (leftWing) {
            leftWing.style.transformOrigin = 'right center';
            leftWing.style.animation = `wingFlap ${wingSpeed}s ease-in-out infinite`;
        }
        if (rightWing) {
            rightWing.style.transformOrigin = 'left center';
            rightWing.style.animation = `wingFlap ${wingSpeed}s ease-in-out infinite`;
            rightWing.style.animationDelay = `${wingSpeed * 0.5}s`;
        }
        
        return bat;
    }

    // Initialize intro effects
    createWindLines();
    createIntroParticles();

    // Create bats with staggered timing
    for (let i = 0; i < config.batCount; i++) {
        setTimeout(() => {
            const bat = createBat(i);
            batsContainer.appendChild(bat);
        }, 250 + i * 120);
    }

    // Play intro sound
    playIntroSound();

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

    console.log('🦇 Optimized Wallwind intro initialized with glowing-eyed bats');
}

// ===================================
// INTRO SOUND EFFECT
// ===================================

function playIntroSound() {
    try {
        const audio = new Audio('audio/intro-wind.mp3');
        audio.volume = 0.4; // 40% volume
        audio.play().catch(err => {
            console.log('Audio playback failed (may be due to autoplay policy):', err);
        });
    } catch (err) {
        console.log('Audio initialization failed:', err);
    }
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
// ANIMATIONS
// ===================================

function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.service-card, .step, .contact-item, section').forEach(el => {
        observer.observe(el);
    });
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
// MOBILE OPTIMIZATIONS
// ===================================

if (window.innerWidth <= 768) {
    // Disable custom cursor on mobile
    document.body.style.cursor = 'auto';
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
        if (window.innerWidth > 768) {
            document.body.style.cursor = 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text y="20" font-size="20">✝</text></svg>\'), auto';
        } else {
            document.body.style.cursor = 'auto';
        }
    }, 250);
});

console.log('🔮 Sayuki Tarot Website initialized (OPTIMIZED WITH BATS)');

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

console.log('🔮 Enhanced dark effects and mystical animations initialized');
