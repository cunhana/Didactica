
import React from 'react';
import { Activity } from '../types';

interface Props {
  activity: Activity;
  onClick: (activity: Activity) => void;
}

export const ActivityCard: React.FC<Props> = ({ activity, onClick }) => {
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700 hover:bg-emerald-100/50',
    sky: 'bg-sky-50 border-sky-100 text-sky-700 hover:bg-sky-100/50',
    violet: 'bg-violet-50 border-violet-100 text-violet-700 hover:bg-violet-100/50',
    rose: 'bg-rose-50 border-rose-100 text-rose-700 hover:bg-rose-100/50',
  };

  const badgeMap: Record<string, string> = {
    emerald: 'bg-emerald-500',
    sky: 'bg-sky-500',
    violet: 'bg-violet-500',
    rose: 'bg-rose-500',
  };

  return (
    <button 
      onClick={() => onClick(activity)}
      className={`group w-full text-left p-6 rounded-[2rem] border shadow-sm transition-all hover:scale-[1.02] hover:shadow-xl ${colorMap[activity.color]}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-white rounded-2xl shadow-sm">
          {activity.icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${badgeMap[activity.color]}`}>
          {activity.type}
        </span>
      </div>
      
      <h3 className="text-xl font-black mb-3 group-hover:translate-x-1 transition-transform">{activity.title}</h3>
      
      <p className="text-sm font-medium leading-relaxed opacity-80 line-clamp-2 mb-6">
        {activity.objective}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-current/10">
        <span className="text-xs font-bold opacity-60 uppercase tracking-widest">{activity.timing}</span>
        <div className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-current">
          Ver detalles
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
    </button>
  );
};
