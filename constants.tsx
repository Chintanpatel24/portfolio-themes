
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Alex Rivera",
  role: "Creative Technologist",
  about: "Bridging the gap between avant-garde design and high-performance engineering. Specialized in building immersive digital experiences using Gemini AI, React, and Shader Magic.",
  skills: ["React", "TypeScript", "Tailwind", "Gemini API", "Three.js", "Motion Design", "Node.js", "PostgreSQL"],
  projects: [
    {
      title: "Nebula AI",
      description: "A generative cosmic interface driven by real-time LLM outputs and WebGL shaders.",
      tags: ["Gemini API", "Three.js", "React"],
      image: "https://picsum.photos/seed/nebula/800/600",
      link: "#"
    },
    {
      title: "Synthetix Dash",
      description: "Financial dashboard focused on high-density data visualization with glassmorphic elements.",
      tags: ["D3.js", "Glassmorphism", "Finance"],
      image: "https://picsum.photos/seed/synth/800/600",
      link: "#"
    },
    {
      title: "Echo Protocol",
      description: "Peer-to-peer encrypted messaging platform with a brutalist interface.",
      tags: ["P2P", "Encryption", "React Native"],
      image: "https://picsum.photos/seed/echo/800/600",
      link: "#"
    }
  ]
};
