import Image from "next/image";
import Link from "next/link";

type LogoSize = "header" | "hero";

type LogoProps = {
  className?: string;
  priority?: boolean;
  size?: LogoSize;
};

const sizeConfig: Record<
  LogoSize,
  { width: number; height: number; className: string }
> = {
  header: {
    width: 148,
    height: 99,
    className: "h-9 w-auto max-h-9 sm:h-10 sm:max-h-10",
  },
  hero: {
    width: 390,
    height: 260,
    className: "h-[8.25rem] w-auto sm:h-[10.5rem] lg:h-48",
  },
};

export function Logo({
  className = "",
  priority = false,
  size = "header",
}: LogoProps) {
  const config = sizeConfig[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center no-underline ${className}`}
      aria-label="ALICE — Accueil"
    >
      <Image
        src="/images/alice-logo.jpg"
        alt="ALICE — Alliance des Libéraux, Indépendants, Centristes de l'Étranger"
        width={config.width}
        height={config.height}
        priority={priority}
        className={`${config.className} object-contain`}
      />
    </Link>
  );
}
