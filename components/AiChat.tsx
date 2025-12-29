
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAiTwin } from '../services/geminiService';
import { Message } from '../types';

const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Protocol initialized. I am Ali's digital echo. How can I assist your inquiry?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await chatWithAiTwin(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end">
      {isOpen && (
        <div className="glass-panel w-80 md:w-[400px] h-[550px] rounded-3xl mb-4 flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-cyan-500/20">
          {/* Header */}
          <div className="p-6 bg-slate-900/80 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                <i className="fa-solid fa-brain text-white text-lg z-10"></i>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-transparent opacity-50 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-sm font-bold syncopate uppercase tracking-widest">Digital Echo</h3>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span className="text-[9px] text-cyan-500 uppercase tracking-[0.2em] font-bold">Sync Active</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors">
              <i className="fa-solid fa-chevron-down text-slate-500"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-slate-950/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-cyan-600 text-white rounded-tr-none shadow-[0_0_20px_rgba(8,145,178,0.3)]' 
                    : 'bg-slate-800/80 text-slate-200 border border-slate-700 rounded-tl-none'
                }`}>
                  <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-1">
                    {msg.role === 'user' ? 'Client' : 'Echo'}
                  </div>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-slate-800 bg-slate-900/50 backdrop-blur-md">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="TRANSMIT MESSAGE..."
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 pl-6 pr-14 text-xs font-mono tracking-widest focus:outline-none focus:border-cyan-500 transition-all uppercase placeholder:opacity-30"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center hover:bg-cyan-400 disabled:opacity-30 transition-all shadow-lg"
              >
                <i className="fa-solid fa-arrow-up text-white text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Futuristic Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-cyan-600'
        }`}
      >
        <div className="absolute inset-0 bg-cyan-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bolt'} text-2xl text-white relative z-10`}></i>
      </button>
    </div>
  );
};

export default AiChat;
