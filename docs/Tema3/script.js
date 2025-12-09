// script.js - JavaScript Interactivo
// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Menú hamburguesa móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Acordeón interactivo
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        // Cerrar otros acordeones
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.classList.remove('active');
                item.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
        
        // Toggle actual
        content.classList.toggle('active');
        icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

// Modal Autoevaluación
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer click fuera
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// Autoevaluación Quiz
function checkQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'c') {
        alert('¡Correcto! 🎉 El diseño curricular es orientador Y normativo.');
    } else {
        alert('Sigue estudiando 📚. Pista: tiene carácter ORIENTADOR y NORMATIVO.');
    }
}

// Scroll suave a secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Animaciones al scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos animados
document.querySelectorAll('.animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    observer.observe(el);
});

// Partículas de fondo interactivas
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, ${Math.random() > 0.5 ? '#FF6B6B' : '#4ECDC4'}, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 999;
        left: ${x}px;
        top: ${y}px;
        animation: particleFloat 3s ease-out forwards;
    `;
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

const particleAnim = `
@keyframes particleFloat {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100px) scale(0); opacity: 0; }
}`;

if (!document.querySelector('#particle-style')) {
    const style = document.createElement('style');
    style.id = 'particle-style';
    style.textContent = particleAnim;
    document.head.appendChild(style);
}

// Efecto partículas en botones
document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        createParticle(e.clientX, e.clientY);
    });
});

// Progreso de lectura (barra superior)
let scrollProgress = 0;
window.addEventListener('scroll', () => {
    scrollProgress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
});
