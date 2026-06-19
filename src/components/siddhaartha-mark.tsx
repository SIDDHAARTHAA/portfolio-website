import { cn } from "@/lib/utils";

export function SiddhaarthaMark({
  className,
  ...props
}: Omit<React.ComponentProps<"span">, "children">) {
  return (
    <span
      aria-label="SID"
      className={cn("inline-grid shrink-0 place-items-center", className)}
      {...props}
    >
      <span className="relative block size-[82%]">
        <img
          src="/images/sid_light.png"
          alt="SID"
          width={1000}
          height={1000}
          draggable={false}
          decoding="sync"
          className="h-full w-full object-contain [image-rendering:crisp-edges] [image-rendering:pixelated] dark:hidden"
        />
        <img
          src="/images/sid_dark.png"
          alt="SID"
          width={1000}
          height={1000}
          draggable={false}
          decoding="sync"
          className="hidden h-full w-full object-contain [image-rendering:crisp-edges] [image-rendering:pixelated] dark:block"
        />
      </span>
    </span>
  );
}
