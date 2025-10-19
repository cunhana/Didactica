// Funciones adicionales para mejorar la experiencia visual

// Efecto de máquina de escribir mejorado
class TypewriterEffect {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.currentText = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.options = {
            typeSpeed: options.typeSpeed || 100,
            deleteSpeed: options.deleteSpeed || 50,
            pauseTime: options.pauseTime || 2000,
            ...options
        };
        this.type();
    }

    type() {
        const current = this.currentText % this.texts.length;
        const fullText = this.texts[current];
        
        if (this.isDeleting) {
            this.element.textContent = fullText.substring(0, this.currentChar - 1);
            this.currentChar--;
        } else {
            this.element.textContent = fullText.substring(0, this.currentChar + 1);
            this.currentChar++;
        }

        let typeSpeed = this.options.typeSpeed;
        if (this.isDeleting) {
            typeSpeed = this.options.deleteSpeed;
        }

        if (!this.isDeleting && this.currentChar === fullText.length) {
            typeSpeed = this.options.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentText++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Efecto de partículas flotantes
function createParticleSystem() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.3';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
        };
    }
    
    function initParticles() {
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }
    
    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        });
    }
    
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            ctx.save();
            ctx.globalAlpha = particle.opacity;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
    }
    
    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    initParticles();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
}

// Efecto de onda de texto
function createWaveEffect(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.display = 'inline-block';
        span.style.animationDelay = `${i * 0.1}s`;
        span.classList.add('wave-letter');
        element.appendChild(span);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        .wave-letter {
            animation: wave 2s ease-in-out infinite;
        }
        
        @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
}

// Efecto de glitch para títulos
function createGlitchEffect(element) {
    element.addEventListener('mouseenter', () => {
        element.style.animation = 'glitch 0.3s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `;
    document.head.appendChild(style);
}

// Efecto de resaltado de texto al hacer scroll
function highlightOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target;
                text.style.background = 'linear-gradient(90deg, transparent, #667eea, transparent)';
                text.style.backgroundSize = '200% 100%';
                text.style.animation = 'highlight 2s ease-in-out';
                
                setTimeout(() => {
                    text.style.background = '';
                    text.style.animation = '';
                }, 2000);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('h3, .timeline-content p').forEach(el => {
        observer.observe(el);
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes highlight {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
    `;
    document.head.appendChild(style);
}

// Efecto de máquina de contador
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    let timer;
    
    function run() {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - (remaining * range));
        element.textContent = value;
        
        if (value === end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}

// Efecto de aparición escalonada
function staggeredFadeIn(elements, delay = 100) {
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

// Efecto de rotación 3D en cards
function add3DRotation() {
    const cards = document.querySelectorAll('.timeline-content');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Efecto de aurora en el fondo
function createAuroraEffect() {
    const aurora = document.createElement('div');
    aurora.className = 'aurora';
    aurora.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, 
            rgba(102, 126, 234, 0.1) 0%,
            rgba(118, 75, 162, 0.1) 25%,
            rgba(240, 147, 251, 0.1) 50%,
            rgba(245, 87, 108, 0.1) 75%,
            rgba(102, 126, 234, 0.1) 100%);
        background-size: 400% 400%;
        animation: aurora 8s ease-in-out infinite;
        pointer-events: none;
        z-index: 0;
    `;
    
    document.body.appendChild(aurora);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes aurora {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
    `;
    document.head.appendChild(style);
}

// Inicializar todos los efectos
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar efectos a elementos específicos
    const titleElement = document.querySelector('.hero-title');
    if (titleElement) {
        createWaveEffect(titleElement);
    }
    
    // Aplicar efecto glitch a títulos
    document.querySelectorAll('h2, h3').forEach(createGlitchEffect);
    
    // Inicializar efectos adicionales
    highlightOnScroll();
    add3DRotation();
    createAuroraEffect();
    
    // Animar contadores si existen
    document.querySelectorAll('.counter').forEach(counter => {
        const target = parseInt(counter.dataset.target);
        animateCounter(counter, 0, target, 2000);
    });
    
    // Efecto de partículas (comentado por defecto para no sobrecargar)
    // createParticleSystem();
});

// Exportar funciones para uso externo
window.CustomEffects = {
    TypewriterEffect,
    createParticleSystem,
    createWaveEffect,
    createGlitchEffect,
    highlightOnScroll,
    animateCounter,
    staggeredFadeIn,
    add3DRotation,
    createAuroraEffect
};
