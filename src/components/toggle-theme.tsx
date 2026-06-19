"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

import { META_THEME_COLORS } from "@/config/site";
import { THEME_TOGGLE_SOUND } from "@/config/sounds";
import { useMetaColor } from "@/hooks/use-meta-color";
import { useSound } from "@/hooks/use-sound";

import { MoonIcon } from "./animated-icons/moon";
import { SunMediumIcon } from "./animated-icons/sun-medium";
import { Button } from "./ui/button";

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();
  const playThemeSound = useSound(THEME_TOGGLE_SOUND);

  const switchTheme = useCallback(() => {
    playThemeSound();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark
    );
  }, [playThemeSound, resolvedTheme, setTheme, setMetaColor]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={switchTheme}
      // onClick={() => {
      //   if (!document.startViewTransition) switchTheme();
      //   document.startViewTransition(switchTheme);
      // }}
    >
      <MoonIcon className="relative hidden after:absolute after:-inset-2 [html.dark_&]:block" />
      <SunMediumIcon className="relative hidden after:absolute after:-inset-2 [html.light_&]:block" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
