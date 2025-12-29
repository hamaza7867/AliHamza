
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import Contact from './components/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <div className="page-fade-in">
    <Hero />
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="h-px w-20 bg-cyan-500"></div>
          <h2 className="text-4xl md:text-5xl font-bold syncopate uppercase leading-tight tracking-tighter">
            Architecting <br/> <span className="text-cyan-400">Digital Flow</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            I specialize in building complex, automated systems that feel simple. 
            From AI-driven workflows with <b>n8n</b> to high-performance <b>Docker</b> pipelines, 
            my approach combines rigorous engineering with elegant minimalist design.
          </p>
          <div className="pt-4">
             <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-500 mb-4">Current_Location</div>
             <div className="text-xl font-medium">Mansoorah, Lahore, Pakistan</div>
          </div>
        </div>
        <div className="glass p-12 rounded-[2rem] border-white/5 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <i className="fa-solid fa-quote-right text-6xl"></i>
          </div>
          <p className="text-2xl font-light italic leading-snug">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">AH</div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest">Ali Hamza</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest">Lead Developer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#020204]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<div className="page-fade-in"><Projects /></div>} />
            <Route path="/skills" element={<div className="page-fade-in"><Skills /></div>} />
            <Route path="/journey" element={<div className="page-fade-in"><Experience /></div>} />
            <Route path="/connect" element={<div className="page-fade-in"><Contact /></div>} />
          </Routes>
        </main>

        <Footer />
        <AiChat />
      </div>
    </BrowserRouter>
  );
};

export default App;
