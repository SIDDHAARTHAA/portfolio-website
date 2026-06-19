import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import type { SocialLink } from "@/features/profile/types/social-links";
import { cn } from "@/lib/utils";

export function SocialLinkItem({
  icon,
  title,
  description,
  href,
  padding,
}: SocialLink) {
  const content = (
    <>
      <div className="relative size-12 shrink-0">
        <Image
          className={cn("rounded-xl object-contain", padding && "p-[7px]")}
          src={icon}
          alt={title}
          width={48}
          height={48}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="truncate text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {href && <ArrowUpRightIcon className="size-4 text-muted-foreground" />}
    </>
  );

  const className = cn(
    "group/link flex items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none",
    "max-sm:screen-line-before max-sm:screen-line-after",
    "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after",
    href ? "cursor-pointer" : "cursor-default"
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener">
      {content}
    </a>
  );
}
