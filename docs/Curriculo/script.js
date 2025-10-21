// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar todos los elementos con clases de animación
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-zoom-in'
    );

    animatedElements.forEach(el => observer.observe(el));

    // Inicializar acordeones
    initAccordions();

    // Smooth scroll para links de navegación
    initSmoothScroll();

    // Añadir efecto de escritura al título
    typeWriterEffect();

    // Confetti en carga (opcional)
    // createConfetti();
});

// ========================================
// ACORDEONES
// ========================================
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            // Cerrar otros acordeones
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                }
            });

            // Toggle el acordeón actual
            content.classList.toggle('active');

            // Rotar icono
            if (icon) {
                icon.style.transform = content.classList.contains('active') 
                    ? 'rotate(180deg)' 
                    : 'rotate(0deg)';
            }
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// EFECTO DE ESCRITURA PARA TÍTULOS
// ========================================
function typeWriterEffect() {
    const titleElement = document.querySelector('.typewriter-text');
    if (!titleElement) return;

    const text = titleElement.textContent;
    titleElement.textContent = '';
    titleElement.style.visibility = 'visible';

    let i = 0;
    const speed = 100;

    function type() {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ========================================
// NAVEGACIÓN STICKY CON EFECTO
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
    }
});

// ========================================
// BOTÓN VOLVER ARRIBA
// ========================================
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '⬆️';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #FF9ECE, #FFAAA5);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 158, 206, 0.4);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1) rotate(360deg)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Llamar la función cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBackToTopButton);
} else {
    createBackToTopButton();
}

// ========================================
// CONFETTI EFFECT (opcional para celebraciones)
// ========================================
function createConfetti() {
    const colors = ['#FF9ECE', '#A8E6CF', '#FFD3B6', '#B4D7FF', '#FFAAA5', '#DCD6F7'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random()};
            transform: rotate(${Math.random() * 360}deg);
            animation: confettiFall ${3 + Math.random() * 2}s linear;
            z-index: 9999;
            pointer-events: none;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

// Añadir keyframes para confetti dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            top: 100vh;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// DESTACAR NAVEGACIÓN ACTIVA
// ========================================
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

highlightActiveNav();

// ========================================
// TOOLTIP PERSONALIZADO
// ========================================
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = element.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(74, 74, 74, 0.95);
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 14px;
                z-index: 10000;
                pointer-events: none;
                white-space: nowrap;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            `;

            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;

            element.tooltipElement = tooltip;
        });

        element.addEventListener('mouseleave', () => {
            if (element.tooltipElement) {
                element.tooltipElement.remove();
                element.tooltipElement = null;
            }
        });
    });
}

initTooltips();

// ========================================
// ANIMACIÓN DE NÚMEROS (para estadísticas)
// ========================================
function animateNumber(element, start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// Usar con elementos que tengan la clase 'animate-number' y atributo 'data-value'
document.querySelectorAll('.animate-number').forEach(el => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const value = parseInt(el.getAttribute('data-value'));
                animateNumber(el, 0, value, 2000);
                observer.unobserve(el);
            }
        });
    });
    observer.observe(el);
});

// ========================================
// BUSCAR Y RESALTAR TEXTO
// ========================================
function initSearch() {
    const searchInput = document.querySelector('#search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const contentSections = document.querySelectorAll('.content-section');

        contentSections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(searchTerm) || searchTerm === '') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
}

initSearch();

// ========================================
// DARK MODE TOGGLE (opcional)
// ========================================
function initDarkMode() {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (!darkModeToggle) return;

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
    });
}

initDarkMode();

console.log('🎨 Sitio web cargado con éxito!');
