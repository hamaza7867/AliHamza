
import React from 'react';
import { USER_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div>
            <h1 className="text-6xl md:text-8xl font-black syncopate leading-tight mb-8">
                INITIATE <span className="gradient-text">COMMS.</span>
            </h1>
            <p className="text-slate-400 text-xl font-light max-w-md">
                Ready to elevate your digital infrastructure? The interface is open for direct transmission.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-cyan-500">
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <i className="fa-solid fa-envelope text-cyan-400 text-xl"></i>
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Electronic Mail</p>
                <a href={`mailto:${USER_INFO.email}`} className="text-xl md:text-2xl font-medium hover:text-cyan-400 transition-colors tracking-tight">
                  {USER_INFO.email}
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-purple-500">
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <i className="fa-solid fa-phone text-purple-400 text-xl"></i>
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Audio Line</p>
                <p className="text-xl md:text-2xl font-medium tracking-tight">
                  {USER_INFO.phone}
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-slate-500">
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-slate-400 text-xl"></i>
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Geographical Node</p>
                <p className="text-xl md:text-2xl font-medium tracking-tight">
                  {USER_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-[40px] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <i className="fa-solid fa-shield-halved text-cyan-500/20 text-6xl"></i>
          </div>
          
          <h3 className="text-2xl font-bold syncopate uppercase mb-10 tracking-tight">System Message</h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-2">Identity Signature</label>
              <input 
                type="text" 
                placeholder="YOUR NAME"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 px-6 text-sm font-mono focus:outline-none focus:border-cyan-500 transition-all text-white placeholder:opacity-20"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-2">Return Frequency (Email)</label>
              <input 
                type="email" 
                placeholder="YOUR_EMAIL@DOMAIN.COM"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 px-6 text-sm font-mono focus:outline-none focus:border-cyan-500 transition-all text-white placeholder:opacity-20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-2">Data Payload</label>
              <textarea 
                rows={4}
                placeholder="ENTER INQUIRY DATA..."
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 px-6 text-sm font-mono focus:outline-none focus:border-cyan-500 transition-all text-white placeholder:opacity-20 resize-none"
              ></textarea>
            </div>

            <button className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold syncopate uppercase tracking-widest text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:scale-[1.02] active:scale-95">
              Transmit Data <i className="fa-solid fa-paper-plane ml-2"></i>
            </button>
          </form>
          
          <div className="mt-10 flex justify-center gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
            <a href={USER_INFO.github} target="_blank"><i className="fa-brands fa-github text-2xl"></i></a>
            <a href={USER_INFO.linkedin} target="_blank"><i className="fa-brands fa-linkedin text-2xl"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
