import { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, ArrowRight, Lightbulb, CheckCircle,
  Map, ClipboardList, FolderOpen, Puzzle, Search, PenTool, Play, CheckSquare,
  Target, BookOpen, Users, Clock, Package, BarChart3
} from 'lucide-react';

const ordenPlanificacion = [
  { icon: Map, title: 'Plan', desc: 'Muy general', color: 'from-[#FF6B35] to-[#FF8F5A]' },
  { icon: ClipboardList, title: 'Programa', desc: 'Más concreto', color: 'from-[#845EC2] to-[#A178DF]' },
  { icon: FolderOpen, title: 'Proyecto', desc: 'Muy específico', color: 'from-[#00C9A7] to-[#00E5BF]' },
  { icon: Puzzle, title: 'Actividades', desc: 'Lo que se hace', color: 'from-[#FF6B9D] to-[#FF8FB8]' },
];

const fases = [
  { icon: Search, title: 'Análisis', desc: 'Ver necesidades', color: 'from-[#FF6B35] to-[#FF8F5A]' },
  { icon: PenTool, title: 'Planificación', desc: 'Diseñar proyecto', color: 'from-[#845EC2] to-[#A178DF]' },
  { icon: Play, title: 'Ejecución', desc: 'Poner en práctica', color: 'from-[#00C9A7] to-[#00E5BF]' },
  { icon: CheckSquare, title: 'Evaluación', desc: 'Valorar resultados', color: 'from-[#FF6B9D] to-[#FF8FB8]' },
];

const partesProyecto = [
  { icon: Target, title: 'Contexto', color: 'bg-[#FF6B35]' },
  { icon: CheckCircle, title: 'Justificación', color: 'bg-[#845EC2]' },
  { icon: Users, title: 'Destinatarios', color: 'bg-[#00C9A7]' },
  { icon: Target, title: 'Objetivos', color: 'bg-[#FF6B9D]' },
  { icon: BookOpen, title: 'Metodología', color: 'bg-[#FF922B]' },
  { icon: Clock, title: 'Temporalización', color: 'bg-[#4DABF7]' },
  { icon: Package, title: 'Recursos', color: 'bg-[#51CF66]' },
  { icon: BarChart3, title: 'Evaluación', color: 'bg-[#FF6B35]' },
];

const trucoExamen = [
  'Explica qué es un PAI',
  'Di los niveles de planificación',
  'Explica las fases',
  'Enumera los campos de trabajo',
  'Describe la estructura del proyecto',
  'Pon ejemplos si puedes',
];

export default function ResumenSection() {
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
      id="resumen" 
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 via-transparent to-[#845EC2]/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#FFE66D]/10 rounded-full px-4 py-2 mb-4">
            <GraduationCap className="w-5 h-5 text-[#FF6B35]" />
            <span className="text-sm font-bold text-[#FF6B35]">Sección 7</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-gradient-coral">Resumen</span> y Truco de Examen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas recordar en un vistazo
          </p>
        </div>

        {/* Orden de planificación */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Orden de Planificación</h3>
            <p className="text-center text-gray-600 mb-6">De lo general a lo concreto</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {ordenPlanificacion.map((item, index) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className={`bg-gradient-to-r ${item.color} rounded-2xl p-5 text-white shadow-lg text-center min-w-[140px]`}>
                    <item.icon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-bold">{item.title}</p>
                    <p className="text-xs text-white/80">{item.desc}</p>
                  </div>
                  {index < ordenPlanificacion.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fases */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Fases de la Intervención</h3>
            <p className="text-center text-gray-600 mb-6">El ciclo completo</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {fases.map((item, index) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className={`bg-gradient-to-r ${item.color} rounded-2xl p-5 text-white shadow-lg text-center min-w-[140px]`}>
                    <item.icon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-bold">{item.title}</p>
                    <p className="text-xs text-white/80">{item.desc}</p>
                  </div>
                  {index < fases.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partes del proyecto */}
        <div className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Partes del Proyecto</h3>
            <p className="text-center text-gray-600 mb-6">La estructura completa</p>
            <div className="flex flex-wrap justify-center gap-3">
              {partesProyecto.map((item, index) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div className={`${item.color} rounded-xl px-5 py-3 text-white shadow-lg flex items-center gap-2`}>
                    <item.icon className="w-5 h-5" />
                    <span className="font-bold text-sm">{item.title}</span>
                  </div>
                  {index < partesProyecto.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frase para memorizar */}
        <div className={`mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#FF6B35] via-[#845EC2] to-[#00C9A7] rounded-3xl p-8 text-white text-center shadow-xl">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-[#FFE66D]" />
            <h3 className="text-2xl font-bold mb-3">Frase para memorizar</h3>
            <p className="text-xl font-bold">
              PAI = <span className="text-[#FFE66D]">qué es</span>, <span className="text-[#FFE66D]">niveles</span>, <span className="text-[#FFE66D]">fases</span>, <span className="text-[#FFE66D]">campos</span>, <span className="text-[#FFE66D]">estructura</span> y <span className="text-[#FFE66D]">ejemplos</span>
            </p>
          </div>
        </div>

        {/* Truco de examen */}
        <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#FFE66D]/20 to-[#FF922B]/20 rounded-3xl p-8 border-2 border-[#FFE66D]/40">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE66D] rounded-full px-5 py-2 mb-3">
                <GraduationCap className="w-5 h-5 text-gray-800" />
                <span className="font-bold text-gray-800">Truco de Examen</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Si te preguntan este tema, sigue este esquema:</h3>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-3">
              {trucoExamen.map((paso, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 card-interactive"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#845EC2] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-800 font-semibold">{paso}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-lg">
                <p className="text-gray-700 font-medium">
                  Eso te hará quedar <span className="font-bold text-[#FF6B35]">muy ordenada</span> la respuesta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final summary box */}
        <div className={`mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Resumen muy fácil</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Este tema explica <strong className="text-white">cómo organizar intervenciones con niños y niñas fuera del colegio</strong>. 
              Primero se <span className="text-[#FF6B35] font-bold">observa la realidad</span>, después se <span className="text-[#845EC2] font-bold">diseña el proyecto</span>, 
              luego se <span className="text-[#00C9A7] font-bold">ejecuta</span> y al final se <span className="text-[#FF6B9D] font-bold">evalúa</span>.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {['Qué es', 'Por qué se hace', 'Para quién', 'Qué quiere conseguir', 'Cómo se hará', 'Cuándo', 'Con qué recursos', 'Cómo se evaluará'].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold border border-white/20">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
