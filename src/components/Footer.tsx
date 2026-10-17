import Link from "next/link";
import { footerLegal, navigation, siteConfig } from "@/data/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-alice-border bg-alice-navy text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl font-medium tracking-tight">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              {siteConfig.fullName}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              Groupe politique indépendant au sein de l&apos;
              {siteConfig.afeName} ({siteConfig.afeShort}).
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Informations
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLegal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-white/55">
            Ce site est celui d&apos;un groupe politique indépendant au sein de
            l&apos;Assemblée des Français de l&apos;étranger. Il ne constitue
            pas un site officiel du gouvernement français ni de l&apos;AFE en
            tant qu&apos;institution.
          </p>
          <p className="mt-4 text-sm text-white/40">
            © 2026 {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}
