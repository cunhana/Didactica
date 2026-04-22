import { BookOpen, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FF6B35] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#845EC2] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#FF6B35] to-[#845EC2] rounded-2xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold">Tema 7</span>
          </div>

          <p className="text-gray-400 max-w-xl mb-8">
            Intervención Socioeducativa en Educación No Formal. 
            Material de estudio interactivo para organizar y planificar 
            actividades con la infancia.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'pai', label: 'PAI' },
              { id: 'niveles', label: 'Niveles' },
              { id: 'fases', label: 'Fases' },
              { id: 'campos', label: 'Campos' },
              { id: 'estructura', label: 'Estructura' },
              { id: 'ejemplos', label: 'Ejemplos' },
              { id: 'resumen', label: 'Resumen' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-500 text-sm">
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" /> para aprender mejor
            </p>
          </div>
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-gradient-to-br from-[#FF6B35] to-[#845EC2] rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </footer>
  );
}
