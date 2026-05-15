import { createFileRoute, Link } from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { StatsGrid } from "@/components/StatsGrid";
import { ToolsGrid } from "@/components/ToolsGrid";
import { EmailGeneratorPanel } from "@/components/EmailGeneratorPanel";
import { RightPanel } from "@/components/RightPanel";
import { ActivityFeed } from "@/components/ActivityFeed";
import { Info, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/workly")({
  head: () => ({
    meta: [
      { title: "Workly AI — Live Demo · Mfundo Nhlapo Portfolio" },
      { name: "description", content: "Live demo of Workly AI — an AI workplace productivity assistant built by Mfundo Nhlapo." },
      { property: "og:title", content: "Workly AI — Live Demo" },
      { property: "og:description", content: "The futuristic AI workspace built for modern teams." },
    ],
  }),
  component: WorklyDemo,
});

function WorklyDemo() {
  return (
    <div className="dark min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 min-w-0 flex flex-col">
          <TopNav />
          <div className="px-4 lg:px-8 pt-4">
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground glass glass-hover px-3 py-1.5 rounded-lg">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to portfolio
            </Link>
          </div>
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
              <p>© 2026 Workly AI · A project by Mfundo Nhlapo</p>
            </footer>
          </main>
        </div>
        <RightPanel />
      </div>
    </div>
  );
}
