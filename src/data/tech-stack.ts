export interface TechItem {
  name: string;
  icon: string;
  desc?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "React" },
      { name: "TypeScript", icon: "TypeScript" },
      { name: "Next.js", icon: "Next.js" },
      { name: "Vite", icon: "Vite" },
      { name: "Tailwind CSS", icon: "Tailwind CSS" },
      { name: "HTML5", icon: "HTML5" },
      { name: "CSS3", icon: "CSS3" },
      { name: "JavaScript", icon: "JavaScript" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "Node.js" },
      { name: "Express.js", icon: "Express.js" },
      { name: "Firebase", icon: "Firebase" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "MySQL", icon: "MySQL" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Kotlin", icon: "Kotlin" },
      { name: "Android Studio", icon: "Android Studio" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "Git" },
      { name: "GitHub", icon: "GitHub" },
      { name: "VS Code", icon: "VS Code" },
      { name: "Figma", icon: "Figma" },
      { name: "Postman", icon: "Postman" },
      { name: "Vercel", icon: "Vercel" },
    ],
  },
  {
    title: "Research & AI Specialization",
    items: [
      { name: "Bayesian Knowledge Tracing", icon: "Bayesian Knowledge Tracing", desc: "Probabilistic student mastery estimation" },
      { name: "Item Response Theory", icon: "Item Response Theory", desc: "Adaptive difficulty and latent trait modeling" },
      { name: "Cognitive Diagnostic Models", icon: "Cognitive Diagnostic Models", desc: "Fine-grained learner diagnosis" },
      { name: "Computerized Adaptive Testing", icon: "Computerized Adaptive Testing", desc: "Dynamic assessment optimization" },
      { name: "Personalized Learning Sequences", icon: "Personalized Learning Sequence", desc: "Adaptive educational pathway generation" },
      { name: "Adaptive Learning Systems", icon: "Adaptive Learning Systems", desc: "AI-driven personalized learning experiences" },
    ],
  },
];
