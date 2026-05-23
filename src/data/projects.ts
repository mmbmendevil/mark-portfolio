export interface Project {
  title: string;
  metadata: string;
  challenge: string;
  solution: string;
  tags: string[];
  features: string[];
  github: string;
  demo?: string;
  demoDisabled?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "NutriMateApp",
    metadata: "2026 • Android • Offline-First Native App",
    challenge: "Users struggle to consistently track their daily macros due to overly complex interfaces and reliance on constant internet connectivity.",
    solution: "Engineered a native Kotlin application with a robust SQLite architecture, enabling fluid, offline-first interactions and highly personalized caloric tracking.",
    tags: ["Kotlin", "Android Studio", "SQLite", "Material Design"],
    features: [
      "Dynamic macro tracking (protein, carbs, fats)",
      "Personalized daily caloric goal formulations",
      "Interactive routine builder and wellness schedules",
      "Robust offline SQLite architecture for fluid performance"
    ],
    github: "https://github.com/mmbmendevil/nutrimate-app",
    demoDisabled: true,
    image: "/nutrimate.png"
  },
  {
    title: "CEM-PLS-Pro",
    metadata: "2026 • React & Firebase • AI Research Platform",
    challenge: "Traditional digital education platforms deliver static content, failing to adapt to individual student learning curves and cognitive patterns.",
    solution: "Architected a psychometric-driven SPA using React, Vite, and Firebase. Integrates OpenAI-compatible chat APIs and advanced data visualization to generate highly-adaptive learning pathways.",
    tags: ["React", "TypeScript", "Vite", "Firebase", "Tailwind CSS", "Recharts", "OpenAI"],
    features: [
      "Probabilistic student modeling via Bayesian Knowledge Tracing",
      "Dynamic difficulty adaptation using Item Response Theory",
      "Real-time cognitive diagnostics dashboards with Recharts",
      "Serverless Firebase backend with OpenAI-powered interactions"
    ],
    github: "https://github.com/mmbmendevil/CEM-PLS-Pro",
    demo: "https://cem-pls-pro-21ey.vercel.app",
    image: "/cempls.png"
  }
];
