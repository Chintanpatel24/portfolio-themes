
import React from 'react';
import { PortfolioData } from '../../types';

export const Neumorphism: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#e0e5ec] text-[#444] font-['Inter'] p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="p-10 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center">
          <div className="w-32 h-32 mx-auto rounded-full shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] mb-8 flex items-center justify-center overflow-hidden">
            <span className="text-4xl">🧑‍💻</span>
          </div>
          <h1 className="text-4xl font-black mb-4 tracking-tight">{data.name}</h1>
          <p className="text-lg font-medium text-slate-500 mb-6">{data.role}</p>
          <div className="p-6 rounded-2xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] text-sm leading-relaxed">
            {data.about}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.projects.map((p, i) => (
            <div key={i} className="p-6 rounded-[32px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] group hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="rounded-2xl shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] p-2 mb-6">
                <img src={p.image} alt={p.title} className="w-full aspect-video object-cover rounded-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 px-2">{p.title}</h3>
              <p className="text-sm text-slate-500 mb-6 px-2">{p.description}</p>
              <div className="flex gap-2 px-2">
                {p.tags.slice(0, 2).map(t => (
                  <span key={t} className="px-3 py-1 text-[10px] rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] uppercase font-bold text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="p-10 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          <h2 className="text-xl font-bold mb-8 text-center uppercase tracking-widest">Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {data.skills.map(s => (
              <div key={s} className="py-4 text-center rounded-xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] text-xs font-bold hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-shadow cursor-pointer">
                {s}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
