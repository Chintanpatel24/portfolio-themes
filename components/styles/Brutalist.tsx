
import React from 'react';
import { PortfolioData } from '../../types';

export const Brutalist: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-yellow-400 text-black font-['Space_Grotesk'] p-6 md:p-12 selection:bg-black selection:text-yellow-400">
      <div className="max-w-6xl mx-auto">
        <header className="border-4 border-black bg-white p-8 mb-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none">{data.name}</h1>
          <p className="text-2xl font-bold bg-pink-400 inline-block px-4 py-1 border-2 border-black mb-6">{data.role}</p>
          <p className="text-xl max-w-2xl font-medium leading-relaxed">{data.about}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {data.projects.map((p, i) => (
            <div key={i} className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
              <img src={p.image} alt={p.title} className="w-full aspect-video object-cover border-b-4 border-black" />
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2 uppercase">{p.title}</h3>
                <p className="font-medium mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 border-2 border-black bg-cyan-300 text-xs font-bold uppercase">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="border-4 border-black bg-white p-8 mb-32 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl font-black mb-8 uppercase italic underline decoration-pink-500 underline-offset-8">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {data.skills.map(s => (
              <span key={s} className="text-xl font-bold px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer">
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
