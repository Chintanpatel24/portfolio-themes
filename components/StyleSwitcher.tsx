
import React from 'react';
import { UIStyle } from '../types';

interface StyleSwitcherProps {
  currentStyle: UIStyle;
  onStyleChange: (style: UIStyle) => void;
}

const styles: { id: UIStyle; label: string; icon: string }[] = [
  { id: 'minimalist', label: 'Minimalist', icon: '⚪' },
  { id: 'brutalist', label: 'Neo-Brutalist', icon: '🟧' },
  { id: 'cyberpunk', label: 'Cyberpunk', icon: '🧬' },
  { id: 'glassmorphism', label: 'Glass', icon: '💎' },
  { id: 'aurora', label: 'Aurora', icon: '🌈' },
  { id: 'terminal', label: 'Terminal', icon: '📟' },
  { id: 'neumorphism', label: 'Soft UI', icon: '☁️' },
  { id: 'claymorphism', label: 'Clay', icon: '🧸' },
  { id: 'bauhaus', label: 'Bauhaus', icon: '🔺' },
  { id: 'paper', label: 'Sketch', icon: '📝' },
];

const StyleSwitcher: React.FC<StyleSwitcherProps> = ({ currentStyle, onStyleChange }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] bg-black/40 backdrop-blur-2xl border border-white/20 p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex gap-1 max-w-[90vw] overflow-x-auto no-scrollbar items-center">
      <div className="flex gap-1 p-1">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleChange(style.id)}
            title={style.label}
            className={`px-3 py-2 rounded-xl transition-all duration-300 whitespace-nowrap text-sm font-semibold flex items-center gap-2 border ${
              currentStyle === style.id
                ? 'bg-white text-black border-white shadow-lg scale-105'
                : 'text-white/60 border-transparent hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="text-base">{style.icon}</span>
            <span className="hidden sm:inline-block">{style.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;
