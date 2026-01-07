
import React from 'react';
import { PortfolioData } from '../../types';

export const Cyberpunk: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#00f3ff] font-['JetBrains_Mono'] p-6 md:p-12 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-20 border-l-4 border-[#ff003c] pl-8">
          <div className="inline-block px-2 py-1 bg-[#ff003c] text-black text-xs font-bold mb-4">SYSTEM_ACCESS: GRANTED</div>
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-2 tracking-widest" 
              style={{ textShadow: '3px 3px 0px #ff003c' }}>{data.name}</h1>
          <p className="text-xl md:text-2xl text-[#ff003c] mb-6">/ {data.role} /</p>
          <p className="max-w-2xl text-[#00f3ff]/80 leading-relaxed border border-[#00f3ff]/20 p-4 bg-[#00f3ff]/5 backdrop-blur-sm">
            {data.about}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {data.projects.map((p, i) => (
            <div key={i} className="group relative border border-[#00f3ff]/30 p-2 hover:border-[#ff003c] transition-all duration-300">
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff003c] opacity-0 group-hover:opacity-100 transition-all" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff003c] opacity-0 group-hover:opacity-100 transition-all" />
              <img src={p.image} alt={p.title} className="w-full aspect-video object-cover mb-4 opacity-70 group-hover:opacity-100 transition-all" />
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff003c]" /> {p.title}
              </h3>
              <p className="text-[#00f3ff]/60 text-sm mb-4">{p.description}</p>
              <div className="flex gap-2">
                {p.tags.map(t => <span key={t} className="text-[10px] border border-[#00f3ff]/20 px-2 py-0.5 uppercase">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <section className="bg-[#ff003c]/10 border border-[#ff003c]/30 p-8 mb-20">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest border-b border-[#ff003c]/50 pb-2">Technical_Abilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.skills.map(s => (
              <div key={s} className="bg-black/50 border border-[#00f3ff]/20 p-4 hover:bg-[#00f3ff] hover:text-black transition-all cursor-crosshair">
                {s}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
