import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet" | "dark" | "palestine";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 ease-soft disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-palestine-green text-white shadow-soft hover:bg-palestine-green-deep",
  palestine: "bg-palestine-green text-white shadow-soft hover:bg-palestine-green-deep",
  secondary: "bg-olive text-paper hover:bg-olive-deep",
  quiet: "border border-line bg-white text-charcoal hover:border-olive-soft hover:bg-surface",
  dark: "bg-charcoal text-paper shadow-soft hover:bg-charcoal/90",
};

const SIZES: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-7 text-base",
};

function classesFor(variant: Variant, size: Size, className: string) {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();
}

interface Styling {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function ActionLink({
  variant = "secondary",
  size = "md",
  className = "",
  children,
  ...linkProps
}: Styling & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link className={classesFor(variant, size, className)} {...linkProps}>
      {children}
    </Link>
  );
}

export function ActionButton({
  variant = "secondary",
  size = "md",
  className = "",
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
      {children}
    </button>
  );
}
