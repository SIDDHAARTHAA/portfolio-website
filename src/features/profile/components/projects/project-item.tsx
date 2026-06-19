import { InfinityIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { TECH_STACK } from "@/features/profile/data/tech-stack";
import type { TechStack } from "@/features/profile/types/tech-stack";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;

  return (
    <CollapsibleWithContext defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-center hover:bg-accent2">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0 select-none"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <Icons.project className="size-4" />
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {project.title}
                </h3>

                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon
                          className="size-4.5 translate-y-[0.5px]"
                          aria-hidden
                        />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>

              <SimpleTooltip content="Open Project Link">
                <a
                  className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                  <span className="sr-only">Open Project Link</span>
                </a>
              </SimpleTooltip>

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-edge shadow-inner">
            <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {project.description && (
                <Prose>
                  <Markdown>{project.description}</Markdown>
                </Prose>
              )}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap items-center gap-3 select-none">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex">
                      <ProjectSkill skill={skill} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}

function ProjectSkill({ skill }: { skill: string }) {
  const tech = getSkillTech(skill);

  if (!tech) {
    return (
      <SimpleTooltip content={skill}>
        <span className="inline-flex min-h-8 items-center rounded-lg border border-edge bg-background px-2 font-mono text-xs text-muted-foreground">
          {skill}
        </span>
      </SimpleTooltip>
    );
  }

  return (
    <SimpleTooltip content={tech.title}>
      <a
        href={tech.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tech.title}
        className="transition-transform hover:scale-110"
      >
        <Image
          src={tech.iconUrl}
          alt={`${tech.title} icon`}
          width={32}
          height={32}
          unoptimized
          className={cn(
            "h-8 w-8 object-contain",
            tech.theme && "dark:invert"
          )}
        />
        <span className="sr-only">{tech.title}</span>
      </a>
    </SimpleTooltip>
  );
}

function getSkillTech(skill: string): TechStack | undefined {
  const normalized = SKILL_ALIASES[normalizeSkill(skill)] ?? normalizeSkill(skill);

  return TECH_STACK.find(
    (stack) =>
      normalizeSkill(stack.title) === normalized ||
      normalizeSkill(stack.key) === normalized
  );
}

function normalizeSkill(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const SKILL_ALIASES: Record<string, string> = {
  dockerfile: "docker",
  githubactions: "githubactions",
  golang: "go",
  shell: "linux",
};
