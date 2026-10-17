import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Wordmark typographique provisoire.
 * Remplacer par <Image src="/images/alice-logo.png" ... /> lorsque le logo est fourni.
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-baseline gap-2 no-underline ${className}`}
      aria-label="ALICE — Accueil"
    >
      <span className="font-display text-2xl font-medium tracking-tight text-alice-navy transition-colors group-hover:text-alice-blue sm:text-[1.65rem]">
        ALICE
      </span>
      <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-alice-muted sm:inline">
        AFE
      </span>
    </Link>
  );
}
