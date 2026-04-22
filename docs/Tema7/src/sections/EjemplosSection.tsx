import { useEffect, useRef, useState } from 'react';
import { BookOpenCheck, Map, Calendar, FolderOpen, ArrowRight } from 'lucide-react';

const ejemplos = [
  {
    id: 'plan',
    icon: Map,
    title: 'Plan',
    subtitle: 'Nivel más general',
    color: 'from-[#FF6B35] to-[#FF8F5A]',
    bgColor: 'bg-[#FF6B35]',
    borderColor: 'border-[#FF6B35]/30',
    shadowColor: 'shadow-[#FF6B35]/20',
    name: 'II Plan Local de Infancia y Adolescencia de Zaragoza 2024-2027',
    description: 'Es un plan porque marca líneas generales y contiene varios programas.',
    features: [
      'Marco estratégico general',
      'Varios años de duración',
      'Contiene múltiples programas',
      'Define líneas de actuación amplias',
    ],
  },
  {
    id: 'programa',
    icon: Calendar,
    title: 'Programa',
    subtitle: 'Nivel intermedio',
    color: 'from-[#845EC2] to-[#A178DF]',
    bgColor: 'bg-[#845EC2]',
    borderColor: 'border-[#845EC2]/30',
    shadowColor: 'shadow-[#845EC2]/20',
    name: 'Zaragalla Verano 2026',
    description: 'Es un programa porque organiza actividades concretas de verano para la infancia.',
    features: [
      'Actividades específicas de verano',
      'Objetivos concretos definidos',
      'Público infantil determinado',
      'Contiene varios proyectos',
    ],
  },
  {
    id: 'proyecto',
    icon: FolderOpen,
    title: 'Proyecto',
    subtitle: 'Nivel más concreto',
    color: 'from-[#00C9A7] to-[#00E5BF]',
    bgColor: 'bg-[#00C9A7]',
    borderColor: 'border-[#00C9A7]/30',
    shadowColor: 'shadow-[#00C9A7]/20',
    name: 'Colonias de Educación Especial',
    description: 'Es un proyecto porque ya es una intervención más concreta, con actividades, destinatarios y objetivos definidos.',
    features: [
      'Actividades detalladas',
      'Destinatarios específicos',
      'Objetivos operativos concretos',
      'Recursos y temporalización definidos',
    ],
  },
];

export default function EjemplosSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExample, setActiveExample] = useState<string>('plan');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeEjemplo = ejemplos.find(e => e.id === activeExample) || ejemplos[0];

  return (
    <section 
      ref={sectionRef}
      id="ejemplos" 
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#00C9A7]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#51CF66]/10 to-[#00C9A7]/10 rounded-full px-4 py-2 mb-4">
            <BookOpenCheck className="w-5 h-5 text-[#51CF66]" />
            <span className="text-sm font-bold text-[#51CF66]">Sección 6</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-gradient-green">Ejemplos</span> del Documento
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Para entender la diferencia entre <strong>plan, programa y proyecto</strong>
          </p>
        </div>

        {/* Example selector */}
        <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {ejemplos.map((ejemplo) => (
            <button
              key={ejemplo.id}
              onClick={() => setActiveExample(ejemplo.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeExample === ejemplo.id
                  ? `bg-gradient-to-r ${ejemplo.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-600 shadow-card hover:shadow-lg'
              }`}
            >
              <ejemplo.icon className="w-6 h-6" />
              {ejemplo.title}
            </button>
          ))}
        </div>

        {/* Active example card */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`bg-white rounded-3xl shadow-xl border-2 ${activeEjemplo.borderColor} overflow-hidden`}>
            {/* Header */}
            <div className={`bg-gradient-to-r ${activeEjemplo.color} p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <activeEjemplo.icon className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-sm font-bold bg-white/25 px-3 py-1 rounded-full">
                    {activeEjemplo.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold mt-2">{activeEjemplo.title}</h3>
                </div>
              </div>
              <h4 className="text-xl font-bold">{activeEjemplo.name}</h4>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">{activeEjemplo.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeEjemplo.features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-xl ${activeEjemplo.bgColor}/10 border border-${activeEjemplo.bgColor.replace('bg-', '')}/20`}
                  >
                    <div className={`w-8 h-8 rounded-full ${activeEjemplo.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hierarchy visualization */}
        <div className={`mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
            <h3 className="text-center text-xl font-bold text-gray-900 mb-8">Jerarquía visual</h3>
            <div className="flex flex-col items-center gap-4">
              {ejemplos.map((ejemplo, index) => (
                <div key={ejemplo.id} className="w-full max-w-2xl">
                  <div 
                    className={`bg-gradient-to-r ${ejemplo.color} rounded-2xl p-5 text-white shadow-lg flex items-center gap-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                      activeExample === ejemplo.id ? 'ring-4 ring-offset-2 ring-gray-200' : ''
                    }`}
                    onClick={() => setActiveExample(ejemplo.id)}
                  >
                    <div className="p-2 bg-white/20 rounded-xl">
                      <ejemplo.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold bg-white/25 px-2 py-0.5 rounded-full">{ejemplo.title}</span>
                      <p className="font-bold text-lg mt-1">{ejemplo.name}</p>
                    </div>
                    <span className="text-2xl font-bold text-white/60">{index + 1}</span>
                  </div>
                  {index < ejemplos.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="w-1 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
