
import React from 'react';
import { PortfolioData } from '../../types';

export const Minimalist: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans p-8 md:p-24 selection:bg-black selection:text-white">
      <header className="max-w-4xl mx-auto mb-32">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">{data.name}</h1>
        <p className="text-xl md:text-2xl text-neutral-500 font-light max-w-2xl">{data.role} — {data.about}</p>
      </header>

      <section className="max-w-4xl mx-auto mb-32">
        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-12">Projects</h2>
        <div className="space-y-32">
          {data.projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden bg-neutral-100 mb-6">
                <img src={p.image} alt={p.title} className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{p.title}</h3>
              <p className="text-neutral-500 mb-4">{p.description}</p>
              <div className="flex gap-2">
                {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-neutral-100 rounded">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-4xl mx-auto border-t border-neutral-200 pt-12 pb-32">
        <p className="text-neutral-400">&copy; 2024 Design System: Minimalist</p>
      </footer>
    </div>
  );
};
