"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-bg/90 border-border backdrop-blur-md"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-bold tracking-wide text-green-soft"
        >
          <Terminal size={18} className="text-green" aria-hidden="true" />
          <span className="text-muted">~/</span>
          habibamim
        </a>

        <ul className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-1 rounded px-3 py-2 text-muted transition-colors hover:text-green"
              >
                <span className="text-green-deep group-hover:text-green">
                  ./
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden rounded-sm border border-green-dim bg-green-deep/40 px-4 py-2 font-mono text-[13px] font-medium text-green-soft transition-colors hover:border-green hover:bg-green-deep/70 hover:text-green md:inline-block"
        >
          resume.pdf ↓
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-green md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/97 px-5 pb-6 pt-2 font-mono text-sm backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded px-2 py-3 text-muted hover:text-green"
                >
                  <span className="text-green-deep">./</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            download
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-sm border border-green-dim bg-green-deep/40 px-4 py-3 text-center font-medium text-green-soft"
          >
            resume.pdf ↓
          </a>
        </div>
      )}
    </header>
  );
}
