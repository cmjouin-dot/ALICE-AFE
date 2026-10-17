import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-alice-navy text-white hover:bg-alice-blue focus-visible:outline-alice-blue",
  secondary:
    "border border-alice-navy/25 bg-transparent text-alice-navy hover:border-alice-blue hover:text-alice-blue",
  ghost:
    "text-alice-blue underline-offset-4 hover:underline",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-[0.95rem] font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
