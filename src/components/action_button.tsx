import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** primary: crimson, donation actions only · secondary: jet, other main
    actions · quiet: low-key outline · light: parchment, for dark sections and
    photographs. */
type Variant = "primary" | "secondary" | "quiet" | "light";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-soft font-semibold whitespace-nowrap transition-colors duration-200 ease-soft select-none disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-crimson text-parchment hover:bg-crimson-deep",
  secondary: "bg-jet text-parchment hover:bg-jet-soft",
  quiet:
    "border border-jet/20 bg-transparent text-jet hover:border-jet hover:bg-parchment-light",
  light: "bg-parchment text-jet hover:bg-clay",
};

const SIZES: Record<Size, string> = {
  sm: "min-h-10 px-5 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-base",
};

interface Styling {
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  children: ReactNode;
}

function classesFor(variant: Variant, size: Size, className: string) {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();
}

export function ActionLink({
  variant = "secondary",
  size = "md",
  className = "",
  icon,
  children,
  ...linkProps
}: Styling & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link className={classesFor(variant, size, className)} {...linkProps}>
      {icon}
      {children}
    </Link>
  );
}

export function ActionButton({
  variant = "secondary",
  size = "md",
  className = "",
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
      {icon}
      {children}
    </button>
  );
}
