import { CollapsibleList } from "@/components/collapsible-list";

import { getPortfolioProjects } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export async function Projects() {
  const projects = await getPortfolioProjects();

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle className="flex items-center gap-2">
          Projects
          <span className="inline-flex items-center font-mono text-sm font-medium leading-none text-muted-foreground select-none">
            ({projects.length})
          </span>
        </PanelTitle>
      </PanelHeader>

      {projects.length > 0 ? (
        <CollapsibleList
          items={projects}
          max={4}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      ) : (
        <p className="border-t border-edge p-4 font-mono text-sm text-muted-foreground">
          No GitHub repositories are tagged with portfolio-project yet.
        </p>
      )}
    </Panel>
  );
}
