
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ActivityCard } from './components/ActivityCard';
import { ActivityDetails } from './components/ActivityDetails';
import { Assistant } from './components/Assistant';
import { ACTIVITIES, SABERES_BASICOS } from './constants';
import { Activity } from './types';

const App: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <div className="min-h-screen pb-20 selection:bg-indigo-100 selection:text-indigo-900">
      {selectedActivity && (
        <ActivityDetails 
          activity={selectedActivity} 
          onClose={() => setSelectedActivity(null)} 
        />
      )}

      {/* Hero Section */}
      <header className="relative bg-white pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-rose-400 to-orange-300 rounded-full blur-3xl -ml-20 -mb-20" />
        </div>
        
        <div className="max-w-6xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-xl">
            S.A. LOMLOE • Igualdad de Género
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-10 tracking-tighter">
            En mi clase <br />
            <span className="gradient-text">cabemos todos</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Propuesta didáctica para Infantil (5 años) diseñada para derribar muros y construir 
            identidades libres, seguras y corresponsables.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: 'Centro', val: 'IES Avempace' },
              { label: 'Nivel', val: '5 Años' },
              { label: 'Eje', val: 'Coeducación' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2">{item.label}</span>
                <span className="text-lg font-bold text-slate-800">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-64 flex-shrink-0">
            <Navigation />
          </div>

          <div className="flex-1 space-y-20">
            
            {/* Introducción / Justificación */}
            <section id="context" className="scroll-mt-10">
              <div className="glass-card rounded-[3rem] p-10 md:p-14">
                <h2 className="text-4xl font-black mb-8 flex items-center gap-4">
                  <span className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl">01</span>
                  Justificación
                </h2>
                <div className="prose prose-slate max-w-none space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    La coeducación en la etapa de infantil no es una opción, es un <strong>derecho</strong>. Esta S.A. responde a la necesidad de intervenir antes de que los estereotipos cristalicen en la identidad de los niños y niñas.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div className="p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100">
                      <h4 className="font-black text-indigo-900 mb-3 uppercase text-xs tracking-widest">El Problema</h4>
                      <p className="text-sm text-indigo-700 leading-relaxed">Detección de juegos segregados y lenguaje sexista en las rutinas de aula.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-rose-50 border border-rose-100">
                      <h4 className="font-black text-rose-900 mb-3 uppercase text-xs tracking-widest">La Solución</h4>
                      <p className="text-sm text-rose-700 leading-relaxed">Intervención directa a través del juego simbólico y la revisión literaria.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Saberes Básicos */}
            <section id="normative" className="scroll-mt-10">
              <div className="glass-card rounded-[3rem] p-10 md:p-14">
                <h2 className="text-4xl font-black mb-8 flex items-center gap-4 text-emerald-600">
                  <span className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl">02</span>
                  Saberes Básicos
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SABERES_BASICOS.map((saber, i) => (
                    <li key={i} className="flex items-center gap-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-500">✔</span>
                      <span className="text-sm font-bold text-emerald-900">{saber}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Actividades Grid */}
            <section id="activities" className="scroll-mt-10">
              <div className="mb-12">
                <h2 className="text-4xl font-black mb-4">Secuencia Didáctica</h2>
                <p className="text-slate-500 font-medium italic">Haz clic en cada tarjeta para explorar la actividad como una página detallada.</p>
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

            {/* Evaluación */}
            <section id="evaluation" className="scroll-mt-10">
              <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl">
                <h2 className="text-4xl font-black mb-10">Criterios de Éxito</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { t: 'Lenguaje', d: 'Utiliza formas de tratamiento igualitarias y reconoce sesgos.' },
                    { t: 'Empatía', d: 'Identifica emociones asociadas a la exclusión por género.' },
                    { t: 'Autonomía', d: 'Elige actividades basándose en sus gustos reales, no en roles.' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10">
                      <div className="text-indigo-400 text-3xl mb-4">★</div>
                      <h4 className="font-bold mb-2 uppercase text-[10px] tracking-widest text-slate-400">{item.t}</h4>
                      <p className="text-sm font-medium text-slate-300 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <footer className="pt-20 border-t border-slate-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Diseño Pedagógico</p>
                  <p className="text-lg font-bold text-slate-900">Beatriz Gracia Sarasa</p>
                  <p className="text-sm text-slate-400 italic">Maestra Especialista en Educación Infantil</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">LO</div>
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">ML</div>
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">OE</div>
                </div>
              </div>
            </footer>
          </div>

          <aside className="lg:w-80 space-y-8">
            <div className="sticky top-10">
              <Assistant />
              
              <div className="mt-8 p-10 rounded-[2.5rem] bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                  <span>💡</span> Tip DUA
                </h4>
                <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                  "Ofrece siempre varias formas de contar lo aprendido: un dibujo, una frase, un gesto o una canción. La igualdad empieza en la libertad de expresión."
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
