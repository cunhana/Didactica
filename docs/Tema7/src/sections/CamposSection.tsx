import { useEffect, useRef, useState } from 'react';
import { 
  Building2, GraduationCap, HeartHandshake, Gamepad2, Tent, TreePine, School, 
  Stethoscope, Users, Baby, Shield, Lightbulb 
} from 'lucide-react';

const camposSocioeducativos = [
  { icon: Gamepad2, label: 'Ludotecas', color: 'from-[#FF6B35] to-[#FF8F5A]', bg: 'bg-[#FF6B35]' },
  { icon: GraduationCap, label: 'Centros de Tiempo Libre', color: 'from-[#845EC2] to-[#A178DF]', bg: 'bg-[#845EC2]' },
  { icon: Tent, label: 'Colonias', color: 'from-[#00C9A7] to-[#00E5BF]', bg: 'bg-[#00C9A7]' },
  { icon: TreePine, label: 'Campus', color: 'from-[#FF6B9D] to-[#FF8FB8]', bg: 'bg-[#FF6B9D]' },
  { icon: School, label: 'Granjas-Escuela', color: 'from-[#FF922B] to-[#FFA94D]', bg: 'bg-[#FF922B]' },
];

const camposAsistenciales = [
  { icon: Stethoscope, label: 'Aulas Hospitalarias', color: 'from-[#4DABF7] to-[#74C0FC]', bg: 'bg-[#4DABF7]' },
  { icon: Users, label: 'Espacios de Encuentro Familiar', color: 'from-[#51CF66] to-[#69DB7C]', bg: 'bg-[#51CF66]' },
  { icon: Shield, label: 'Centros de Acogida y Protección', color: 'from-[#FF6B35] to-[#FF8F5A]', bg: 'bg-[#FF6B35]' },
  { icon: Baby, label: 'Centros de Atención Temprana', color: 'from-[#845EC2] to-[#A178DF]', bg: 'bg-[#845EC2]' },
];

export default function CamposSection() {
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
      id="campos" 
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 107, 53, 0.08) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B9D]/10 to-[#FF922B]/10 rounded-full px-4 py-2 mb-4">
            <Building2 className="w-5 h-5 text-[#FF6B9D]" />
            <span className="text-sm font-bold text-[#FF6B9D]">Sección 4</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Campos o <span className="text-gradient-pink">Sectores</span> de Trabajo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Los lugares o contextos donde se hacen proyectos de educación no formal
          </p>
        </div>

        {/* Two types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Socioeducativos */}
          <div className={`bg-white rounded-3xl shadow-card border-2 border-[#00C9A7]/20 overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-[#00C9A7] to-[#00E5BF] p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold bg-white/25 px-2 py-0.5 rounded-full uppercase tracking-wide">Tipo A</span>
                  <h3 className="text-2xl font-bold mt-1">Carácter Socioeducativo</h3>
                </div>
              </div>
              <p className="mt-3 text-white/90">
                El objetivo principal es <strong>educar, divertir, socializar</strong> y enseñar mediante actividades.
              </p>
            </div>
            
            <div className="p-6">
              <p className="text-sm font-bold text-gray-500 uppercase mb-4">En estos lugares los niños aprenden jugando y viviendo experiencias.</p>
              
              <div className="space-y-3">
                {camposSocioeducativos.map((campo, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white border border-transparent hover:border-gray-100 transition-all duration-300 group card-interactive"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${campo.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <campo.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">{campo.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Asistenciales */}
          <div className={`bg-white rounded-3xl shadow-card border-2 border-[#4DABF7]/20 overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold bg-white/25 px-2 py-0.5 rounded-full uppercase tracking-wide">Tipo B</span>
                  <h3 className="text-2xl font-bold mt-1">Carácter Asistencial</h3>
                </div>
              </div>
              <p className="mt-3 text-white/90">
                La prioridad es más de <strong>apoyo, cuidado o protección</strong>.
              </p>
            </div>
            
            <div className="p-6">
              <p className="text-sm font-bold text-gray-500 uppercase mb-4">En estos centros se atienden necesidades más específicas y, muchas veces, más delicadas.</p>
              
              <div className="space-y-3">
                {camposAsistenciales.map((campo, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white border border-transparent hover:border-gray-100 transition-all duration-300 group card-interactive"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${campo.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <campo.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">{campo.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison note */}
        <div className={`mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#FFE66D]/20 via-[#FFE66D]/10 to-[#FF6B35]/10 rounded-3xl p-8 border border-[#FFE66D]/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-[#FFE66D] rounded-2xl shadow-lg">
                <Lightbulb className="w-10 h-10 text-gray-800" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diferencia clave</h3>
                <p className="text-gray-700">
                  Los centros <strong>socioeducativos</strong> se centran en el aprendizaje y desarrollo a través del juego, 
                  mientras que los <strong>asistenciales</strong> priorizan el cuidado y apoyo a necesidades especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
