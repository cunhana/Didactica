
import React, { useState } from 'react';
import { getTeachingAdvice } from '../services/geminiService';

export const Assistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setLoading(true);
    const advice = await getTeachingAdvice(prompt);
    setResponse(advice || 'No pude obtener respuesta.');
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-indigo-600 p-6 text-white">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Asistente Docente AI
        </h3>
        <p className="text-indigo-100 text-xs mt-1">Pregúntame cómo adaptar esta unidad o ideas extra.</p>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ej: ¿Cómo adapto la actividad 1 para un niño con autismo?"
            className="w-full p-4 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none h-24 mb-3"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${loading ? 'bg-slate-100 text-slate-400' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'}`}
          >
            {loading ? (
              <svg className="animate-spin h-4 w-4 text-slate-400" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : 'Consultar Asistente'}
          </button>
        </form>

        {response && (
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2">Respuesta de Beatriz AI:</h4>
            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap italic">
              "{response}"
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
