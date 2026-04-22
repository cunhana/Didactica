import { useEffect, useRef, useState } from 'react';
import { 
  Workflow, Search, PenTool, Play, CheckCircle, 
  FileText, MessageSquare, ClipboardCheck, Eye,
  Target, Puzzle, Package, Clock, Users, Activity, Zap, Heart, 
  BarChart3, Star, TrendingUp, Award 
} from 'lucide-react';

const fases = [
  {
    id: 'analisis',
    icon: Search,
    title: 'Análisis de la Realidad',
    color: 'from-[#FF6B35] to-[#FF8F5A]',
    bgColor: 'bg-[#FF6B35]',
    textColor: 'text-[#FF6B35]',
    borderColor: 'border-[#FF6B35]/30',
    description: 'Primero hay que mirar la situación real.',
    items: [
      { icon: FileText, text: 'Documentos' },
      { icon: MessageSquare, text: 'Entrevistas' },
      { icon: ClipboardCheck, text: 'Cuestionarios' },
      { icon: Eye, text: 'Observación' },
    ],
    details: [
      'Qué necesidades hay',
      'Qué problemas existen',
      'A quién vamos a ayudar',
      'Qué contexto tiene esa infancia',
    ],
    example: 'Si detectamos que en un barrio hay muchos niños sin actividades de verano, esa sería una necesidad detectada.',
  },
  {
    id: 'planificacion',
    icon: PenTool,
    title: 'Planificación',
    color: 'from-[#845EC2] to-[#A178DF]',
    bgColor: 'bg-[#845EC2]',
    textColor: 'text-[#845EC2]',
    borderColor: 'border-[#845EC2]/30',
    description: 'Después se diseña el proyecto.',
    items: [
      { icon: Target, text: 'Objetivos' },
      { icon: Puzzle, text: 'Actividades' },
      { icon: Package, text: 'Recursos' },
      { icon: Clock, text: 'Duración' },
    ],
    details: [
      'Qué objetivos habrá',
      'Qué actividades se harán',
      'Qué recursos se necesitan',
      'Cuánto durará',
      'Cómo se evaluará',
    ],
    example: 'Es la parte de "pensarlo todo antes de empezar".',
  },
  {
    id: 'ejecucion',
    icon: Play,
    title: 'Ejecución',
    color: 'from-[#00C9A7] to-[#00E5BF]',
    bgColor: 'bg-[#00C9A7]',
    textColor: 'text-[#00C9A7]',
    borderColor: 'border-[#00C9A7]/30',
    description: 'Es cuando se pone en marcha.',
    items: [
      { icon: Users, text: 'Trabajo directo' },
      { icon: Activity, text: 'Actividades' },
      { icon: Zap, text: 'Dinámicas' },
      { icon: Heart, text: 'Interacción' },
    ],
    details: [
      'Se hacen las actividades',
      'Se trabaja con los niños y niñas',
      'Se aplican las decisiones diseñadas antes',
    ],
    example: 'Aquí ya se materializa todo lo planificado en el mundo real.',
  },
  {
    id: 'evaluacion',
    icon: CheckCircle,
    title: 'Evaluación',
    color: 'from-[#FF6B9D] to-[#FF8FB8]',
    bgColor: 'bg-[#FF6B9D]',
    textColor: 'text-[#FF6B9D]',
    borderColor: 'border-[#FF6B9D]/30',
    description: 'Al final se valora todo.',
    items: [
      { icon: BarChart3, text: 'Resultados' },
      { icon: Star, text: 'Valoración' },
      { icon: TrendingUp, text: 'Mejora' },
      { icon: Award, text: 'Logros' },
    ],
    details: [
      'Si se han conseguido los objetivos',
      'Si las actividades han funcionado',
      'Si los niños y niñas han participado bien',
      'Si el trabajo de los profesionales ha sido correcto',
    ],
    example: 'La evaluación sirve para mejorar.',
  },
];

export default function FasesSection() {
  const [isVisible, setIsVisible] = useState(false);
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
      id="fases" 
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#00C9A7]/5 to-[#4DABF7]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00C9A7]/10 to-[#4DABF7]/10 rounded-full px-4 py-2 mb-4">
            <Workflow className="w-5 h-5 text-[#00C9A7]" />
            <span className="text-sm font-bold text-[#00C9A7]">Sección 3</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Fases de la <span className="text-gradient-teal">Intervención</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Toda intervención se hace siguiendo unas <strong>fases ordenadas</strong>. No se empieza directamente sin pensar.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B35] via-[#845EC2] via-[#00C9A7] to-[#FF6B9D] rounded-full -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {fases.map((fase, index) => (
              <div
                key={fase.id}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Timeline dot - desktop only */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${fase.color} flex items-center justify-center shadow-lg`}>
                    <fase.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:pr-12'}`}>
                  <div className={`bg-white rounded-3xl shadow-card border-2 ${fase.borderColor} overflow-hidden card-interactive`}>
                    {/* Mobile icon */}
                    <div className={`lg:hidden bg-gradient-to-r ${fase.color} p-4 flex items-center gap-3`}>
                      <div className="p-2 bg-white/20 rounded-xl">
                        <fase.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{fase.title}</h3>
                    </div>

                    <div className="p-6">
                      {/* Desktop title */}
                      <h3 className="hidden lg:block text-xl font-bold text-gray-900 mb-2">{fase.title}</h3>
                      <p className="text-gray-600 mb-4">{fase.description}</p>

                      {/* Details */}
                      <div className="mb-4">
                        <h4 className={`font-bold ${fase.textColor} mb-3 text-sm uppercase tracking-wide`}>
                          En esta fase se estudia o decide:
                        </h4>
                        <ul className="space-y-2">
                          {fase.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start gap-2">
                              <CheckCircle className={`w-4 h-4 ${fase.textColor} mt-0.5 flex-shrink-0`} />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Methods/Tools */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                        {fase.items.map((item, iIndex) => (
                          <div key={iIndex} className={`${fase.bgColor}/10 rounded-xl p-3 text-center`}>
                            <item.icon className={`w-5 h-5 ${fase.textColor} mx-auto mb-1`} />
                            <span className="text-xs font-semibold text-gray-700">{item.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Example */}
                      <div className={`${fase.bgColor}/10 rounded-2xl p-4 border-l-4 ${fase.borderColor}`}>
                        <p className="text-sm font-bold text-gray-500 uppercase mb-1">Ejemplo</p>
                        <p className="text-gray-800 font-medium text-sm">{fase.example}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary flow */}
        <div className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-center text-xl font-bold text-gray-900 mb-6">Resumen del flujo</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {fases.map((fase, index) => (
                <div key={fase.id} className="flex items-center gap-4">
                  <div className={`bg-gradient-to-r ${fase.color} text-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3`}>
                    <fase.icon className="w-5 h-5" />
                    <span className="font-bold">{fase.title}</span>
                  </div>
                  {index < fases.length - 1 && (
                    <div className="hidden sm:block text-3xl text-gray-400 font-bold">→</div>
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
