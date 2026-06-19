export type ExperiencePosition = {
  id: string;
  title: string;
  period: string;
  type?: string;
  description?: string;
  skills?: string[];
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyWebsite?: string;
  isCurrent?: boolean;
  positions: ExperiencePosition[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "shipd-ai",
    companyName: "Shipd AI",
    companyWebsite: "https://www.shipd.ai/",
    isCurrent: true,
    positions: [
      {
        id: "evaluation-engineer",
        title: "Evaluation Engineer",
        period: "2026 — Present",
        type: "Contract",
        description:
          "I work on software engineering evaluations for frontier AI models, turning real repositories into reproducible tasks with clear setup, debugging paths, and verification.",
        skills: ["Python", "Docker", "Linux", "GitHub Actions"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "open-source",
    companyName: "Open Source",
    positions: [
      {
        id: "oss-contributor",
        title: "Active OSS Contributor",
        period: "Ongoing",
        description:
          "I contribute to real projects by reading existing codebases, understanding maintainers' intent, and shipping focused pull requests that fit the project instead of fighting it.",
        skills: ["C", "TypeScript", "GitHub Actions"],
      },
    ],
  },
  {
    id: "creative-work",
    companyName: "Creative Work",
    positions: [
      {
        id: "video-editor",
        title: "Professional Video Editor",
        period: "Ongoing",
        description:
          "Outside engineering, I edit videos professionally. It keeps my taste sharp: pacing, clarity, structure, and knowing what to cut.",
        skills: ["Editing", "Storytelling", "Clarity"],
      },
    ],
  },
];
