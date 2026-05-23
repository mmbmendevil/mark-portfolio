export interface ResearchTopic {
  title: string;
  badge: string;
  description: string;
  tags: string[];
}

export const researchTopics: ResearchTopic[] = [
  {
    title: "Adaptive Learning Systems",
    badge: "Intelligent Systems",
    description: "Designing closed-loop software architectures capable of dynamic content modulation, continuously adjusting pacing, format, and complexity from real-time interaction telemetry.",
    tags: ["Closed-loop AI", "Telemetry", "Dynamic Pacing"]
  },
  {
    title: "Bayesian Knowledge Tracing",
    badge: "Probabilistic Modeling",
    description: "Formulating latent Hidden Markov Models to estimate student mastery transitions over time, accounting for slip, guess, and learning probability parameters to produce robust knowledge state estimates.",
    tags: ["Hidden Markov Models", "Mastery Estimation", "Sequential Learning"]
  },
  {
    title: "Item Response Theory",
    badge: "Psychometrics",
    description: "Applying logistic measurement models to calibrate item difficulty, discrimination, and guessing parameters — powering adaptive testing engines, precise ability estimation, and dynamic difficulty selection.",
    tags: ["Adaptive Testing", "Ability Estimation", "Item Calibration", "Dynamic Difficulty"]
  },
  {
    title: "Cognitive Diagnostic Models",
    badge: "Cognitive Analytics",
    description: "Implementing discrete multi-attribute classification models to produce fine-grained skill mastery profiles and diagnostic Q-Matrix knowledge state matrices across multi-dimensional competency frameworks.",
    tags: ["Q-Matrix", "Skill Profiles", "Knowledge States", "Diagnostic Classification"]
  },
  {
    title: "Personalized Learning Sequence",
    badge: "Optimization Algorithms",
    description: "Synthesizing graph traversal and reinforcement learning algorithms to compute the precision-optimal path to skill mastery — integrating adaptive assessment signals for real-time path recalibration.",
    tags: ["Graph Traversal", "Reinforcement Learning", "Adaptive Paths", "Sequence Optimization"]
  }
];
