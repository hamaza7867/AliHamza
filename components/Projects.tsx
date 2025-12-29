
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl font-bold syncopate uppercase mb-6 tracking-tighter">
            Digital <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-mono leading-loose">
            Explorations in AI automation, scalable POS systems, and performance-driven Shopify deployments.
          </p>
        </div>
        <div className="h-px flex-grow bg-white/10 mt-12 hidden md:block"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className="group relative">
            <div className="glass-panel rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold syncopate uppercase tracking-tight">{project.title}</h3>
                      <a href={project.link} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                          <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                      </a>
                  </div>
                  <p className="text-slate-400 mb-8 font-light text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-[9px] font-mono uppercase tracking-widest text-slate-300">
                              {tag}
                          </span>
                      ))}
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
