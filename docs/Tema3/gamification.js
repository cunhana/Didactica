// gamification.js - SISTEMA GAMIFICACIÓN COMPLETO
class GamificationEngine {
    constructor() {
        this.player = {
            name: localStorage.getItem('studentName') || 'Estudiante CFGS',
            level: 1,
            xp: 0,
            points: 0,
            achievements: [],
            missions: []
        };
        
        this.missions = [
            {
                id: 'concepto-curriculo',
                title: 'Maestro del Currículo',
                description: 'Completar Quiz Concepto Currículo (5/5)',
                reward: { xp: 500, points: 100 },
                progress: 0,
                maxProgress: 5,
                type: 'primary'
            },
            {
                id: 'niveles-concrecion',
                title: 'Arquitecto Curricular',
                description: 'Completar Drag & Drop Niveles (100%)',
                reward: { xp: 750, points: 150 },
                progress: 0,
                maxProgress: 1,
                type: 'success'
            },
            {
                id: 'documentos-centro',
                title: 'Planificador Experto',
                description: 'Completar Quiz Documentos (5/5)',
                reward: { xp: 600, points: 120 },
                progress: 0,
                maxProgress: 5,
                type: 'warning'
            }
        ];
        
        this.achievements = [
            { id: 'quiz-master', title: 'Quiz Master', description: '100% en primer quiz', reward: 200, icon: 'fas fa-brain' },
            { id: 'curriculo-pro', title: 'Pro Curricular', description: 'Completar todas misiones', reward: 1000, icon: 'fas fa-crown' }
        ];
        
        this.init();
    }
    
    init() {
        this.loadPlayerData();
        this.renderMissions();
        this.renderAchievements();
        this.renderDailyChallenges();
        this.updatePlayerStats();
        this.startParticleSystem();
        this.loadQuizProgress();
    }
    
    loadPlayerData() {
        const saved = localStorage.getItem('gamificationData');
        if (saved) {
            Object.assign(this.player, JSON.parse(saved));
        }
    }
    
    savePlayerData() {
        localStorage.setItem('gamificationData', JSON.stringify(this.player));
    }
    
    loadQuizProgress() {
        const quizScores = JSON.parse(localStorage.getItem('quizScores') || '{}');
        
        // Actualizar progreso misiones
        if (quizScores.concepto === 5) {
            this.completeMission('concepto-curriculo');
        }
        if (quizScores.niveles === 1) {
            this.completeMission('niveles-concrecion');
        }
        if (quizScores.documentos === 5) {
            this.completeMission('documentos-centro');
        }
    }
    
    completeMission(missionId) {
        const mission = this.missions.find(m => m.id === missionId);
        if (mission && !mission.completed) {
            mission.completed = true;
            this.player.xp += mission.reward.xp;
            this.player.points += mission.reward.points;
            this.updateLevel();
            this.checkAchievements();
            this.savePlayerData();
            this.renderMissions();
            this.updatePlayerStats();
            
            // Efecto partículas
            this.createCompletionEffect();
        }
    }
    
    updateLevel() {
        const prevLevel = this.player.level;
        this.player.level = Math.floor(this.player.xp / 1000) + 1;
        if (this.player.level > prevLevel) {
            this.createLevelUpEffect();
        }
    }
    
    checkAchievements() {
        this.achievements.forEach(ach => {
            if (!this.player.achievements.includes(ach.id) && this.shouldUnlockAchievement(ach)) {
                this.player.achievements.push(ach.id);
                this.player.points += ach.reward;
                this.savePlayerData();
            }
        });
    }
    
    shouldUnlockAchievement(achievement) {
        // Lógica específica por logro
        return false; // Implementar según condiciones
    }
    
    renderMissions() {
        const grid = document.getElementById('missionsGrid');
        grid.innerHTML = this.missions.map(mission => `
            <div class="mission-card ${mission.type} ${mission.completed ? 'completed' : ''}" 
                 onclick="game.openMissionDetail('${mission.id}')">
                <div class="mission-icon">
                    <i class="fas fa-${mission.type === 'primary' ? 'book-open' : 
                                       mission.type === 'success' ? 'layer-group' : 'file-alt'}"></i>
                </div>
                <h3 class="mission-title">${mission.title}</h3>
                <p class="mission-description">${mission.description}</p>
                <div class="mission-reward">
                    <span>Recompensa: ${mission.reward.xp} XP | ${mission.reward.points} PTS</span>
                    <div class="mission-progress">
                        <div class="mission-progress-fill" 
                             style="width: ${mission.completed ? 100 : (mission.progress/mission.maxProgress)*100}%"></div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    renderAchievements() {
        const grid = document.getElementById('achievementsGrid');
        grid.innerHTML = this.achievements.map(ach => `
            <div class="achievement-badge ${this.player.achievements.includes(ach.id) ? 'unlocked' : ''}">
                <div class="achievement-icon" style="background: linear-gradient(135deg, var(--neon-green), var(--neon-blue))">
                    <i class="${ach.icon}"></i>
                </div>
                <div class="achievement-content">
                    <h4>${ach.title}</h4>
                    <p class="achievement-description">${ach.description}</p>
                </div>
                <div class="achievement-reward">+${ach.reward} PTS</div>
            </div>
        `).join('');
    }
    
    renderDailyChallenges() {
        const container = document.getElementById('dailyChallenges');
        const challenges = [
            { title: 'Quiz Rápido', reward: '50 XP', icon: 'brain' },
            { title: 'Repasar PEC', reward: '100 PTS', icon: 'file-alt' }
        ];
        
        container.innerHTML = challenges.map(ch => `
            <div class="challenge-item" onclick="game.completeChallenge(this)">
                <div>
                    <div class="challenge-icon">
                        <i class="fas fa-${ch.icon}"></i>
                    </div>
                    <div class="challenge-text">
                        <h4>${ch.title}</h4>
                    </div>
                </div>
                <div class="challenge-reward">${ch.reward}</div>
            </div>
        `).join('');
    }
    
    updatePlayerStats() {
        document.getElementById('playerLevel').textContent = `LVL ${this.player.level}`;
        document.getElementById('xpValue').textContent = this.player.xp;
        document.getElementById('pointsValue').textContent = this.player.points;
        document.getElementById('xpFill').style.width = (this.player.xp % 1000) + '%';
    }
    
    openMissionDetail(missionId) {
        const mission = this.missions.find(m => m.id === missionId);
        document.getElementById('missionDetail').innerHTML = `
            <h3>${mission.title}</h3>
            <p>${mission.description}</p>
            <p><strong>Progreso:</strong> ${mission.progress}/${mission.maxProgress}</p>
            <button class="game-btn" onclick="game.completeMission('${mission.id}')">
                ${mission.completed ? '¡Completada! 🎉' : 'Completar Ahora'}
            </button>
        `;
        document.getElementById('missionModal').style.display = 'flex';
    }
    
    showRanking() {
        // Simular ranking
        const ranking = [
            { name: 'Ana García', score: 2450, level: 3 },
            { name: 'Carlos López', score: 1980, level: 2 },
            { name: this.player.name, score: this.player.points, level: this.player.level }
        ];
        
        const table = document.getElementById('rankingTable');
        table.innerHTML = ranking.map((player, i) => `
            <div class="ranking-row">
                <div class="rank-position ${i === 0 ? 'rank-gold' : i === 1 ? 'rank-silver' : 'rank-bronze'}">
                    ${i+1}
                </div>
                <div class="rank-avatar">${player.name.charAt(0)}</div>
                <div class="rank-info">
                    <h4>${player.name}</h4>
                    <p>Lvl ${player.level}</p>
                </div>
                <div class="rank-score">${player.score} PTS</div>
            </div>
        `).join('');
        
        document.getElementById('rankingModal').style.display = 'flex';
    }
    
    createCompletionEffect() {
        // Partículas explosión
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                // Trigger particle burst
            }, i * 50);
        }
    }
    
    createLevelUpEffect() {
        // Efecto level up full screen
        const effect = document.createElement('div');
        effect.innerHTML = `<div class="levelup-effect">LEVEL UP! LVL ${this.player.level}</div>`;
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 3000);
    }
    
    startParticleSystem() {
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Sistema partículas gaming
        let particles = [];
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Crear partículas aleatorias
            if (Math.random() < 0.1) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: canvas.height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: -Math.random() * 3 - 1,
                    life: 1
                });
            }
            
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;
                
                if (p.life > 0.5) {
                    ctx.fillStyle = `rgba(0, 245, 255, ${p.life})`;
                } else {
                    ctx.fillStyle = `rgba(191, 0, 255, ${p.life})`;
                }
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.life * 3, 0, Math.PI * 2);
                ctx.fill();
                
                if (p.life <= 0) particles.splice(i, 1);
            });
            
            requestAnimationFrame(animate);
        }
        animate();
    }
    
    completeChallenge(element) {
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.innerHTML += '<i class="fas fa-check" style="color:var(--neon-green)"></i>';
            this.player.points += 50;
            this.savePlayerData();
            this.updatePlayerStats();
        }, 300);
    }
}

// Inicializar engine
const game = new GamificationEngine();

// Funciones globales
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
