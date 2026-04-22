import { useEffect, useRef, useState } from 'react';
import { Layers, Map, ClipboardList, FolderOpen, Puzzle, ChevronRight } from 'lucide-react';

const niveles = [
  {
    id: 'plan',
    icon: Map,
    title: 'Plan',
    subtitle: 'El nivel más amplio',
    description: 'Es el "gran paraguas" que marca la dirección general.',
    color: 'from-[#FF6B35] to-[#FF8F5A]',
    bgColor: 'bg-[#FF6B35]',
    textColor: 'text-[#FF6B35]',
    borderColor: 'border-[#FF6B35]/30',
    shadowColor: 'shadow-[#FF6B35]/20',
    features: [
      'Qué se quiere conseguir',
      'Cuáles son las grandes metas',
      'A qué plazo',
      'Qué recursos generales habrá',
    ],
    example: 'El Plan Local de Infancia y Adolescencia de Zaragoza sería un plan, porque marca líneas generales para trabajar con la infancia en la ciudad.',
    level: 1,
  },
  {
    id: 'programa',
    icon: ClipboardList,
    title: 'Programa',
    subtitle: 'Más concretado que el plan',
    description: 'Aquí ya se dicen objetivos más específicos.',
    color: 'from-[#845EC2] to-[#A178DF]',
    bgColor: 'bg-[#845EC2]',
    textColor: 'text-[#845EC2]',
    borderColor: 'border-[#845EC2]/30',
    shadowColor: 'shadow-[#845EC2]/20',
    features: [
      'Qué se va a hacer',
      'Para qué',
      'Con qué metodología',
      'Con qué recursos más concretos',
    ],
    example: 'Zaragalla Verano es un programa, porque organiza actividades de verano para niños y niñas con una finalidad concreta.',
    level: 2,
  },
  {
    id: 'proyecto',
    icon: FolderOpen,
    title: 'Proyecto',
    subtitle: 'Todavía más concreto',
    description: 'El nivel más cercano a la práctica real.',
    color: 'from-[#00C9A7] to-[#00E5BF]',
    bgColor: 'bg-[#00C9A7]',
    textColor: 'text-[#00C9A7]',
    borderColor: 'border-[#00C9A7]/30',
    shadowColor: 'shadow-[#00C9A7]/20',
    features: [
      'Qué se va a hacer',
      'Quién lo hará',
      'Cuándo y dónde',
      'Con qué recursos',
      'Para conseguir qué objetivos operativos',
    ],
    example: 'Una colonia concreta para educación especial sería un proyecto.',
    level: 3,
  },
  {
    id: 'actividades',
    icon: Puzzle,
    title: 'Actividades',
    subtitle: 'Lo que realmente se hace',
    description: 'Las acciones concretas que permiten cumplir el proyecto.',
    color: 'from-[#FF6B9D] to-[#FF8FB8]',
    bgColor: 'bg-[#FF6B9D]',
    textColor: 'text-[#FF6B9D]',
    borderColor: 'border-[#FF6B9D]/30',
    shadowColor: 'shadow-[#FF6B9D]/20',
    features: [
      'Un taller de pintura',
      'Un juego de cooperación',
      'Una excursión',
      'Una dinámica de grupo',
    ],
    example: 'Cada actividad es una acción concreta diseñada para alcanzar los objetivos del proyecto.',
    level: 4,
  },
];

export default function NivelesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
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

  return (
    <section 
      ref={sectionRef}
      id="niveles" 
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(132, 94, 194, 0.1) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#845EC2]/10 to-[#00C9A7]/10 rounded-full px-4 py-2 mb-4">
            <Layers className="w-5 h-5 text-[#845EC2]" />
            <span className="text-sm font-bold text-[#845EC2]">Sección 2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Niveles de <span className="text-gradient-purple">Planificación</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Todo se organiza desde lo más <strong>general</strong> hasta lo más <strong>concreto</strong>
          </p>
        </div>

        {/* Flow indicator */}
        <div className={`flex items-center justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {niveles.map((nivel, index) => (
            <div key={nivel.id} className="flex items-center gap-2">
              <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${nivel.color} text-white font-bold text-sm shadow-lg`}>
                {nivel.title}
              </div>
              {index < niveles.length - 1 && (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {niveles.map((nivel, index) => (
            <div
              key={nivel.id}
              className={`group bg-white rounded-3xl shadow-card border-2 ${nivel.borderColor} overflow-hidden card-interactive cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${activeCard === nivel.id ? 'ring-2 ring-offset-2 ' + nivel.textColor.replace('text-', 'ring-') : ''}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => setActiveCard(activeCard === nivel.id ? null : nivel.id)}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${nivel.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-8 -translate-y-8" />
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <nivel.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold bg-white/25 px-2 py-0.5 rounded-full">
                          Nivel {nivel.level}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{nivel.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-white/90 font-medium">{nivel.subtitle}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{nivel.description}</p>
                
                <div className="mb-4">
                  <h4 className={`font-bold ${nivel.textColor} mb-3 flex items-center gap-2`}>
                    <span className="w-1.5 h-1.5 rounded-full ${nivel.bgColor}" />
                    Características:
                  </h4>
                  <ul className="space-y-2">
                    {nivel.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className={`w-4 h-4 ${nivel.textColor} mt-0.5 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example */}
                <div className={`${nivel.bgColor}/10 rounded-2xl p-4 border-l-4 ${nivel.borderColor}`}>
                  <p className="text-sm font-bold text-gray-500 uppercase mb-1">Ejemplo</p>
                  <p className="text-gray-800 font-medium">{nivel.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Memory trick */}
        <div className={`mt-12 max-w-3xl mx-auto transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#845EC2] to-[#00C9A7] rounded-3xl p-8 text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Truco para memorizar</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {niveles.map((nivel, index) => (
                <div key={nivel.id} className="flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-5 py-3">
                    <span className="font-bold text-lg">{nivel.title}</span>
                  </div>
                  {index < niveles.length - 1 && (
                    <span className="text-2xl font-bold text-white/60">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-white/80 text-sm">
              De lo general a lo concreto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
