"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/site";
import { Container } from "./Container";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    setOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-alice-border/80 bg-white/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-[4.25rem]">
        {pathname === "/" ? <span aria-hidden className="w-0" /> : <Logo priority />}

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Navigation principale"
        >
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-alice-navy"
                    : "text-alice-muted hover:text-alice-navy"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? (
                  <span
                    className="absolute inset-x-2.5 -bottom-[calc(0.5rem+1px)] h-0.5 bg-alice-coral"
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-alice-navy lg:hidden"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <X size={24} strokeWidth={1.75} />
          ) : (
            <Menu size={24} strokeWidth={1.75} />
          )}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`border-t border-alice-border bg-white lg:hidden ${
          open ? "block animate-fade-in" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8"
          aria-label="Navigation mobile"
        >
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`border-b border-alice-border py-3.5 text-base font-medium last:border-0 ${
                  active ? "text-alice-blue" : "text-alice-navy"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
