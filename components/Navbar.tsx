
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { USER_INFO } from '../constants';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Core', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Stack', path: '/skills' },
    { label: 'Journey', path: '/journey' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold syncopate text-sm rounded-lg hover:rotate-12 transition-transform">
            AH
          </div>
          <span className="hidden sm:block text-[10px] font-bold syncopate tracking-[0.3em] uppercase">Architecture</span>
        </Link>

        <div className="glass px-8 py-3 rounded-full flex gap-8 items-center border border-white/5 shadow-2xl">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400' : 'text-white/40'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link to="/connect" className="hidden md:flex items-center gap-2 group">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">Sync Comms</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
            <i className="fa-solid fa-arrow-right text-[10px] -rotate-45 group-hover:rotate-0 transition-transform"></i>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
