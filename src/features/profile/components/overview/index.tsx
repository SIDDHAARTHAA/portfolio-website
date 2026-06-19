import { GlobeIcon, GraduationCapIcon, MapPinIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { JobItem } from "./job-item";
import { VisitCounterItem } from "./visit-counter-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-12 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
        <JobItem
          title={USER.jobs[0].title}
          company={USER.jobs[0].company}
          website={USER.jobs[0].website}
        />

        <IntroItem>
          <IntroItemIcon>
            <GraduationCapIcon />
          </IntroItemIcon>
          <IntroItemContent>
            CS undergrad @ IIIT Dharwad
          </IntroItemContent>
        </IntroItem>

        <JobItem
          title={USER.jobs[1].title}
          company={USER.jobs[1].company}
          website={USER.jobs[1].website}
        />

        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        <IntroItem>
          <IntroItemIcon>
            <MapPinIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
              aria-label={`Location: ${USER.address}`}
            >
              {USER.address}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>
            <GlobeIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={USER.website}
              aria-label={`Personal website: ${urlToName(USER.website)}`}
            >
              {urlToName(USER.website)}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <EmailItem email={USER.email} />

        <VisitCounterItem />
      </PanelContent>
    </Panel>
  );
}
