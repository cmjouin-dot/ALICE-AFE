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
    className: "h-10 w-auto sm:h-11",
  },
  hero: {
    width: 260,
    height: 173,
    className: "h-[5.5rem] w-auto sm:h-28 lg:h-32",
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
