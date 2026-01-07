
import React, { useState, useEffect } from 'react';
import { PortfolioData } from '../../types';

export const Terminal: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = `ssh guest@${data.name.toLowerCase().replace(' ', '')}.com... Connection established.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-['JetBrains_Mono'] p-4 md:p-12 selection:bg-green-500 selection:text-black">
      <div className="max-w-4xl mx-auto border-2 border-green-900/50 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.1)]">
        <div className="bg-green-900/20 px-4 py-2 border-b-2 border-green-900/50 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-green-900/50" />
            <div className="w-3 h-3 rounded-full bg-green-900/50" />
            <div className="w-3 h-3 rounded-full bg-green-900/50" />
          </div>
          <span className="text-xs uppercase opacity-50">Terminal — 80x24</span>
        </div>
        
        <div className="p-6 md:p-10 space-y-8">
          <div className="text-lg">
            <span className="opacity-50">$</span> {typedText}<span className="animate-pulse">_</span>
          </div>

          <section>
            <h1 className="text-4xl font-bold mb-4 uppercase underline underline-offset-8">Bio_Data</h1>
            <div className="space-y-2 opacity-80">
              <p><span className="text-white">NAME:</span> {data.name}</p>
              <p><span className="text-white">ROLE:</span> {data.role}</p>
              <p><span className="text-white">DESC:</span> {data.about}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-green-900" />
              REPOSITORIES
              <span className="w-12 h-px bg-green-900" />
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {data.projects.map((p, i) => (
                <div key={i} className="border border-green-900/50 p-6 hover:bg-green-500/5 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">[{p.title}]</h3>
                    <span className="text-xs bg-green-900/30 px-2 py-1">MASTER</span>
                  </div>
                  <p className="opacity-70 text-sm mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex gap-4">
                    {p.tags.map(t => <span key={t} className="text-[10px] text-green-800">#{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 uppercase">Capabilities</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {data.skills.map(s => (
                <div key={s} className="flex items-center gap-2">
                  <span className="text-xs text-white">●</span> {s}
                </div>
              ))}
            </div>
          </section>

          <footer className="pt-12 text-[10px] opacity-30 text-center uppercase tracking-[0.2em]">
            System Version 2.5.0-Preview-Stable
          </footer>
        </div>
      </div>
    </div>
  );
};
