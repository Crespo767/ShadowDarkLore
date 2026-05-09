import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "O ShadowDark" },
  { to: "/mundo-acima", label: "Mundo Acima" },
  { to: "/mundo-abaixo", label: "Mundo Abaixo" },
  { to: "/escuridao", label: "A Escuridão" },
  { to: "/aventureiros", label: "Aventureiros" },
  { to: "/fe-ordem-caos", label: "Fé & Caos" },
  { to: "/lugares", label: "Lugares" },
  { to: "/rumores", label: "Rumores" },
  { to: "/glossario", label: "Glossário" },
  { to: "/oficial", label: "Oficial" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <Flame className="h-5 w-5 text-flame animate-flicker" />
          <span className="font-display text-sm sm:text-base tracking-widest uppercase text-ivory group-hover:text-flame transition-colors">
            ShadowDark <span className="text-flame">Compendium</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-flame transition-colors font-display"
              activeProps={{ className: "px-3 py-2 text-xs uppercase tracking-wider text-flame font-display" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="lg:hidden text-ivory hover:text-flame"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background/95">
          <div className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="py-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-flame font-display"
                activeProps={{ className: "py-2 text-sm uppercase tracking-wider text-flame font-display" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
