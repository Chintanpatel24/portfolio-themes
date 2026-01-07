
import React from 'react';
import { PortfolioData } from '../../types';

export const Claymorphism: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#A8D1E7] p-8 md:p-16 font-['Inter']">
      <div className="max-w-5xl mx-auto">
        <header className="bg-white/80 rounded-[3rem] p-12 shadow-[20px_20px_40px_rgba(0,0,0,0.1),inset_-10px_-10px_20px_rgba(0,0,0,0.05),inset_10px_10px_20px_rgba(255,255,255,0.8)] border-4 border-white mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-[#2D3142] mb-6">{data.name}</h1>
          <div className="inline-block px-6 py-2 bg-[#FFD166] rounded-full shadow-[8px_8px_16px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.5)] font-bold text-[#2D3142] mb-8">
            {data.role}
          </div>
          <p className="text-xl text-[#2D3142]/80 leading-relaxed max-w-2xl mx-auto">
            {data.about}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {data.projects.map((p, i) => (
            <div key={i} className={`rounded-[2.5rem] p-4 shadow-[15px_15px_30px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(0,0,0,0.05),inset_8px_8px_16px_rgba(255,255,255,0.5)] border-4 border-white transition-transform hover:scale-105 ${i % 3 === 0 ? 'bg-[#FF8FAB]' : i % 3 === 1 ? 'bg-[#98F5E1]' : 'bg-[#B8C0FF]'}`}>
              <div className="bg-white/40 rounded-[2rem] p-2 mb-6">
                <img src={p.image} alt={p.title} className="w-full aspect-square object-cover rounded-[1.5rem]" />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-black text-[#2D3142] mb-2">{p.title}</h3>
                <p className="text-sm text-[#2D3142]/70 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => <span key={t} className="text-[10px] bg-white/50 px-2 py-1 rounded-full font-bold">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white/80 rounded-[3rem] p-10 shadow-[20px_20px_40px_rgba(0,0,0,0.1),inset_-10px_-10px_20px_rgba(0,0,0,0.05),inset_10px_10px_20px_rgba(255,255,255,0.8)] border-4 border-white">
          <h2 className="text-3xl font-black text-[#2D3142] mb-8 text-center">My Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map(s => (
              <span key={s} className="px-6 py-3 bg-[#EEF4ED] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.05),inset_-3px_-3px_6px_rgba(0,0,0,0.05),inset_3px_3px_6px_rgba(255,255,255,0.8)] font-bold text-[#2D3142]">
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
