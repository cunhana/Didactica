import { useEffect, useRef, useState } from 'react';
import { FileText, Lightbulb, Heart, Briefcase, Gamepad2, Stethoscope, Building2 } from 'lucide-react';

const contextos = [
  { icon: Gamepad2, label: 'Ludotecas', color: 'from-[#FF6B35] to-[#FF8F5A]' },
  { icon: Building2, label: 'Colonias', color: 'from-[#845EC2] to-[#A178DF]' },
  { icon: Briefcase, label: 'Campamentos', color: 'from-[#00C9A7] to-[#00E5BF]' },
  { icon: Heart, label: 'Centros de Tiempo Libre', color: 'from-[#FF6B9D] to-[#FF8FB8]' },
  { icon: Stethoscope, label: 'Aulas Hospitalarias', color: 'from-[#4DABF7] to-[#74C0FC]' },
  { icon: Lightbulb, label: 'Atención Temprana', color: 'from-[#FF922B] to-[#FFA94D]' },
];

const necesidades = [
  { icon: Briefcase, text: 'Ayudar a conciliar la vida laboral y familiar', color: 'bg-[#FF6B35]' },
  { icon: Gamepad2, text: 'Favorecer el ocio educativo', color: 'bg-[#845EC2]' },
  { icon: Heart, text: 'Apoyar a menores con necesidades especiales', color: 'bg-[#00C9A7]' },
  { icon: Building2, text: 'Mejorar la atención a la infancia en un barrio o ciudad', color: 'bg-[#FF6B9D]' },
];

export default function PaiSection() {
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
      id="pai" 
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#845EC2]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#845EC2]/10 rounded-full px-4 py-2 mb-4">
            <FileText className="w-5 h-5 text-[#FF6B35]" />
            <span className="text-sm font-bold text-[#FF6B35]">Sección 1</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ¿Qué es un <span className="text-gradient-coral">PAI</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proyecto de Atención a la Infancia en el ámbito no formal
          </p>
        </div>

        {/* Main definition card */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8F5A] rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-x-10 translate-y-10" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Definición</h3>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                Un <strong>PAI</strong> es un documento o plan donde se organiza una intervención 
                para trabajar con niños y niñas en un contexto que <strong>no es la escuela</strong>.
              </p>
              
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="font-semibold text-[#FFE66D] mb-2">Ejemplos de contextos:</p>
                <p className="text-white/90">Un campamento, una ludoteca o un programa de verano.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Function section */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Su función principal</h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Responder a una <strong>necesidad real</strong> de la infancia y sus familias
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {necesidades.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 card-interactive hover:border-[#FF6B35]/30 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-800 font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contexts */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Dónde se aplica?</h3>
          <p className="text-center text-gray-600 mb-8">
            Contextos de <strong>educación no formal</strong>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {contextos.map((ctx, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-card border border-gray-100 card-interactive hover:border-transparent hover:shadow-glow-coral group"
              >
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${ctx.color} group-hover:scale-110 transition-transform`}>
                  <ctx.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-800">{ctx.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary box */}
        <div className={`mt-12 max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#FFE66D]/20 to-[#FF6B35]/10 rounded-2xl p-6 border-l-4 border-[#FF6B35]">
            <p className="text-lg font-bold text-gray-900">
              <span className="text-[#FF6B35]">En resumen:</span> Un PAI sirve para{' '}
              <span className="underline decoration-[#FF6B35] decoration-4 underline-offset-2">ordenar</span>,{' '}
              <span className="underline decoration-[#845EC2] decoration-4 underline-offset-2">planificar</span> y{' '}
              <span className="underline decoration-[#00C9A7] decoration-4 underline-offset-2">justificar</span> todo lo que vamos a hacer con la infancia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
