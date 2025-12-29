
import { Project, Experience, Skill } from './types';

export const USER_INFO = {
  name: "Ali Hamza",
  role: "Web Developer @ X2technologies",
  bio: "Architecting the future through AI-driven automation, high-performance e-commerce engines, and scalable web ecosystems. Specialist in n8n, Docker, and modern JS frameworks.",
  location: "Mansoorah, Lahore, Pakistan",
  email: "Hamaza7867@gmail.com",
  phone: "+92304-8898000",
  github: "https://github.com/hamaza7867",
  linkedin: "https://linkedin.com", 
  twitter: "#"
};

export const PROJECTS: Project[] = [
  {
    id: "ai-1",
    title: "Automated News System",
    description: "An AI-powered workflow built with n8n that aggregates global news and handles automated transmissions twice daily.",
    tags: ["n8n", "AI Automation", "API"],
    imageUrl: "https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "ai-2",
    title: "BYOAPI Mobile",
    description: "A mobile application infrastructure for running local AI models like Ollama over private networks.",
    tags: ["Ollama", "AI/ML", "Local Network"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "cloud-1",
    title: "Docker CI/CD Pipeline",
    description: "Automated Freestyle Pipeline triggering Docker container builds instantly upon GitHub code transmission.",
    tags: ["Docker", "GitHub Actions", "CI/CD"],
    imageUrl: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "pos-1",
    title: "Hardware POS Node",
    description: "A specialized Point of Sale system engineered for hardware inventory management and sales logistics.",
    tags: ["TypeScript", "POS", "Management"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "web-1",
    title: "Gleamix Tech Hub",
    description: "High-tier Shopify e-commerce platform for tech gadgets with custom Liquid theme implementations.",
    tags: ["Shopify", "Liquid", "UX"],
    imageUrl: "https://images.unsplash.com/photo-1491933382434-50028619b54b?auto=format&fit=crop&q=80&w=800",
    link: "https://www.gleamix.store/"
  },
  {
    id: "game-1",
    title: "Galaxy Defender",
    description: "Futuristic web-based space shooter game demonstrating complex event handling and motion physics.",
    tags: ["JavaScript", "Game Dev", "Canvas"],
    imageUrl: "https://images.unsplash.com/photo-1614732414444-af963b79f417?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-0",
    role: "Web Developer",
    company: "X2technologies (SMC-PRIVATE) Limited",
    period: "Sept 2025 – Present",
    description: [
      "Orchestrating the development and optimization of high-performance modern web systems.",
      "Integrating advanced AI solutions into core business infrastructures.",
      "Leading technical architecture for scalable digital products."
    ]
  },
  {
    id: "exp-1",
    role: "WordPress Developer",
    company: "Lineup Digital",
    period: "Oct 2023 – Sept 2025",
    description: [
      "Engineered custom WordPress themes and complex plugin integrations for enterprise clients.",
      "Optimized site performance protocols and managed technical SEO infrastructures.",
      "Maintained site security and responsive design integrity across diverse projects."
    ]
  },
  {
    id: "exp-2",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Feb 2023 – Sept 2025",
    description: [
      "Delivered end-to-end e-commerce solutions using Shopify, WordPress, and custom tools.",
      "Designed and deployed responsive UI components for a global clientele.",
      "Managed full project lifecycles from conceptualization to deployment."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "n8n Automation", category: "AI & Automation", level: 95 },
  { name: "Ollama (Local AI)", category: "AI & Automation", level: 90 },
  { name: "React.js / TS", category: "Frontend", level: 92 },
  { name: "Tailwind CSS", category: "Frontend", level: 95 },
  { name: "Docker / Cloud", category: "Backend & Cloud", level: 85 },
  { name: "Python / PHP", category: "Backend & Cloud", level: 88 },
  { name: "Shopify / Liquid", category: "Platforms", level: 95 },
  { name: "WordPress / Elementor", category: "Platforms", level: 98 },
  { name: "Power BI / Data", category: "Data & Tools", level: 80 },
  { name: "GitHub Actions", category: "Data & Tools", level: 85 }
];
