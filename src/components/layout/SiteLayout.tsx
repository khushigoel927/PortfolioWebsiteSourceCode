import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
    >
      {label}
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-serif text-xl tracking-tight">
            Khushi Goel
          </Link>
          <div className="flex items-center gap-8">
            <NavLink to="/" label="About" />
            <NavLink to="/projects" label="Projects" />
            <NavLink to="/photography" label="Photography" />
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="mt-32 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-base text-foreground">Khushi Goel</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/khushigoel927" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/khushigoel-cal/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
