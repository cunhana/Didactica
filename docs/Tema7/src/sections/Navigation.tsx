import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronUp } from 'lucide-react';

const navItems = [
  { id: 'inicio', label: 'Inicio', color: 'from-[#FF6B35] to-[#FF8F5A]' },
  { id: 'pai', label: '¿Qué es PAI?', color: 'from-[#845EC2] to-[#A178DF]' },
  { id: 'niveles', label: 'Niveles', color: 'from-[#00C9A7] to-[#00E5BF]' },
  { id: 'fases', label: 'Fases', color: 'from-[#4DABF7] to-[#74C0FC]' },
  { id: 'campos', label: 'Campos', color: 'from-[#FF6B9D] to-[#FF8FB8]' },
  { id: 'estructura', label: 'Estructura', color: 'from-[#FF922B] to-[#FFA94D]' },
  { id: 'ejemplos', label: 'Ejemplos', color: 'from-[#51CF66] to-[#69DB7C]' },
  { id: 'resumen', label: 'Resumen', color: 'from-[#FF6B35] to-[#845EC2]' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: 0 };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: rect.top };
      });
      
      const current = sections.reduce((closest, section) => {
        if (section.top <= 150 && section.top > closest.top) return section;
        return closest;
      }, { id: 'inicio', top: -Infinity });
      
      setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 group"
            >
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                scrolled ? 'bg-gradient-to-br from-[#FF6B35] to-[#845EC2]' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <BookOpen className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <span className={`font-bold text-lg hidden sm:block transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Tema 7
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? scrolled 
                        ? 'text-[#FF6B35] bg-[#FF6B35]/10'
                        : 'text-white bg-white/20'
                      : scrolled
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? 'bg-gray-100 text-gray-800' 
                  : 'bg-white/20 text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#845EC2] text-white shadow-lg transition-all duration-300 hover:scale-110 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </>
  );
}
