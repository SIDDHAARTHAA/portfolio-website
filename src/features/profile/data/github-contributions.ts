import { USER } from "./user";

type GitHubContribution = {
  date: string;
  count: number;
  level: number;
};

type GitHubContributionsResponse = {
  total?: {
    lastYear?: number;
  };
  contributions?: GitHubContribution[];
};

export async function getGitHubContributions() {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USER.username}?y=last`,
      {
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as GitHubContributionsResponse;

    return {
      total: data.total?.lastYear ?? 0,
      contributions: data.contributions ?? [],
    };
  } catch {
    return null;
  }
}
