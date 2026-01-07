
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { UIStyle } from './types';
import { PORTFOLIO_DATA } from './constants';
import StyleSwitcher from './components/StyleSwitcher';

// Styles
import { Minimalist } from './components/styles/Minimalist';
import { Brutalist } from './components/styles/Brutalist';
import { Cyberpunk } from './components/styles/Cyberpunk';
import { Glassmorphism } from './components/styles/Glassmorphism';
import { Aurora } from './components/styles/Aurora';
import { Terminal } from './components/styles/Terminal';
import { Neumorphism } from './components/styles/Neumorphism';
import { Claymorphism } from './components/styles/Claymorphism';
import { Bauhaus } from './components/styles/Bauhaus';
import { Paper } from './components/styles/Paper';

const App = () => {
  const [currentStyle, setCurrentStyle] = useState<UIStyle>('minimalist');

  useEffect(() => {
    console.log(`Style changed to: ${currentStyle}`);
    // Ensure scroll to top on style change
    window.scrollTo(0, 0);
  }, [currentStyle]);

  const renderStyle = () => {
    switch (currentStyle) {
      case 'minimalist': return <Minimalist data={PORTFOLIO_DATA} />;
      case 'brutalist': return <Brutalist data={PORTFOLIO_DATA} />;
      case 'cyberpunk': return <Cyberpunk data={PORTFOLIO_DATA} />;
      case 'glassmorphism': return <Glassmorphism data={PORTFOLIO_DATA} />;
      case 'aurora': return <Aurora data={PORTFOLIO_DATA} />;
      case 'terminal': return <Terminal data={PORTFOLIO_DATA} />;
      case 'neumorphism': return <Neumorphism data={PORTFOLIO_DATA} />;
      case 'claymorphism': return <Claymorphism data={PORTFOLIO_DATA} />;
      case 'bauhaus': return <Bauhaus data={PORTFOLIO_DATA} />;
      case 'paper': return <Paper data={PORTFOLIO_DATA} />;
      default: return <Minimalist data={PORTFOLIO_DATA} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
      <div key={currentStyle} className="animate-in fade-in duration-700">
        {renderStyle()}
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
