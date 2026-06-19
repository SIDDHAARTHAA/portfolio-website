import {
  BriefcaseBusinessIcon,
  ClapperboardIcon,
  CodeXmlIcon,
  GitPullRequestIcon,
} from "lucide-react";

import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Prose } from "@/components/ui/typography";
import type { ExperiencePosition } from "@/features/profile/data/experience";
import { EXPERIENCE } from "@/features/profile/data/experience";
import { cn } from "@/lib/utils";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Experience() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <div className="bg-background px-4">
        {EXPERIENCE.map((experience) => (
          <div className="space-y-4 py-4" key={experience.id}>
            <div className="flex items-center gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center">
                <span className="flex size-2 rounded-full bg-muted-foreground/45" />
              </div>

              <h3 className="text-lg leading-snug font-semibold">
                {experience.companyWebsite ? (
                  <a
                    className="link"
                    href={experience.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.companyName}
                  </a>
                ) : (
                  experience.companyName
                )}
              </h3>

              {experience.isCurrent && (
                <span
                  className="relative flex items-center justify-center"
                  aria-label="Current"
                >
                  <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-info" />
                </span>
              )}
            </div>

            <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-edge">
              {experience.positions.map((position) => (
                <ExperiencePositionItem key={position.id} position={position} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const hasDescription = Boolean(position.description);

  return (
    <CollapsibleWithContext
      defaultOpen={position.isExpanded}
      disabled={!hasDescription}
      asChild
    >
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "group/position block w-full text-left select-none",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/30",
            "data-disabled:before:content-none"
          )}
        >
          <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background [&_svg]:size-4">
              {getPositionIcon(position.id)}
            </div>

            <h4 className="flex-1 font-medium text-balance text-foreground">
              {position.title}
            </h4>

            {hasDescription && (
              <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
                <CollapsibleChevronsIcon />
              </div>
            )}
          </div>

          <dl className="relative z-1 flex flex-wrap items-center gap-x-2 gap-y-1 pl-9 text-sm text-muted-foreground">
            {position.type && (
              <>
                <dt className="sr-only">Type</dt>
                <dd>{position.type}</dd>
                <dd aria-hidden="true">/</dd>
              </>
            )}

            <dt className="sr-only">Period</dt>
            <dd className="font-mono tabular-nums">{position.period}</dd>
          </dl>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden">
          {position.description && (
            <Prose className="pt-2 pl-9">
              <Markdown>{position.description}</Markdown>
            </Prose>
          )}
        </CollapsibleContent>

        {position.skills && position.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
            {position.skills.map((skill) => (
              <li key={skill} className="flex">
                <span className="inline-flex items-center rounded-md border border-edge bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </CollapsibleWithContext>
  );
}

function getPositionIcon(id: string) {
  if (id.includes("evaluation")) return <CodeXmlIcon />;
  if (id.includes("oss")) return <GitPullRequestIcon />;
  if (id.includes("video")) return <ClapperboardIcon />;

  return <BriefcaseBusinessIcon />;
}
