import { getInsights } from "@/features/profile/data/insights";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export async function Insights() {
  const insights = await getInsights();

  if (!insights) {
    return null;
  }

  const metrics = [
    ["Visitors", insights.summary.unique_visitors],
    ["Sessions", insights.summary.total_sessions],
    ["Views", insights.summary.total_screen_views],
  ] as const;

  const maxVisitors = Math.max(
    1,
    ...insights.series.map((item) => item.unique_visitors)
  );

  return (
    <Panel id="insights">
      <PanelHeader>
        <PanelTitle>Insights</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4">
        <div className="grid grid-cols-3 border border-edge">
          {metrics.map(([label, value], index) => (
            <div
              className="space-y-1 border-edge p-3 not-last:border-r"
              key={label}
            >
              <div className="font-mono text-2xl leading-none">
                {value.toLocaleString("en")}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {label}
              </div>
              {index === 0 && (
                <span className="sr-only">
                  Analytics are fetched from OpenPanel.
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex h-20 items-end gap-1 border border-edge p-2">
          {insights.series.slice(-30).map((item) => (
            <div
              className="flex flex-1 rounded-t-sm bg-muted-foreground/40"
              key={item.date}
              title={`${item.unique_visitors} visitors on ${item.date}`}
              style={{
                height: `${Math.max(8, (item.unique_visitors / maxVisitors) * 100)}%`,
              }}
            />
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
