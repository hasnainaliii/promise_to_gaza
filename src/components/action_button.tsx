import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { StampDonateButton, OliveBranchIcon } from "@/components/stamp_donate_button";
import { PlantDonateButton } from "@/components/plant_donate_button";

export { StampDonateButton, OliveBranchIcon, PlantDonateButton };

type Variant = "primary" | "secondary" | "quiet" | "dark" | "palestine" | "stamp";
type Size = "md" | "lg";

const BASE =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md font-medium transition-all duration-200 ease-soft disabled:cursor-not-allowed disabled:opacity-60 select-none active:scale-[0.99]";

const VARIANTS: Record<Variant, string> = {
  primary:
    "text-white border border-white/20 shadow-xs hover:border-white/45 hover:shadow-md hover:-translate-y-0.5",
  palestine:
    "text-white border border-white/20 shadow-xs hover:border-white/45 hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "bg-olive text-paper hover:bg-olive-deep shadow-xs hover:-translate-y-0.5",
  quiet:
    "border border-line bg-white text-charcoal hover:border-olive-soft hover:bg-surface shadow-xs hover:-translate-y-0.5",
  dark: "bg-charcoal text-paper shadow-xs hover:bg-black hover:-translate-y-0.5",
  stamp: "",
};

const SIZES: Record<Size, string> = {
  md: "min-h-10 px-5 py-2 text-sm",
  lg: "min-h-12 px-7 py-2.5 text-base",
};

/**
 * Authentic Palestinian flag background filling the entire button.
 * Features horizontal black, white, and green stripes with the red chevron hoist triangle,
 * plus a clean minimalist tint scrim for high contrast and smooth hover reaction.
 */
export function PalestineFlagBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-md"
      aria-hidden="true"
    >
      {/* Three Horizontal Stripes */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/3 w-full bg-[#111111]" />
        <div className="h-1/3 w-full bg-[#ffffff]" />
        <div className="h-1/3 w-full bg-[#007a3d]" />
      </div>

      {/* Red Hoist Triangle Chevron (proportional to button height) */}
      <div
        className="absolute left-0 top-0 bottom-0 aspect-[0.7/1]"
        style={{
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          backgroundColor: "#e4312b",
        }}
      />

      {/* Clean Minimalist Tint Scrim for Contrast & Smooth Minimalist Hover */}
      <div className="absolute inset-0 bg-black/45 transition-colors duration-200 group-hover:bg-black/30" />
    </div>
  );
}

function classesFor(variant: Variant, size: Size, className: string) {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();
}

export interface Styling {
  variant?: Variant;
  size?: Size;
  className?: string;
  flagBackground?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

function ButtonInner({
  variant,
  flagBackground,
  icon,
  children,
}: {
  variant: Variant;
  size: Size;
  flagBackground?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}) {
  const isPalestineAction = variant === "primary" || variant === "palestine";
  const shouldShowFlagBg = flagBackground ?? isPalestineAction;

  return (
    <>
      {shouldShowFlagBg ? <PalestineFlagBackground /> : null}
      {icon ? <span className="relative z-10">{icon}</span> : null}
      <span
        className={
          shouldShowFlagBg
            ? "relative z-10 font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
            : "relative z-10"
        }
      >
        {children}
      </span>
    </>
  );
}

export function ActionLink({
  variant = "secondary",
  size = "md",
  className = "",
  flagBackground,
  icon,
  children,
  ...linkProps
}: Styling & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  if (variant === "stamp") {
    return (
      <StampDonateButton
        href={linkProps.href as string}
        size={size === "lg" ? "lg" : size === "md" ? "md" : "sm"}
        className={className}
      />
    );
  }

  return (
    <Link className={classesFor(variant, size, className)} {...linkProps}>
      <ButtonInner
        variant={variant}
        size={size}
        flagBackground={flagBackground}
        icon={icon}
      >
        {children}
      </ButtonInner>
    </Link>
  );
}

export function ActionButton({
  variant = "secondary",
  size = "md",
  className = "",
  flagBackground,
  icon,
  children,
  type = "button",
  ...buttonProps
}: Styling & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button
      type={type}
      className={classesFor(variant, size, className)}
      {...buttonProps}
    >
      <ButtonInner
        variant={variant}
        size={size}
        flagBackground={flagBackground}
        icon={icon}
      >
        {children}
      </ButtonInner>
    </button>
  );
}
