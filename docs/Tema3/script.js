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

// quiz-script.js - JAVASCRIPT COMPLETO PARA QUIZZES
let quizData = {
    concepto: [
        {
            question: "¿Qué define la LOE como currículo?",
            options: ["Solo objetivos y contenidos", "Objetivos, competencias, contenidos, métodos y evaluación", "Únicamente la programación de aula", "El ROF del centro"],
            correct: 1,
            explanation: "El currículo es el conjunto de <strong>objetivos, competencias básicas, contenidos, métodos pedagógicos y criterios de evaluación</strong> [file:1]"
        },
        {
            question: "¿Cuál es una dimensión del currículo?",
            options: ["Solo técnica", "Social y cultural", "Económica", "Político-partidista"],
            correct: 1,
            explanation: "Dimensiones: <strong>social/cultural</strong> (valores sociedad) y <strong>técnica</strong> (guía docente)"
        }
        // ... 13 preguntas más
    ],
    niveles: [
        {
            question: "¿Cuántos niveles de concreción curricular?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "Tres niveles: I-Diseño Base, II-Propuesta Pedagógica, III-Programación Aula [file:1]"
        }
    ],
    documentos: [
        {
            question: "¿Qué vigencia tiene el PEC?",
            options: ["Corto plazo", "Medio plazo", "Medio y largo plazo", "Anual"],
            correct: 2,
            explanation: "Proyecto Educativo de Centro tiene vigencia <strong>medio y largo plazo</strong>"
        }
    ]
};

let currentQuiz = '';
let currentQuestion = 0;
let scores = { concepto: 0, niveles: 0, documentos: 0 };
let totalQuestions = 0;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initDragDrop();
    updateStats();
});

// Empezar quiz
function startQuiz(quizType) {
    currentQuiz = quizType === 'all' ? 'concepto' : quizType;
    currentQuestion = 0;
    loadQuestion();
    document.querySelector('.quiz-hero').scrollIntoView({ behavior: 'smooth' });
}

// Cargar pregunta
function loadQuestion() {
    const questions = quizData[currentQuiz];
    if (currentQuestion >= questions.length) {
        showResults(currentQuiz);
        return;
    }
    
    const q = questions[currentQuestion];
    const card = document.querySelector(`[data-quiz="${currentQuiz}"] .question-card`);
    
    card.querySelector('.question-header h3').textContent = q.question;
    const options = card.querySelectorAll('.option-card');
    options.forEach((opt, i) => {
        opt.querySelector('input').name = `q${currentQuestion}_${currentQuiz}`;
        opt.querySelector('input').value = String(i);
        opt.querySelector('p').textContent = q.options[i];
    });
    
    updateProgress(currentQuestion / questions.length * 100);
}

// Siguiente pregunta
function nextQuestion(quizType) {
    const selected = document.querySelector(`input[name="q${currentQuestion}_${quizType}"]:checked`);
    if (selected) {
        const answerIndex = parseInt(selected.value);
        const correctIndex = quizData[quizType][currentQuestion].correct;
        
        if (answerIndex === correctIndex) {
            scores[quizType]++;
            showFeedback(true);
        } else {
            showFeedback(false);
        }
    }
    
    currentQuestion++;
    setTimeout(loadQuestion, 2000);
}

// Mostrar feedback
function showFeedback(isCorrect) {
    const feedback = document.querySelector(`[data-quiz="${currentQuiz}"] .question-feedback`);
    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
        feedback.innerHTML = `<i class="fas fa-check-circle"></i><p><strong>¡Correcto!</strong> ${quizData[currentQuiz][currentQuestion].explanation}</p>`;
    }
}

// Drag & Drop Niveles
function initDragDrop() {
    const draggables = document.querySelectorAll('.draggable');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', draggable.dataset.level);
            draggable.classList.add('dragging');
        });
        
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const draggedLevel = e.dataTransfer.getData('text/plain');
            if (draggedLevel == zone.dataset.correct) {
                zone.classList.add('valid');
                zone.innerHTML += `<div class="dropped">${document.querySelector(`[data-level="${draggedLevel}"]`).textContent}</div>`;
                scores.niveles++;
            } else {
                zone.classList.add('invalid');
            }
        });
    });
}

// Resultados
function showResults(quizType) {
    const score = Math.round((scores[quizType] / quizData[quizType].length) * 100);
    document.getElementById(`score-${quizType}`).textContent = `${scores[quizType]}/${quizData[quizType].length}`;
    
    if (quizType === 'all') {
        const finalScore = Math.round((Object.values(scores).reduce((a,b)=>a+b,0) / 15) * 100);
        document.getElementById('final-score').textContent = finalScore;
        animateScore(finalScore);
    }
    
    document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
}

// Animaciones números
function animateScore(target) {
    const scoreEl = document.getElementById('final-score');
    let start = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        start += increment;
        scoreEl.textContent = Math.floor(start);
        if (start >= target) {
            clearInterval(timer);
            scoreEl.textContent = target;
        }
    }, 30);
}

// Inicializar animaciones stats
function initAnimations() {
    const stats = document.querySelectorAll('.stat-number[data-target]');
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        let start = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            start += increment;
            stat.textContent = Math.floor(start);
            if (start >= target) clearInterval(timer);
        }, 30);
    });
}

function updateProgress(percent) {
    document.querySelector(`[data-quiz="${currentQuiz}"] .progress-fill`).style.width = percent + '%';
}

function restartQuiz() {
    scores = { concepto: 0, niveles: 0, documentos: 0 };
    currentQuestion = 0;
    document.querySelectorAll('.question-feedback').forEach(fb => fb.classList.add('hidden'));
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.remove('valid', 'invalid', 'drag-over');
        zone.innerHTML = '<span>' + zone.dataset.correctDesc + '</span>';
    });
    updateStats();
}

function printResults() {
    window.print();
}

// Update stats
function updateStats() {
    const totalScore = Object.values(scores).reduce((a,b)=>a+b,0);
    totalQuestions = Object.values(quizData).reduce((a,b)=>a+b.length,0);
    // Actualizar DOM stats
}

