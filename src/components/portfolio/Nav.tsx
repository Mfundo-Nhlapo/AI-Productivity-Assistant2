import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Mfundo Nhlapo — Home">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" aria-hidden />
            </div>
          </div>
          <div className="leading-tight">
            <p className="font-bold text-sm tracking-tight">Mfundo <span className="gradient-text">Nhlapo</span></p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Knowledge Mgmt · AI</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm rounded-md text-foreground bg-secondary/60" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-1.5 gradient-primary text-white px-4 py-2 rounded-lg text-xs font-semibold glow-purple"
          >
            Hire Me
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg glass"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className={cn("md:hidden overflow-hidden transition-all", open ? "max-h-80" : "max-h-0")}>
        <nav className="px-4 pb-4 flex flex-col gap-1" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              activeProps={{ className: "px-3 py-2.5 rounded-lg text-sm text-foreground bg-secondary/70" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
