
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'AI & Automation' | 'Platforms' | 'Data & Tools';
  level: number; // 1-100
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
