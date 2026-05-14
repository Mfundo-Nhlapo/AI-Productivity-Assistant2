import { Bell, Search, Moon, Sun, Mic, Menu } from "lucide-react";
import { useState } from "react";

export function TopNav() {
  const [dark, setDark] = useState(true);
  return (
    <header className="sticky top-0 z-40 glass border-b border-border/50 px-4 lg:px-8 py-3 flex items-center gap-3">
      <button className="lg:hidden p-2 rounded-lg hover:bg-secondary/60" aria-label="Open menu">
        <Menu className="w-5 h-5" aria-hidden />
      </button>

      <div className="relative flex-1 max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden />
        <input
          type="search"
          placeholder="Search tools, conversations, files..."
          aria-label="Search workspace"
          className="w-full bg-secondary/40 border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:bg-secondary/70 focus:border-primary/40 transition-all"
        />
        <kbd className="hidden md:inline absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-background/60 border border-border px-1.5 py-0.5 rounded">⌘K</kbd>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button
          aria-label="Voice assistant"
          className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center glass glass-hover relative"
        >
          <Mic className="w-4 h-4 text-[var(--neon-magenta)]" aria-hidden />
          <span className="absolute inset-0 rounded-full animate-pulse-glow opacity-40" />
        </button>

        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle dark mode"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary/60 transition-colors"
        >
          {dark ? <Moon className="w-4 h-4" aria-hidden /> : <Sun className="w-4 h-4" aria-hidden />}
        </button>

        <button
          aria-label="Notifications"
          className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary/60 transition-colors"
        >
          <Bell className="w-4 h-4" aria-hidden />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--neon-red)] shadow-[0_0_10px_oklch(0.62_0.26_18)]" />
        </button>

        <button aria-label="Profile menu" className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-semibold text-sm text-white ring-2 ring-primary/30">
          AK
        </button>
      </div>
    </header>
  );
}
