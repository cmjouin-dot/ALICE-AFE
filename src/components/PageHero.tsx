import type { ReactNode } from "react";
import { Container } from "./Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <header className="border-b border-alice-border bg-alice-gray">
      <Container className="py-16 sm:py-20 lg:py-24">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-alice-blue">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-4xl font-medium tracking-tight text-alice-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg text-alice-muted sm:text-xl">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </header>
  );
}
