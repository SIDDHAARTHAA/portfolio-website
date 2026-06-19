import { Slot as SlotPrimitive } from "radix-ui";
import React from "react";

import { cn } from "@/lib/utils";

const Slot = SlotPrimitive.Slot;

function Prose({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="prose"
      className={cn(
        "prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert",
        "prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance",
        "prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl",
        "prose-lead:text-base",
        "prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-hr:border-edge",
        "prose-blockquote:border-s-border prose-blockquote:[&_p:first-of-type]:before:content-none prose-blockquote:[&_p:last-of-type]:after:content-none",
        className
      )}
      {...props}
    />
  );
}

export { Prose };
