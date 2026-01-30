
# Ahora actualizo el index.html para que apunte a archivos .html en lugar de .php
index_html_updated = '''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guía de Estudio - Currículo de Educación Infantil Aragón</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
    
    <header class="header">
        <div class="container">
            <h1 class="animate-fade-in">📚 Guía de Estudio</h1>
            <p class="subtitle animate-fade-in-delay">Currículo de Educación Infantil de Aragón</p>
            <p class="description">ORDEN ECD/853/2022, de 13 de junio</p>
        </div>
    </header>

    <nav class="navbar">
        <div class="container">
            <ul class="nav-list">
                <li><a href="index.html" class="active">🏠 Inicio</a></li>
                <li><a href="introduccion.html">📖 Introducción</a></li>
                <li><a href="disposiciones.html">📋 Disposiciones</a></li>
                <li><a href="areas.html">🎨 Áreas</a></li>
                <li><a href="competencias.html">⭐ Competencias</a></li>
                <li><a href="evaluacion.html">✅ Evaluación</a></li>
            </ul>
        </div>
    </nav>

    <main class="container main-content">
        <section class="hero">
            <div class="hero-content animate-slide-up">
                <h2>¡Bienvenido a tu Guía de Estudio!</h2>
                <p>Esta plataforma interactiva te ayudará a comprender y estudiar el currículo oficial de Educación Infantil en Aragón de forma práctica y amena.</p>
            </div>
        </section>

        <section class="cards-grid">
            <div class="card animate-zoom-in" style="animation-delay: 0.1s">
                <div class="card-icon">📖</div>
                <h3>Introducción</h3>
                <p>Conoce el contexto legal y la estructura del documento oficial.</p>
                <a href="introduccion.html" class="btn">Explorar</a>
            </div>

            <div class="card animate-zoom-in" style="animation-delay: 0.2s">
                <div class="card-icon">📋</div>
                <h3>Disposiciones Generales</h3>
                <p>Fines, principios pedagógicos y estructura del currículo.</p>
                <a href="disposiciones.html" class="btn">Explorar</a>
            </div>

            <div class="card animate-zoom-in" style="animation-delay: 0.3s">
                <div class="card-icon">🎨</div>
                <h3>Áreas de Conocimiento</h3>
                <p>Crecimiento en Armonía, Descubrimiento del Entorno y Comunicación.</p>
                <a href="areas.html" class="btn">Explorar</a>
            </div>

            <div class="card animate-zoom-in" style="animation-delay: 0.4s">
                <div class="card-icon">⭐</div>
                <h3>Competencias Clave</h3>
                <p>Las 8 competencias clave de la Educación Infantil.</p>
                <a href="competencias.html" class="btn">Explorar</a>
            </div>

            <div class="card animate-zoom-in" style="animation-delay: 0.5s">
                <div class="card-icon">✅</div>
                <h3>Evaluación</h3>
                <p>Criterios, procedimientos y documentos de evaluación.</p>
                <a href="evaluacion.html" class="btn">Explorar</a>
            </div>

            <div class="card animate-zoom-in" style="animation-delay: 0.6s">
                <div class="card-icon">🎯</div>
                <h3>Orientaciones Metodológicas</h3>
                <p>Principios metodológicos y situaciones de aprendizaje.</p>
                <a href="metodologia.html" class="btn">Explorar</a>
            </div>
        </section>

        <section class="info-section">
            <div class="info-box animate-slide-left">
                <h3>📅 Fecha de Aplicación</h3>
                <p>Esta orden entró en vigor el <strong>18 de junio de 2022</strong> y es de aplicación desde el curso académico <strong>2022-2023</strong>.</p>
            </div>
            <div class="info-box animate-slide-right">
                <h3>🎓 Para Estudiantes</h3>
                <p>Este material está diseñado específicamente para estudiantes de <strong>Educación Infantil</strong> que necesitan dominar el currículo oficial.</p>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Guía de Estudio - Currículo de Educación Infantil Aragón</p>
            <p>Basado en la ORDEN ECD/853/2022, de 13 de junio - BOA 17/06/2022</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html_updated)

print("✅ index.html actualizado con enlaces .html")
