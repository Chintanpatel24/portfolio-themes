
import React from 'react';
import { PortfolioData } from '../../types';

export const Glassmorphism: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-['Inter'] relative p-6 md:p-12 overflow-hidden">
      {/* Dynamic Background Circles */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px] opacity-20" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[150px] opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="py-20 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-sm">
            Available for new opportunities
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent tracking-tight">
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {data.about}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {data.projects.map((p, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
              <div className="overflow-hidden rounded-2xl mb-6">
                <img src={p.image} alt={p.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-3xl font-bold mb-3">{p.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-12 text-center mb-20">
          <h2 className="text-3xl font-bold mb-10">Stack & Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map(s => (
              <span key={s} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
