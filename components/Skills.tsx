
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-32 px-6 bg-slate-900/40 relative">
      <div className="grid-bg absolute inset-0 -z-10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold syncopate mb-4 tracking-tighter uppercase">Technical <span className="gradient-text">Specs</span></h2>
          <p className="text-slate-500 uppercase tracking-[0.3em] text-xs">Processing advanced technology load...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="glass-panel p-8 rounded-3xl border-t-2 border-cyan-500 group">
              <h3 className="text-xs font-mono text-cyan-500 tracking-[0.3em] uppercase mb-8">{category}</h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="relative h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_#22d3ee]"
                          style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
