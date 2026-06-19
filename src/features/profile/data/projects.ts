import type { Project } from "../types/projects";

const GITHUB_USERNAME = "SIDDHAARTHAA";
const PROJECT_TOPIC = "portfolio-project";
const MAX_PROJECTS = 12;

type GitHubSearchResponse = {
  items?: GitHubRepository[];
};

type GitHubRepository = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string | null;
  stargazers_count: number;
};

export async function getPortfolioProjects(): Promise<Project[]> {
  const params = new URLSearchParams({
    q: `user:${GITHUB_USERNAME} topic:${PROJECT_TOPIC}`,
    sort: "updated",
    order: "desc",
    per_page: String(MAX_PROJECTS),
  });

  const response = await fetch(
    `https://api.github.com/search/repositories?${params}`,
    {
      headers: getGitHubHeaders(),
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as GitHubSearchResponse;

  return (data.items ?? []).map((repo, index) => ({
    id: String(repo.id),
    title: repo.name,
    period: {
      start: formatMonthYear(repo.created_at),
      end: repo.pushed_at ? formatMonthYear(repo.pushed_at) : undefined,
    },
    link: repo.homepage || repo.html_url,
    skills: getProjectSkills(repo),
    description: getProjectDescription(repo),
    isExpanded: index === 0,
  }));
}

function getGitHubHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function getProjectSkills(repo: GitHubRepository) {
  const topics =
    repo.topics
      ?.filter((topic) => topic !== PROJECT_TOPIC)
      .map(formatTopic)
      .slice(0, 5) ?? [];

  return [...new Set([repo.language, ...topics].filter(Boolean) as string[])];
}

function getProjectDescription(repo: GitHubRepository) {
  const lines = [
    repo.description || "Project details are maintained from GitHub metadata.",
    `- Repository: [${repo.full_name}](${repo.html_url})`,
  ];

  if (repo.homepage) {
    lines.push(`- Live: [${formatUrlLabel(repo.homepage)}](${repo.homepage})`);
  }

  if (repo.stargazers_count > 0) {
    lines.push(`- Stars: ${repo.stargazers_count}`);
  }

  return lines.join("\n");
}

function formatMonthYear(value: string) {
  const date = new Date(value);
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${month}.${year}`;
}

function formatTopic(topic: string) {
  return topic
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatUrlLabel(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
