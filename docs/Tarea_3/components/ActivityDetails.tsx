
import React from 'react';
import { Activity } from '../types';

interface Props {
  activity: Activity;
  onClose: () => void;
}

export const ActivityDetails: React.FC<Props> = ({ activity, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative">
        {/* Header Color Bar */}
        <div className={`h-4 w-full bg-${activity.color}-500`} />
        
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-full bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-500 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            <div className={`w-20 h-20 rounded-3xl bg-${activity.color}-50 flex items-center justify-center flex-shrink-0 shadow-inner`}>
              {activity.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-${activity.color}-500`}>
                  Etapa: {activity.type}
                </span>
                <span className="text-sm font-medium text-slate-400">{activity.timing}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">{activity.title}</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Desarrollo Paso a Paso</h3>
                <div className="space-y-6">
                  {activity.description.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className={`w-8 h-8 rounded-full bg-${activity.color}-50 text-${activity.color}-600 font-bold flex items-center justify-center flex-shrink-0 text-sm`}>
                        {idx + 1}
                      </div>
                      <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className={`p-6 rounded-3xl bg-${activity.color}-50/50 border border-${activity.color}-100`}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Atención a la Diversidad</h3>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  {activity.adaptations}
                </p>
              </section>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Materiales Necesarios</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {activity.materials.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-${activity.color}-400`} />
                      {m}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Logística</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Espacio</p>
                    <p className="text-sm font-bold text-slate-800">{activity.space}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Agrupamiento</p>
                    <p className="text-sm font-bold text-slate-800">{activity.grouping}</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Criterio Evaluación</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl">
                  {activity.evaluation}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
