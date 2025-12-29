
import React from 'react';
import { Link } from 'react-router-dom';
import { USER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black/40 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold syncopate text-xs rounded">AH</div>
              <span className="text-sm font-bold syncopate tracking-[0.2em] uppercase">Ali Hamza</span>
            </Link>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed">
              Crafting high-performance digital solutions with a focus on automation, scalability, and minimalist aesthetics.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Core</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="hover:text-cyan-400 transition-colors">Stack</Link></li>
              <li><Link to="/connect" className="hover:text-cyan-400 transition-colors">Connect</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Social Nodes</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href={USER_INFO.github} target="_blank" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              <li><a href={USER_INFO.linkedin} target="_blank" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">X / Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Ali Hamza // Built with Precision
          </div>
          <div className="flex gap-10">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Node_PK_LHE</span>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Status_Green</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
