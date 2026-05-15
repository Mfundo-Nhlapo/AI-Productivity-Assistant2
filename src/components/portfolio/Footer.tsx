import { Github, Linkedin, Mail, Info } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 items-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold">Mfundo Nhlapo</p>
          <p className="text-xs text-muted-foreground max-w-md">
            Knowledge Management Specialist using AI tools to automate and ease everyday business tasks.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
            <Info className="w-3.5 h-3.5 text-[var(--neon-magenta)]" aria-hidden />
            <p>AI-generated content may require human review and verification.</p>
          </div>
        </div>
        <div className="flex sm:justify-end gap-2">
          <a href="mailto:hello@example.com" aria-label="Email" className="glass glass-hover w-10 h-10 rounded-lg inline-flex items-center justify-center"><Mail className="w-4 h-4" /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass glass-hover w-10 h-10 rounded-lg inline-flex items-center justify-center"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass glass-hover w-10 h-10 rounded-lg inline-flex items-center justify-center"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>
      <div className="border-t border-border/30">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 text-[11px] text-muted-foreground flex flex-wrap gap-2 justify-between">
          <p>© 2026 Mfundo Nhlapo · All rights reserved.</p>
          <p>Built with neon, glass & curiosity.</p>
        </div>
      </div>
    </footer>
  );
}
