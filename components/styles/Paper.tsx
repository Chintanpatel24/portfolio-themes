
import React from 'react';
import { PortfolioData } from '../../types';

export const Paper: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#333] font-['Caveat'] p-6 md:p-12 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-20 rotate-[-1deg] border-2 border-[#333] bg-white p-8 shadow-xl" 
                style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">{data.name}</h1>
          <p className="text-3xl text-blue-600 mb-6 underline decoration-wavy decoration-2">~ {data.role} ~</p>
          <p className="text-2xl leading-relaxed max-w-2xl italic">
            "{data.about}"
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {data.projects.map((p, i) => (
            <div key={i} className={`p-4 bg-white border-2 border-[#333] shadow-lg transition-transform hover:rotate-0 ${i % 2 === 0 ? 'rotate-[2deg]' : 'rotate-[-2deg]'}`}
                 style={{ borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px' }}>
              <div className="mb-4 overflow-hidden border-2 border-[#333]" style={{ borderRadius: '10px' }}>
                <img src={p.image} alt={p.title} className="w-full aspect-video object-cover grayscale opacity-80" />
              </div>
              <h3 className="text-3xl font-bold mb-2 underline decoration-red-400">{p.title}</h3>
              <p className="text-xl mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-4">
                {p.tags.map(t => <span key={t} className="text-lg text-blue-500 font-bold">#{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white border-2 border-[#333] p-10 rotate-[1deg] shadow-xl mb-32"
                 style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
          <h2 className="text-4xl font-bold mb-8 text-center underline">Things I'm good at:</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {data.skills.map(s => (
              <span key={s} className="text-3xl font-bold hover:text-red-500 transition-colors cursor-pointer">
                - {s}
              </span>
            ))}
          </div>
        </section>

        <footer className="text-center pb-20 opacity-50 text-xl">
          Made with a pencil and some coffee.
        </footer>
      </div>
    </div>
  );
};
