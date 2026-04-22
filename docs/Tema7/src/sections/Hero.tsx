import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Users, BookOpen, Target } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const blobs = heroRef.current.querySelectorAll('.blob');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        const el = blob as HTMLElement;
        el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('pai');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute -top-32 -left-32 w-96 h-96 bg-[#FF6B35]/30 rounded-full blur-3xl animate-blob" />
        <div className="blob absolute top-1/2 -right-32 w-80 h-80 bg-[#845EC2]/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-2s' }} />
        <div className="blob absolute -bottom-32 left-1/3 w-96 h-96 bg-[#00C9A7]/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-4s' }} />
        <div className="blob absolute top-1/4 left-1/2 w-64 h-64 bg-[#FFE66D]/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-6s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8 animate-slide-up">
          <Sparkles className="w-5 h-5 text-[#FFE66D]" />
          <span className="text-white font-semibold text-sm">Educación No Formal</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Intervención{' '}
          <span className="relative">
            <span className="relative z-10">Socioeducativa</span>
            <span className="absolute bottom-2 left-0 right-0 h-4 bg-[#FFE66D]/40 rounded-full -rotate-1" />
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 font-semibold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          en Educación No Formal
        </p>

        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Aprende cómo se organizan y planifican las actividades y proyectos 
          que ayudan a la infancia fuera del colegio
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
            <BookOpen className="w-8 h-8 text-[#FFE66D] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">8</div>
            <div className="text-sm text-white/70">Secciones</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
            <Target className="w-8 h-8 text-[#FFE66D] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-sm text-white/70">Niveles de Planificación</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
            <Users className="w-8 h-8 text-[#FFE66D] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">8</div>
            <div className="text-sm text-white/70">Partes del Proyecto</div>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={scrollToContent}
          className="group inline-flex items-center gap-3 bg-white text-gray-800 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          <span>Comenzar a aprender</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
