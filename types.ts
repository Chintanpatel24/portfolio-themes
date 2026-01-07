
export type UIStyle = 
  | 'minimalist' 
  | 'brutalist' 
  | 'cyberpunk' 
  | 'terminal' 
  | 'neumorphism' 
  | 'claymorphism' 
  | 'bauhaus' 
  | 'paper' 
  | 'aurora' 
  | 'glassmorphism';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  skills: string[];
  projects: Project[];
}
