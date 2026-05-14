import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { StatsGrid } from "@/components/StatsGrid";
import { ToolsGrid } from "@/components/ToolsGrid";
import { EmailGeneratorPanel } from "@/components/EmailGeneratorPanel";
import { RightPanel } from "@/components/RightPanel";
import { ActivityFeed } from "@/components/ActivityFeed";
import { Info } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workly AI — Your AI Workplace Productivity Assistant" },
      { name: "description", content: "Automate emails, summarize meetings, plan tasks, and research smarter with Workly AI — the all-in-one intelligent workspace." },
      { property: "og:title", content: "Workly AI — Your AI Workplace Productivity Assistant" },
      { property: "og:description", content: "The futuristic AI workspace built for modern teams." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="dark min-h-screen flex">
      <Sidebar />

      <div className="flex-1 flex min-w-0">
        <div className="flex-1 min-w-0 flex flex-col">
          <TopNav />

          <main className="flex-1 p-4 lg:p-8 space-y-8 max-w-[1400px]" id="main-content">
            <Hero />
            <StatsGrid />
            <ToolsGrid />

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
              <EmailGeneratorPanel />
              <ActivityFeed />
            </div>

            <footer className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-[var(--neon-magenta)]" aria-hidden />
                <p>AI-generated content may require human review and verification.</p>
              </div>
              <p>© 2026 Workly AI · Crafted for modern workplaces</p>
            </footer>
          </main>
        </div>

        <RightPanel />
      </div>
    </div>
  );
}
