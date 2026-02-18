
import React from 'react';

const navItems = [
  { id: 'context', label: 'Contextualización' },
  { id: 'normative', label: 'Fundamentación' },
  { id: 'description', label: 'Descripción' },
  { id: 'objectives', label: 'Competencias' },
  { id: 'activities', label: 'Actividades' },
  { id: 'evaluation', label: 'Evaluación' },
  { id: 'diversity', label: 'Diversidad' },
];

export const Navigation: React.FC = () => {
  return (
    <nav className="hidden lg:block sticky top-8 w-64 h-fit space-y-2">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Navegación</h3>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
