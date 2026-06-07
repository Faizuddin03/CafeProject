"use client";

import Link from "next/link";
import { Coffee, Menu } from "lucide-react";
import { useEffect, useRef } from "react";
import { getGsap, ScrollTrigger } from "@/lib/gsap";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const header = headerRef.current;

    if (!nav || !header) {
      return;
    }

    const gsap = getGsap();
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      gsap.set(nav, {
        maxWidth: "calc(100vw - 2rem)",
        borderRadius: "1.5rem",
      });

      media.add("(min-width: 768px)", () => {
        gsap.set(nav, {
          maxWidth: "calc(100vw - 4rem)",
          borderRadius: "9999px",
        });

        gsap.to(nav, {
          maxWidth: "64rem",
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "80px top",
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        });
      });

      media.add("(max-width: 767px)", () => {
        gsap.to(nav, {
          maxWidth: "64rem",
          borderRadius: "9999px",
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "80px top",
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, header);

    return () => {
      context.revert();
      media.revert();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav
        ref={navRef}
        aria-label="Primary navigation"
        className="mx-auto flex min-h-16 w-full max-w-none items-center justify-between gap-4 rounded-3xl border border-surface-border bg-surface/30 px-4 py-3 text-copy-primary backdrop-blur-md sm:px-5 md:rounded-full"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          aria-label="Cafe Landing Page home"
        >

          <span className="font-tempting text-xl font-semibold leading-none text-primary">
            Fresh
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-subtle/70 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-copy-primary transition-colors hover:bg-surface hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#reservation"
            className="hidden rounded-full bg-accent-warm px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent-primary hover:text-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:inline-flex"
          >
            Reserve
          </Link>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-controls="mobile-navigation-dialog"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface text-brand shadow-sm transition-colors hover:bg-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary md:hidden"
            data-navbar-dialog-trigger
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden
        data-navbar-dialog
      >
        <div className="rounded-3xl border border-surface-border bg-surface p-4 shadow-lg">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="#reservation">Reserve</Link>
        </div>
      </div>
    </header>
  );
}
