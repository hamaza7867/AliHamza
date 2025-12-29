
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold syncopate uppercase mb-4 tracking-tighter">Timeline <span className="gradient-text">Protocol</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative group">
              <div className="glass-panel p-10 rounded-3xl border-l-4 border-purple-500 transition-all hover:translate-x-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase syncopate tracking-tight mb-1">{exp.role}</h3>
                        <p className="text-purple-400 font-mono text-xs uppercase tracking-widest italic">{exp.company}</p>
                    </div>
                    <div className="px-4 py-1 bg-slate-800 rounded-full border border-slate-700">
                        <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">{exp.period}</span>
                    </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 group-hover/item:shadow-[0_0_8px_#d946ef]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
