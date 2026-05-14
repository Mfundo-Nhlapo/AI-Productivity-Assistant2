import { LayoutDashboard, Mail, FileAudio, ListTodo, Search, MessageSquare, FileText, Mic, BarChart3, Settings, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Mail, label: "Email Generator", id: "email" },
  { icon: FileAudio, label: "Meeting Summarizer", id: "meeting" },
  { icon: ListTodo, label: "AI Task Planner", id: "tasks" },
  { icon: Search, label: "Research Assistant", id: "research" },
  { icon: MessageSquare, label: "AI Chat Assistant", id: "chat" },
  { icon: FileText, label: "Document Analyzer", id: "doc" },
  { icon: Mic, label: "Voice-to-Task", id: "voice" },
  { icon: BarChart3, label: "Analytics & Insights", id: "analytics" },
  { icon: Settings, label: "Settings", id: "settings" },
];

export function Sidebar() {
  const [active, setActive] = useState("dashboard");
  return (
    <aside
      aria-label="Primary navigation"
      className="hidden lg:flex flex-col w-64 shrink-0 glass border-r border-border/50 p-4 gap-1 sticky top-0 h-screen"
    >
      <div className="flex items-center gap-2 px-3 py-4 mb-2">
        <div className="relative">
          <div className="absolute inset-0 bg-primary blur-lg opacity-60" />
          <div className="relative w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" aria-hidden />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-base tracking-tight">Workly <span className="gradient-text">AI</span></h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Workspace OS</p>
        </div>
      </div>

      <nav className="flex flex-col gap-1" aria-label="Main menu">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left",
                "hover:bg-secondary/60 hover:translate-x-0.5",
                isActive && "bg-secondary/80 text-foreground shadow-[inset_0_0_0_1px_oklch(0.65_0.28_305_/_0.4)]"
              )}
            >
              <Icon className={cn("w-4 h-4 shrink-0 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} aria-hidden />
              <span className={cn(isActive ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground")}>{it.label}</span>
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.65_0.28_305)]" />}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto glass rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--neon-magenta)] animate-pulse" />
          <p className="text-xs font-medium">Pro Plan Active</p>
        </div>
        <p className="text-[11px] text-muted-foreground">Unlimited AI calls • Priority models</p>
      </div>
    </aside>
  );
}
