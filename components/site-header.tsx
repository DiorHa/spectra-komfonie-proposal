"use client";

import { Menu } from "lucide-react";
import { navItems } from "@/lib/content";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/75 backdrop-blur-md">
      <div className="container-pad flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-medium tracking-[0.14em] text-text/90">SPECTRA</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-text">
              {item.label}
            </a>
          ))}
          <div className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            EN | DE
          </div>
        </nav>

        <button
          className="inline-flex rounded-lg border border-line p-2 text-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigation"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {open && (
        <div className="border-t border-line/70 bg-panel/95 md:hidden">
          <div className="container-pad grid gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted"
              >
                {item.label}
              </a>
            ))}
            <div className="text-xs text-muted">Language scaffold: EN / DE</div>
          </div>
        </div>
      )}
    </header>
  );
}
