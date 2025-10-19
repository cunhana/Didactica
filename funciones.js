// Global variables for state management
let vantaEffect = null;
let typedInstance = null;
let isScrolling = false;
const observedElements = new Set();

// DOM Content Loaded - NAVEGACIÓN CORREGIDA
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Inicializando aplicación con navegación corregida');
    initializeApp();
    
    // ASEGURAR que las cards de índice tengan event listeners
    setTimeout(() => {
        const indexCards = document.querySelectorAll('.index-card');
        console.log('Verificando cards de índice:', indexCards.length);
        
        indexCards.forEach((card, index) => {
            const targetId = card.getAttribute('data-target');
            console.log(`Card ${index}: target = ${targetId}`);
            
            if (!targetId) {
                console.error(`Card ${index} no tiene data-target!`);
            } else {
                const targetElement = document.getElementById(targetId);
                if (!targetElement) {
                    console.error(`No se encuentra el elemento con ID: ${targetId}`);
                } else {
                    console.log(`✓ Card ${index} -> ${targetId} CORRECTA`);
                }
            }
        });
    }, 2000);
});

// Main initialization function
function initializeApp() {
    initializeVantaBackground();
    initializeTypedText();
    initializeScrollAnimations();
    initializeNavigation();
    initializeBackToTop();
    initializeChart();
    
    // Add slight delay for better UX
    setTimeout(() => {
        initializeTimelineAnimations();
    }, 1000);
    
    // Initialize enhanced index card interactions IMMEDIATELY
    addRippleStyles();
    initializeIndexCardInteractions();
    
    console.log('Aplicación inicializada - Navegación corregida');
}

// Initialize Vanta.js background effect
function initializeVantaBackground() {
    const heroBackground = document.getElementById('heroBackground');
    
    if (heroBackground && window.VANTA && window.VANTA.NET) {
        try {
            vantaEffect = window.VANTA.NET({
                el: heroBackground,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: window.innerHeight,
                minWidth: window.innerWidth,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0x6366f1,
                backgroundColor: 0x0f0f23,
                points: 10,
                maxDistance: 20,
                spacing: 15
            });
        } catch (error) {
            console.log('Vanta.js could not be initialized:', error);
            // Fallback gradient background
            heroBackground.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)';
        }
    }
}

// Initialize typed text effect
function initializeTypedText() {
    const typedElement = document.getElementById('typedText');
    
    if (typedElement && window.Typed) {
        try {
            typedInstance = new window.Typed('#typedText', {
                strings: [
                    'Un viaje desde la Antigüedad hasta nuestros días...',
                    'Descubriendo cómo ha evolucionado la visión del niño...',
                    'Del "homúnculo" al sujeto de derechos...',
                    'Una historia fascinante de transformación social...'
                ],
                typeSpeed: 60,
                backSpeed: 30,
                backDelay: 2000,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        } catch (error) {
            console.log('Typed.js could not be initialized:', error);
            typedElement.textContent = 'Un viaje desde la Antigüedad hasta nuestros días...';
        }
    }
}

// Initialize scroll animations with Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !observedElements.has(entry.target)) {
                animateElement(entry.target);
                observedElements.add(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const elementsToObserve = [
        '.index-card',
        '.timeline-item',
        '.highlight-card',
        '.source-card',
        '.intro-content',
        '.chart-container'
    ];
    
    elementsToObserve.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });
    });
}

// Animate element function
function animateElement(element) {
    if (window.anime) {
        // Different animations based on element type
        if (element.classList.contains('timeline-item')) {
            const isLeft = element.classList.contains('left');
            
            anime({
                targets: element,
                opacity: [0, 1],
                translateX: isLeft ? [-50, 0] : [50, 0],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutExpo',
                delay: 200
            });
        } else if (element.classList.contains('index-card')) {
            anime({
                targets: element,
                opacity: [0, 1],
                translateY: [30, 0],
                scale: [0.9, 1],
                duration: 600,
                easing: 'easeOutBack',
                delay: anime.random(0, 300)
            });
        } else {
            // Default fade in animation
            anime({
                targets: element,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 600,
                easing: 'easeOutQuad'
            });
        }
    } else {
        // Fallback CSS animation
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'all 0.6s ease';
    }
}

// Initialize timeline specific animations
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
    });
}

// Navigation functions
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Update active nav link on scroll
    let currentSection = '';
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSection = entry.target.id;
                updateActiveNavLink(currentSection);
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px'
    });
    
    sections.forEach(section => {
        navObserver.observe(section);
    });
}

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.nav-header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        if (window.anime) {
            anime({
                targets: [document.documentElement, document.body],
                scrollTop: targetPosition,
                duration: 1000,
                easing: 'easeInOutQuad'
            });
        } else {
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Scroll to specific timeline item with enhanced navigation
function scrollToTimelineItem(periodNumber) {
    // El ID de la card en la timeline correspondiente
    const timelineCardId = `timeline-periodo-${periodNumber}`;
    const timelineItem = document.getElementById(timelineCardId);
    
    if (timelineItem) {
        const headerHeight = document.querySelector('.nav-header').offsetHeight || 100;
        // Center the item on screen with proper offset
        const targetPosition = timelineItem.offsetTop - headerHeight - (window.innerHeight / 2) + (timelineItem.offsetHeight / 2);
        
        // Add visual feedback to clicked index card
        const clickedCard = document.querySelector(`.index-card[data-period="${periodNumber}"]`);
        if (clickedCard) {
            clickedCard.style.transform = 'scale(0.95)';
            setTimeout(() => {
                clickedCard.style.transform = '';
            }, 150);
        }
        
        if (window.anime) {
            anime({
                targets: [document.documentElement, document.body],
                scrollTop: Math.max(0, targetPosition),
                duration: 1200,
                easing: 'easeInOutCubic',
                complete: function() {
                    // Highlight the timeline item after scroll completes
                    setTimeout(() => {
                        highlightTimelineItem(timelineItem);
                    }, 200);
                }
            });
        } else {
            // Fallback to native smooth scroll
            timelineItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            setTimeout(() => highlightTimelineItem(timelineItem), 1000);
        }
    } else {
        console.warn(`No se encontró el elemento timeline con ID: ${timelineCardId}`);
    }
}

// New navigation function using data-target system
function navigateToTimelinePeriod(targetId) {
    console.log('Navegando a:', targetId); // Debug
    
    const targetCard = document.getElementById(targetId);
    
    if (targetCard) {
        console.log('Target encontrado:', targetCard); // Debug
        
        // Calcular posición considerando el header fijo
        const headerHeight = 100;
        const elementPosition = targetCard.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        // Hacer scroll suave
        if (window.anime) {
            anime({
                targets: [document.documentElement, document.body],
                scrollTop: offsetPosition,
                duration: 1200,
                easing: 'easeInOutCubic',
                complete: function() {
                    // Añadir efecto visual de highlight
                    targetCard.classList.add('highlight-active');
                    
                    setTimeout(() => {
                        targetCard.classList.remove('highlight-active');
                    }, 2500);
                }
            });
        } else {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                // Añadir efecto visual de highlight
                targetCard.classList.add('highlight-active');
                
                setTimeout(() => {
                    targetCard.classList.remove('highlight-active');
                }, 2500);
            }, 1000);
        }
        
    } else {
        console.error('No se encontró el elemento con ID:', targetId);
    }
}

// Highlight timeline item with enhanced visual feedback
function highlightTimelineItem(item) {
    const card = item.querySelector('.timeline-card');
    if (card) {
        // Remove any existing highlight class
        card.classList.remove('highlight-pulse');
        
        // Force reflow to restart animation
        card.offsetHeight;
        
        // Add highlight pulse class
        card.classList.add('highlight-pulse');
        
        // Remove class after animation completes
        setTimeout(() => {
            card.classList.remove('highlight-pulse');
        }, 3000);
        
        // Additional anime.js animation if available
        if (window.anime) {
            anime({
                targets: card,
                scale: [1, 1.02, 1],
                duration: 400,
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop: 2
            });
        }
    }
}

// Update active navigation link
function updateActiveNavLink(currentSection) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize back to top button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', debounce(() => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, 100));
    }
}

// Scroll to top function
function scrollToTop() {
    if (window.anime) {
        anime({
            targets: [document.documentElement, document.body],
            scrollTop: 0,
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize interactive chart
function initializeChart() {
    if (window.Plotly) {
        createEvolutionChart();
    } else {
        console.log('Plotly.js not available for chart');
    }
}

// Create evolution chart
function createEvolutionChart() {
    const chartData = {
        periods: ['Antigüedad', 'Edad Media', 'Renacimiento', 'Ilustración', 'S. XIX', 'S. XX', 'S. XXI'],
        recognition: [30, 10, 40, 60, 70, 90, 95],
        rights: [20, 5, 25, 45, 50, 85, 98],
        education: [40, 20, 50, 70, 75, 90, 95]
    };
    
    const trace1 = {
        x: chartData.periods,
        y: chartData.recognition,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Reconocimiento de la Infancia',
        line: { color: '#6366f1', width: 3 },
        marker: { size: 8 }
    };
    
    const trace2 = {
        x: chartData.periods,
        y: chartData.rights,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Derechos del Niño',
        line: { color: '#8b5cf6', width: 3 },
        marker: { size: 8 }
    };
    
    const trace3 = {
        x: chartData.periods,
        y: chartData.education,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Acceso a Educación',
        line: { color: '#ec4899', width: 3 },
        marker: { size: 8 }
    };
    
    const layout = {
        title: {
            text: 'Evolución del Concepto de Infancia',
            font: { size: 20, family: 'Playfair Display' }
        },
        xaxis: {
            title: 'Períodos Históricos',
            showgrid: true
        },
        yaxis: {
            title: 'Nivel de Reconocimiento (%)',
            range: [0, 100],
            showgrid: true
        },
        plot_bgcolor: 'rgba(0,0,0,0)',
        paper_bgcolor: 'rgba(0,0,0,0)',
        font: { family: 'Inter' },
        showlegend: true,
        legend: {
            orientation: 'h',
            y: -0.2
        },
        margin: { t: 60, b: 80, l: 60, r: 40 },
        responsive: true
    };
    
    const config = {
        displayModeBar: false,
        responsive: true
    };
    
    try {
        window.Plotly.newPlot('evolutionChart', [trace1, trace2, trace3], layout, config);
    } catch (error) {
        console.log('Could not create chart:', error);
        document.getElementById('evolutionChart').innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">Gráfico no disponible</p>';
    }
}

// Utility function: Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    if (vantaEffect) {
        vantaEffect.resize();
    }
    
    if (window.Plotly) {
        window.Plotly.Plots.resize('evolutionChart');
    }
}, 250));

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden && vantaEffect) {
        // Pause animations when page is hidden
        vantaEffect.destroy();
        vantaEffect = null;
    } else if (!document.hidden && !vantaEffect) {
        // Resume animations when page becomes visible
        setTimeout(initializeVantaBackground, 100);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = ['hero', 'introduccion', 'indice', 'timeline', 'conclusiones', 'fuentes'];
    let currentSectionIndex = -1;
    
    // Find current section
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSectionIndex = index;
        }
    });
    
    // Navigate with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSectionIndex < sections.length - 1) {
            scrollToSection(sections[currentSectionIndex + 1]);
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSectionIndex > 0) {
            scrollToSection(sections[currentSectionIndex - 1]);
        }
    } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection('hero');
    } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection('fuentes');
    }
});

// Enhanced index card interactions with CORRECTED navigation
function initializeIndexCardInteractions() {
    const indexCards = document.querySelectorAll('.index-card');
    
    console.log('Cards de índice encontradas:', indexCards.length); // Debug
    
    indexCards.forEach((card) => {
        card.style.cursor = 'pointer'; // Asegurar cursor pointer
        
        card.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir cualquier comportamiento por defecto
            e.stopPropagation(); // Detener propagación
            
            // Obtener el ID del target desde el atributo data-target
            const targetId = card.getAttribute('data-target');
            
            console.log('Click en card, target:', targetId); // Debug
            
            if (targetId) {
                // Efecto ripple
                const ripple = document.createElement('div');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                    z-index: 1;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Navegación usando el nuevo sistema
                navigateToTimelinePeriod(targetId);
            } else {
                console.error('No se encontró data-target en la card');
            }
        });
        
        // Enhanced hover feedback
        card.addEventListener('mouseenter', function() {
            if (window.anime) {
                anime({
                    targets: this,
                    scale: 1.02,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (window.anime) {
                anime({
                    targets: this,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
}

// Add ripple animation to CSS dynamically
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add loading states
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    
    // Show elements with stagger animation
    const elementsToShow = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-btn');
    elementsToShow.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 200);
    });
    
    // Re-initialize enhanced interactions to ensure they work
    setTimeout(() => {
        initializeIndexCardInteractions();
        console.log('Interacciones de navegación re-inicializadas');
    }, 1000);
});

// Error handling
window.addEventListener('error', (e) => {
    console.log('JavaScript error caught:', e.error);
    // Graceful degradation - ensure basic functionality works
});

// Export functions for global access if needed
window.scrollToSection = scrollToSection;
window.scrollToTimelineItem = scrollToTimelineItem;
window.navigateToTimelinePeriod = navigateToTimelinePeriod;
window.scrollToTop = scrollToTop;

// Log initialization completion
console.log('Historia de la Infancia - Navegación CORREGIDA - Aplicación lista');