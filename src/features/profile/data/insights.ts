type InsightsSummary = {
  unique_visitors: number;
  total_sessions: number;
  total_screen_views: number;
};

type InsightsSeriesItem = {
  date: string;
  unique_visitors: number;
  total_sessions: number;
};

export type InsightsResponse = {
  summary: InsightsSummary;
  series: InsightsSeriesItem[];
  startDate: string;
  endDate: string;
};

export async function getInsights(): Promise<InsightsResponse | null> {
  const projectId = process.env.OPENPANEL_PROJECT_ID;
  const clientId = process.env.OPENPANEL_CLIENT_ID;
  const clientSecret = process.env.OPENPANEL_CLIENT_SECRET;

  if (!projectId || !clientId || !clientSecret) {
    return null;
  }

  try {
    const response = await fetch(
      `https://api.openpanel.dev/insights/${projectId}/overview`,
      {
        headers: {
          "openpanel-client-id": clientId,
          "openpanel-client-secret": clientSecret,
        },
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as InsightsResponse;
  } catch {
    return null;
  }
}
