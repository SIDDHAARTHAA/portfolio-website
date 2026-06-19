import { getGitHubContributions } from "@/features/profile/data/github-contributions";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export async function GitHubHeatmap() {
  const data = await getGitHubContributions();

  if (!data || data.contributions.length === 0) {
    return null;
  }

  const weeks = groupByWeeks(data.contributions);

  return (
    <Panel id="github">
      <PanelHeader>
        <PanelTitle>GitHub</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-3">
        <div className="no-scrollbar overflow-x-auto">
          <div className="flex w-max gap-1">
            {weeks.map((week, weekIndex) => (
              <div className="grid grid-rows-7 gap-1" key={weekIndex}>
                {week.map((day, dayIndex) =>
                  day ? (
                    <span
                      className={cn(
                        "size-2.5 rounded-[2px]",
                        getContributionClass(day.level)
                      )}
                      key={day.date}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                    />
                  ) : (
                    <span className="size-2.5" key={dayIndex} />
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
          <p>
            {data.total.toLocaleString("en")} contributions in the last year on{" "}
            <a
              className="link text-foreground"
              href={`https://github.com/${USER.username}`}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            .
          </p>

          <div className="ml-auto flex items-center gap-1">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span
                className={cn("size-2.5 rounded-[2px]", getContributionClass(level))}
                key={level}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

function groupByWeeks(contributions: ContributionDay[]) {
  const firstDay = new Date(`${contributions[0]?.date ?? ""}T00:00:00`);
  const leadingBlanks = Number.isNaN(firstDay.getTime()) ? 0 : firstDay.getDay();
  const padded: Array<ContributionDay | undefined> = [
    ...Array.from({ length: leadingBlanks }, () => undefined),
    ...contributions,
  ];

  const weeks: Array<Array<ContributionDay | undefined>> = [];

  for (let index = 0; index < padded.length; index += 7) {
    weeks.push(padded.slice(index, index + 7));
  }

  return weeks;
}

function getContributionClass(level: number) {
  switch (level) {
    case 1:
      return "bg-muted-foreground/25";
    case 2:
      return "bg-muted-foreground/45";
    case 3:
      return "bg-muted-foreground/65";
    case 4:
      return "bg-muted-foreground/90";
    default:
      return "bg-muted-foreground/8";
  }
}
