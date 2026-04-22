import { useEffect, useRef, useState } from 'react';
import { 
  LayoutTemplate, MapPin, FileCheck, Users, Target, 
  BookOpen, Clock, Package, ClipboardCheck, ChevronDown,
  UserCheck, Wrench, DollarSign, DoorOpen, Lightbulb
} from 'lucide-react';

const estructuraItems = [
  {
    id: 'naturaleza',
    icon: MapPin,
    title: 'Naturaleza o Contextualización',
    color: 'from-[#FF6B35] to-[#FF8F5A]',
    textColor: 'text-[#FF6B35]',
    borderColor: 'border-[#FF6B35]/30',
    question: '¿Qué es este proyecto y dónde se va a hacer?',
    content: [
      'De qué trata el proyecto',
      'A qué plan o programa pertenece',
      'En qué contexto se desarrolla',
      'Dónde está el centro',
      'Qué características tiene ese entorno',
    ],
    example: 'No es lo mismo hacer un proyecto en una ciudad grande que en un pueblo pequeño, porque las necesidades cambian.',
    tip: 'Esta parte responde a la pregunta: ¿qué es este proyecto y dónde se va a hacer?',
  },
  {
    id: 'fundamentacion',
    icon: FileCheck,
    title: 'Fundamentación o Justificación',
    color: 'from-[#845EC2] to-[#A178DF]',
    textColor: 'text-[#845EC2]',
    borderColor: 'border-[#845EC2]/30',
    question: '¿Por qué se hace el proyecto?',
    content: [
      'Análisis de la realidad',
      'Diagnóstico',
      'Necesidades detectadas',
      'Normativa',
      'DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades)',
    ],
    example: 'Esta parte demuestra que el proyecto no se hace "porque sí", sino porque realmente hace falta.',
    tip: 'No basta con decir "me parece buena idea". Hay que justificarlo con datos, necesidades o normativa.',
  },
  {
    id: 'destinatarios',
    icon: Users,
    title: 'Destinatarios/as',
    color: 'from-[#00C9A7] to-[#00E5BF]',
    textColor: 'text-[#00C9A7]',
    borderColor: 'border-[#00C9A7]/30',
    question: '¿Para quién va dirigido el proyecto?',
    content: [
      'Cuántos niños o niñas hay',
      'Cómo se agrupan',
      'Qué edad tienen',
      'Qué características evolutivas presentan',
      'Qué necesidades tienen',
    ],
    example: 'No se trabaja igual con niños de 3 años que con niños de 10 años.',
    tip: 'Hay que explicar para quién va dirigido el proyecto de forma detallada.',
  },
  {
    id: 'objetivos',
    icon: Target,
    title: 'Objetivos Operativos',
    color: 'from-[#FF6B9D] to-[#FF8FB8]',
    textColor: 'text-[#FF6B9D]',
    borderColor: 'border-[#FF6B9D]/30',
    question: '¿Qué se quiere conseguir?',
    content: [
      'Deben ser claros, medibles y observables',
      'Estructura: verbo en infinitivo + complemento directo + procedimiento',
    ],
    examples: [
      '"Desarrollar hábitos de higiene mediante rutinas diarias."',
      '"Favorecer la expresión oral a través de juegos de asamblea."',
    ],
    verbos: ['Desarrollar', 'Fomentar', 'Mejorar', 'Adquirir', 'Potenciar', 'Reforzar'],
    tip: 'Cada objetivo debe tener al menos una actividad relacionada.',
  },
  {
    id: 'metodologia',
    icon: BookOpen,
    title: 'Metodología y Actividades',
    color: 'from-[#FF922B] to-[#FFA94D]',
    textColor: 'text-[#FF922B]',
    borderColor: 'border-[#FF922B]/30',
    question: '¿Cómo se va a trabajar?',
    content: [
      'La metodología es la forma de enseñar o intervenir',
    ],
    metodologias: [
      { name: 'Lúdica', desc: 'A través del juego' },
      { name: 'Participativa', desc: 'Todos participan' },
      { name: 'Activa', desc: 'Aprender haciendo' },
      { name: 'Manipulativa', desc: 'Con materiales' },
      { name: 'Pedagógica', desc: 'Con intención educativa' },
      { name: 'Individualizada', desc: 'Adaptada a cada uno' },
      { name: 'Grupal', desc: 'Trabajo en equipo' },
    ],
    actividades: ['Juegos', 'Talleres', 'Dinámicas', 'Dramatizaciones', 'Excursiones'],
    tip: 'Las actividades son las acciones concretas que se hacen con esa metodología.',
  },
  {
    id: 'temporalizacion',
    icon: Clock,
    title: 'Temporalización',
    color: 'from-[#4DABF7] to-[#74C0FC]',
    textColor: 'text-[#4DABF7]',
    borderColor: 'border-[#4DABF7]/30',
    question: '¿Cuándo se va a hacer todo?',
    content: [
      'Calendario',
      'Duración',
      'Frecuencia',
      'Secuencia de actividades',
    ],
    example: 'Si un taller dura 4 semanas, hay que indicar qué se hace en cada semana y cuánto dura cada sesión.',
    tip: 'Debe quedar claro el cronograma completo del proyecto.',
  },
  {
    id: 'recursos',
    icon: Package,
    title: 'Recursos',
    color: 'from-[#51CF66] to-[#69DB7C]',
    textColor: 'text-[#51CF66]',
    borderColor: 'border-[#51CF66]/30',
    question: '¿Qué hace falta para llevarlo a cabo?',
    tip: 'Se dividen en varios tipos:',
    recursos: [
      {
        icon: UserCheck,
        title: 'Humanos',
        color: 'bg-[#FF6B35]',
        items: ['Educadores', 'Monitores', 'Maestros', 'Psicólogos', 'Cuidadores', 'Voluntarios'],
      },
      {
        icon: Wrench,
        title: 'Materiales',
        color: 'bg-[#845EC2]',
        items: ['Fungibles: papel, pintura, pegamento', 'No fungibles: mesas, sillas, juguetes, ordenadores'],
      },
      {
        icon: DollarSign,
        title: 'Económicos',
        color: 'bg-[#00C9A7]',
        items: ['El dinero necesario para hacer el proyecto'],
      },
      {
        icon: DoorOpen,
        title: 'Espaciales',
        color: 'bg-[#FF6B9D]',
        items: ['Aula', 'Patio', 'Sala polivalente', 'Parque', 'Comedor', 'Hospital'],
      },
    ],
  },
  {
    id: 'evaluacion',
    icon: ClipboardCheck,
    title: 'Evaluación del Proyecto',
    color: 'from-[#FF6B35] to-[#845EC2]',
    textColor: 'text-[#FF6B35]',
    borderColor: 'border-[#FF6B35]/30',
    question: '¿Ha funcionado el proyecto?',
    content: [
      'Se pueden evaluar las actividades',
      'Se puede evaluar el proyecto entero',
      'Se puede evaluar la práctica profesional',
    ],
    tecnicas: ['Observación', 'Listas de control', 'Escalas', 'Registros', 'Cuestionarios', 'Informes'],
    tip: 'Evaluar no es solo poner una nota. Es comprobar qué ha ido bien y qué se puede mejorar.',
  },
];

export default function EstructuraSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openItem, setOpenItem] = useState<string>('naturaleza');
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
      id="estructura" 
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF922B]/5 via-transparent to-[#845EC2]/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF922B]/10 to-[#4DABF7]/10 rounded-full px-4 py-2 mb-4">
            <LayoutTemplate className="w-5 h-5 text-[#FF922B]" />
            <span className="text-sm font-bold text-[#FF922B]">Sección 5</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Estructura de un <span className="text-gradient-orange">Proyecto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Las <strong>partes</strong> que debe tener un proyecto completo. ¡Muy importante para el examen!
          </p>
        </div>

        {/* Warning banner */}
        <div className={`mb-10 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#FFE66D] to-[#FF922B] rounded-2xl p-5 flex items-center gap-4 shadow-lg">
            <div className="p-3 bg-white/20 rounded-xl">
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <p className="font-bold text-lg">¡En examen suele caer!</p>
              <p className="text-white/90 text-sm">Memoriza bien estas 8 partes de la estructura de un proyecto.</p>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className={`max-w-4xl mx-auto space-y-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {estructuraItems.map((item, index) => (
            <div 
              key={item.id}
              className={`rounded-2xl border-2 ${openItem === item.id ? item.borderColor : 'border-gray-100'} overflow-hidden shadow-sm transition-all duration-300`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenItem(openItem === item.id ? '' : item.id)}
                className={`w-full flex items-center gap-4 p-5 text-left transition-all duration-300 ${
                  openItem === item.id ? 'bg-gradient-to-r ' + item.color + ' text-white' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${openItem === item.id ? 'bg-white/20' : 'bg-gradient-to-br ' + item.color} flex-shrink-0`}>
                  <item.icon className={`w-6 h-6 text-white`} />
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-bold uppercase tracking-wide ${openItem === item.id ? 'text-white/80' : 'text-gray-500'}`}>
                    Parte {index + 1}
                  </span>
                  <h3 className={`text-lg font-bold ${openItem === item.id ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openItem === item.id ? 'rotate-180 text-white' : 'text-gray-400'
                  }`} 
                />
              </button>

              {/* Accordion Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                openItem === item.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 bg-white">
                  {/* Question */}
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold mb-4`}>
                    {item.question}
                  </div>

                  {/* Content items */}
                  {item.content && (
                    <ul className="space-y-2 mb-4">
                      {item.content.map((c, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-gray-700">{c}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Verbos for objetivos */}
                  {item.verbos && (
                    <div className="mb-4">
                      <p className="font-bold text-gray-700 mb-2">Verbos comunes:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.verbos.map((verbo, i) => (
                          <span key={i} className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold`}>
                            {verbo}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Examples for objetivos */}
                  {item.examples && (
                    <div className="mb-4 space-y-2">
                      <p className="font-bold text-gray-700">Ejemplos:</p>
                      {item.examples.map((ex, i) => (
                        <div key={i} className={`p-3 rounded-xl bg-[#FF6B9D]/10 border-l-4 ${item.borderColor}`}>
                          <p className="text-gray-800 font-medium">{ex}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Metodologías */}
                  {item.metodologias && (
                    <div className="mb-4">
                      <p className="font-bold text-gray-700 mb-2">Tipos de metodología:</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {item.metodologias.map((met, i) => (
                          <div key={i} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                            <p className="font-bold text-gray-800">{met.name}</p>
                            <p className="text-xs text-gray-500">{met.desc}</p>
                          </div>
                        ))}
                      </div>
                      {item.actividades && (
                        <div className="mt-3">
                          <p className="font-bold text-gray-700 mb-2">Ejemplos de actividades:</p>
                          <div className="flex flex-wrap gap-2">
                            {item.actividades.map((act, i) => (
                              <span key={i} className={`px-3 py-1 rounded-full bg-[#FF922B]/10 text-[#FF922B] text-sm font-semibold`}>
                                {act}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Recursos grid */}
                  {item.recursos && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {item.recursos.map((recurso, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 ${recurso.color} rounded-xl`}>
                              <recurso.icon className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-800">Recursos {recurso.title}</h4>
                          </div>
                          <ul className="space-y-1">
                            {recurso.items.map((rItem, ri) => (
                              <li key={ri} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-gray-400 mt-1">•</span>
                                {rItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Técnicas de evaluación */}
                  {item.tecnicas && (
                    <div className="mb-4">
                      <p className="font-bold text-gray-700 mb-2">Técnicas e instrumentos:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tecnicas.map((tec, i) => (
                          <span key={i} className={`px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-semibold`}>
                            {tec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Example box */}
                  {item.example && (
                    <div className={`${item.textColor.replace('text-', 'bg-')}/10 rounded-2xl p-4 border-l-4 ${item.borderColor}`}>
                      <p className="text-sm font-bold text-gray-500 uppercase mb-1">Ejemplo</p>
                      <p className="text-gray-800 font-medium">{item.example}</p>
                    </div>
                  )}

                  {/* Tip */}
                  {item.tip && (
                    <div className="mt-4 flex items-start gap-3 bg-[#FFE66D]/15 rounded-xl p-4">
                      <Lightbulb className="w-5 h-5 text-[#FF922B] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm font-medium">{item.tip}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className={`mt-12 max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-center text-xl font-bold text-gray-900 mb-4">Resumen de la estructura</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {estructuraItems.map((item, index) => (
                <div key={item.id} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-700 hidden sm:inline">{item.title}</span>
                  {index < estructuraItems.length - 1 && (
                    <span className="text-gray-400 mx-1">→</span>
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
