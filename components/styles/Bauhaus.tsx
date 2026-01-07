
import React from 'react';
import { PortfolioData } from '../../types';

export const Bauhaus: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#F5F5F1] text-black font-['Inter'] flex">
      <div className="w-24 border-r-4 border-black hidden lg:flex flex-col items-center py-12 gap-8 sticky top-0 h-screen">
        <div className="w-12 h-12 bg-[#E63946] rounded-full border-4 border-black" />
        <div className="w-12 h-12 bg-[#1D3557] border-4 border-black" />
        <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[40px] border-b-[#F4A261] relative after:content-[''] after:absolute after:top-[4px] after:left-[-20px] after:border-l-[20px] after:border-l-transparent after:border-r-[20px] after:border-r-transparent after:border-b-[34px] after:border-b-[#F5F5F1] after:z-[-1] before:content-[''] before:absolute before:top-[-4px] before:left-[-24px] before:border-l-[24px] before:border-l-transparent before:border-r-[24px] before:border-r-transparent before:border-b-[40px] before:border-b-black before:z-[-2]" />
      </div>
      
      <div className="flex-1 p-8 md:p-20">
        <header className="mb-32 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1D3557] opacity-10 rounded-full" />
          <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none mb-4 relative z-10">{data.name.split(' ')[0]}<br/>{data.name.split(' ')[1]}</h1>
          <div className="h-4 w-full bg-[#E63946] border-y-4 border-black mb-12" />
          <p className="text-2xl font-bold uppercase tracking-[0.2em] mb-8">{data.role}</p>
          <p className="text-xl max-w-2xl leading-relaxed border-l-8 border-[#F4A261] pl-8">
            {data.about}
          </p>
        </header>

        <section className="mb-40">
          <h2 className="text-5xl font-black mb-20 uppercase tracking-tighter flex items-baseline gap-4">
            <span className="text-[#E63946]">01.</span> PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-4 border-black">
            {data.projects.map((p, i) => (
              <div key={i} className="bg-[#F5F5F1] p-12 hover:bg-[#1D3557] hover:text-white transition-colors group">
                <div className="mb-12 relative overflow-hidden aspect-video border-4 border-black">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h3 className="text-4xl font-black mb-4 uppercase">{p.title}</h3>
                <p className="text-lg opacity-80 mb-8">{p.description}</p>
                <div className="flex flex-wrap gap-4">
                  {p.tags.map(t => <span key={t} className="px-4 py-1 border-2 border-black font-bold text-xs uppercase">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black text-white p-20 -mx-8 md:-mx-20">
          <h2 className="text-6xl font-black mb-12 uppercase italic">Aesthetic + Function</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {data.skills.map((s, i) => (
              <div key={s} className="space-y-4">
                <span className="text-[#E63946] text-xl font-bold">0{i+1}</span>
                <p className="text-3xl font-black border-t-4 border-white pt-4">{s}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
