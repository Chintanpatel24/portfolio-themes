
import React from 'react';
import { PortfolioData } from '../../types';

export const Aurora: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-['Space_Grotesk'] p-6 md:p-12 relative overflow-hidden">
      {/* Animated Aurora Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <nav className="flex justify-between items-center py-8 mb-20">
          <span className="text-2xl font-bold tracking-tighter">AR.</span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </nav>

        <header className="mb-32">
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-12">
            HELLO,<br />I'M ALEX.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-2xl text-slate-400 font-light max-w-xl leading-relaxed">
              {data.about}
            </p>
            <div className="h-full w-px bg-white/10 hidden md:block" />
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold block">Status</span>
              <span className="text-lg">Exploring New Dimensions</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-32 mb-40">
          {data.projects.map((p, i) => (
            <div key={i} className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`overflow-hidden rounded-[2rem] bg-slate-900 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img src={p.image} alt={p.title} className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="space-y-6">
                <span className="text-sm font-mono text-indigo-400">Project_0{i + 1}</span>
                <h3 className="text-5xl font-bold tracking-tight">{p.title}</h3>
                <p className="text-xl text-slate-400 leading-relaxed">{p.description}</p>
                <div className="flex gap-4 pt-4">
                  {p.tags.slice(0, 3).map(t => <span key={t} className="text-xs border border-white/20 px-3 py-1 rounded-full">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
