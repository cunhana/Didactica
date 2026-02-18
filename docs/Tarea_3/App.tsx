
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ActivityCard } from './components/ActivityCard';
import { ActivityDetails } from './components/ActivityDetails';
import { Assistant } from './components/Assistant';
import { ACTIVITIES } from './constants';
import { Activity } from './types';

const App: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <div className="min-h-screen pb-20">
      {/* Activity "Page" Detail Modal */}
      {selectedActivity && (
        <ActivityDetails 
          activity={selectedActivity} 
          onClose={() => setSelectedActivity(null)} 
        />
      )}

      {/* Hero Header */}
      <header className="relative bg-white pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            Situación de Aprendizaje LOMLOE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
            En mi clase cabemos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-rose-500 to-yellow-500">
              todas las personas
            </span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Un proyecto coeducativo para Infantil 5 años centrado en la libertad de elección, 
            el lenguaje inclusivo y la ruptura de techos de cristal desde la infancia.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-500">
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-[10px] uppercase font-bold mb-1 tracking-tighter">Tutora</span>
              <span className="text-slate-900">Beatriz Gracia Sarasa</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-[10px] uppercase font-bold mb-1 tracking-tighter">Nivel</span>
              <span className="text-slate-900">Infantil (5 Años)</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-[10px] uppercase font-bold mb-1 tracking-tighter">Eje</span>
              <span className="text-slate-900">Igualdad de Género</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 -mt-16 relative">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <Navigation />

          <div className="flex-1 space-y-16">
            
            {/* Context Section */}
            <section id="context" className="scroll-mt-8">
              <div className="glass-card rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Justificación y Contexto</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                  <p>
                    La coeducación no es solo la convivencia en el mismo aula, sino el cuestionamiento activo de las desigualdades. En nuestra aula de 5 años, hemos detectado que el juego simbólico a menudo replica roles tradicionales rígidos. 
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 my-8">
                    <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100">
                      <h4 className="text-sky-800 font-bold mb-2">Punto de Partida</h4>
                      <p className="text-xs text-sky-700 font-medium">Observación de sesgos en el patio y rincones: "Las niñas no juegan al fútbol", "Los niños no cuidan bebés".</p>
                    </div>
                    <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100">
                      <h4 className="text-rose-800 font-bold mb-2">Finalidad</h4>
                      <p className="text-xs text-rose-700 font-medium">Construir una identidad personal libre de mandatos de género y fomentar la empatía y los cuidados.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Normative Section */}
            <section id="normative" className="scroll-mt-8">
              <div className="glass-card rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Fundamentación Pedagógica</h2>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold uppercase text-slate-400 mb-6 tracking-widest">Competencias Clave (LOMLOE)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                        <span className="text-emerald-500 text-lg">⚖️</span>
                        <div>
                          <p className="font-bold text-xs">Ciudadana</p>
                          <p className="text-[10px] text-slate-500">Respeto por la diversidad y la igualdad.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                        <span className="text-indigo-500 text-lg">🗣️</span>
                        <div>
                          <p className="font-bold text-xs">Comunicativa</p>
                          <p className="text-[10px] text-slate-500">Uso del lenguaje para la paz e inclusión.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                        <span className="text-rose-500 text-lg">🧠</span>
                        <div>
                          <p className="font-bold text-xs">Personal / Social</p>
                          <p className="text-[10px] text-slate-500">Autonomía y gestión de emociones.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Activities Grid Section */}
            <section id="activities" className="scroll-mt-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-white shadow-lg shadow-yellow-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 19 7.5 19s3.332-.477 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 19 16.5 19c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Proyecto de Actividades</h2>
                  <p className="text-slate-500 text-sm mt-1">Haz clic en cada tarjeta para ver la planificación detallada por "página".</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {ACTIVITIES.map((act) => (
                  <ActivityCard 
                    key={act.id} 
                    activity={act} 
                    onClick={(a) => setSelectedActivity(a)}
                  />
                ))}
              </div>
            </section>

            {/* Evaluation & Rubric */}
            <section id="evaluation" className="scroll-mt-8">
              <div className="glass-card rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200/50">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-white shadow-lg shadow-slate-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Evaluación del Proyecto</h2>
                </div>

                <div className="overflow-x-auto rounded-3xl border border-slate-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                      <tr>
                        <th className="px-6 py-4">Criterio</th>
                        <th className="px-6 py-4">Indicador de Éxito</th>
                        <th className="px-6 py-4">Técnica</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-6 py-4 font-bold">Respeto y Libertad</td>
                        <td className="px-6 py-4">Elige juegos y rincones sin aludir al género del material.</td>
                        <td className="px-6 py-4">Registro anecdótico</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold">Lenguaje Inclusivo</td>
                        <td className="px-6 py-4">Utiliza formas inclusivas ("todos y todas", "infancia").</td>
                        <td className="px-6 py-4">Observación sistemática</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold">Sentido Crítico</td>
                        <td className="px-6 py-4">Identifica estereotipos en cuentos o publicidad.</td>
                        <td className="px-6 py-4">Escala de valoración</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Diversity Section */}
            <section id="diversity" className="scroll-mt-8">
              <div className="bg-gradient-to-r from-teal-400 via-emerald-500 to-indigo-500 rounded-[2.5rem] p-8 md:p-12 text-white">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h2 className="text-3xl font-black mb-6 italic">En nuestra clase cabemos todos</h2>
                    <p className="text-emerald-50 leading-relaxed mb-6 font-medium">
                      La atención a la diversidad es transversal. Aplicamos los principios del **Diseño Universal para el Aprendizaje (DUA)**, ofreciendo múltiples medios de representación (pictogramas, audio, tacto), de acción y expresión (plástica, verbal, corporal) y de implicación (rincones de interés libre).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase">Pictogramas ARASAAC</span>
                      <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase">Aprendizaje Cooperativo</span>
                      <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase">Enfoque DUA</span>
                    </div>
                  </div>
                  <div className="w-full md:w-64 aspect-square bg-white/10 rounded-[3rem] flex items-center justify-center text-7xl animate-pulse backdrop-blur-md border border-white/20">
                    🧩
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
              <div className="text-[10px] space-y-1 text-center md:text-left">
                <p className="font-bold text-slate-500 uppercase">Situación de Aprendizaje diseñada por Beatriz Gracia Sarasa</p>
                <p>© 2025 • Todos los materiales bajo licencia Creative Commons (BY-NC-SA)</p>
              </div>
              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">A</span>
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">V</span>
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">E</span>
              </div>
            </footer>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:w-80 space-y-6">
            <div className="sticky top-8">
              <Assistant />
              
              <div className="mt-8 p-6 bg-rose-50 rounded-[2rem] border border-rose-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                </div>
                <h4 className="text-sm font-black text-rose-800 mb-2 flex items-center gap-2">
                  <span className="animate-bounce">👓</span> Gafas Coeducativas
                </h4>
                <p className="text-xs text-rose-700 leading-relaxed font-medium">
                  "No se trata de cambiar a los niños, sino de cambiar el mundo que los limita." 
                  Usa esta guía para mirar tu aula con nuevos ojos.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default App;
