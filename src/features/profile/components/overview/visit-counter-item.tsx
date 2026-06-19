"use client";

import { useEffect, useRef, useState } from "react";

import {
  formatNumber,
  incrementVisit,
  onVisitsChange,
} from "@/lib/firebase";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
} from "./intro-item";

export function VisitCounterItem() {
  const [visits, setVisits] = useState(0);
  const [showPlusOne, setShowPlusOne] = useState(false);
  const previousCount = useRef<number | null>(null);

  useEffect(() => {
    incrementVisit();

    const unsubscribe = onVisitsChange((nextCount) => {
      if (previousCount.current !== null && nextCount > previousCount.current) {
        setShowPlusOne(true);
        window.setTimeout(() => setShowPlusOne(false), 1000);
      }

      previousCount.current = nextCount;
      setVisits(nextCount);
    });

    return () => unsubscribe?.();
  }, []);

  return (
    <IntroItem>
      <IntroItemIcon className="relative rounded-full">
        <span className="absolute size-2 rounded-full bg-muted-foreground/45" />
        <span className="absolute size-2 rounded-full bg-muted-foreground/70 motion-safe:animate-[visit-pulse_1.8s_ease-out_infinite]" />
      </IntroItemIcon>
      <IntroItemContent>
        <span>{formatNumber(visits)}</span>{" "}
        <span className="text-muted-foreground">
          humans visited this website
        </span>
        {showPlusOne && (
          <span className="ml-1 text-muted-foreground" aria-live="polite">
            +1
          </span>
        )}
      </IntroItemContent>
    </IntroItem>
  );
}
