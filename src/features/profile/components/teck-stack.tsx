import Image from "next/image";

import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import type { TechStack as TechStackType } from "../types/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  const stackByCategory = groupByCategory(TECH_STACK);

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent className="p-0">
        <div className="relative [--badge-height:--spacing(7)] [--col-left-width:--spacing(40)]">
          <div
            className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px bg-[linear-gradient(to_bottom,var(--color-edge)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden"
            aria-hidden
          />

          {Object.entries(stackByCategory).map(([category, items], index) => {
            const categoryId = `stack-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

            return (
              <div
                className="grid items-start gap-y-2 border-b border-edge py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
                key={category}
              >
                <div
                  className="px-4 text-sm/(--badge-height) text-muted-foreground"
                  id={categoryId}
                >
                  <span
                    className="mr-1.5 font-mono text-muted-foreground/50 select-none"
                    aria-hidden
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  {category}
                </div>

                <ul
                  aria-labelledby={categoryId}
                  className="flex flex-wrap gap-1.5 px-4"
                >
                  {items.map((tech) => (
                    <li className="flex" key={tech.key}>
                      <a
                        className="flex h-(--badge-height) items-center justify-center gap-1.5 rounded-md border border-edge bg-zinc-50/80 px-1.75 font-mono text-xs text-foreground transition-colors hover:bg-accent2 dark:bg-zinc-900/80"
                        href={tech.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative flex size-4 shrink-0">
                          <Image
                            src={tech.iconUrl}
                            alt=""
                            fill
                            sizes="16px"
                            unoptimized
                            className={cn(
                              "object-contain",
                              tech.theme && "dark:invert"
                            )}
                          />
                        </span>
                        {tech.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}

function groupByCategory(items: TechStackType[]) {
  return items.reduce<Record<string, TechStackType[]>>((acc, item) => {
    for (const category of item.categories) {
      (acc[category] ??= []).push(item);
    }

    return acc;
  }, {});
}
