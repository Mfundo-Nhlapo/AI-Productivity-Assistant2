import { createFileRoute, Link } from "@tanstack/react-router";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { ArrowRight, Sparkles, Brain, Workflow, FileSearch, Bot, Zap } from "lucide-react";
import aiBrain from "@/assets/ai-brain.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mfundo Nhlapo — Knowledge Management & AI Automation Specialist" },
      { name: "description", content: "Portfolio of Mfundo Nhlapo — Knowledge Management Specialist using AI tools to automate and ease everyday business tasks." },
      { property: "og:title", content: "Mfundo Nhlapo — KM & AI Automation" },
      { property: "og:description", content: "I design AI-powered workflows that turn information chaos into clarity for modern teams." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { label: "Hours saved / month", value: "120+" },
  { label: "Workflows automated", value: "40" },
  { label: "Teams onboarded", value: "12" },
  { label: "Avg accuracy", value: "98%" },
];

const services = [
  { icon: Brain, title: "Knowledge Architecture", desc: "Designing scalable knowledge bases that AI agents can actually reason over." },
  { icon: Workflow, title: "Workflow Automation", desc: "Replacing repetitive ops with AI agents, prompts and integrations." },
  { icon: FileSearch, title: "AI Research & Insights", desc: "Turning scattered documents into searchable, summarized intelligence." },
  { icon: Bot, title: "Custom AI Assistants", desc: "Domain-specific copilots for sales, HR, ops and customer support." },
];

function HomePage() {
  return (
    <PortfolioLayout>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-16 lg:pt-24 pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-magenta)] animate-pulse" />
              Available for new projects · 2026
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              I help teams turn <span className="gradient-text">information chaos</span> into <span className="gradient-text">AI-powered clarity</span>.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Knowledge Management Specialist focused on using AI tools to automate and ease everyday
              business tasks — from email drafting and meeting recaps to research, planning and decision support.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/projects" className="inline-flex items-center gap-2 gradient-primary text-white px-5 py-3 rounded-xl text-sm font-semibold glow-purple">
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 glass glass-hover px-5 py-3 rounded-xl text-sm font-semibold">
                Start a Conversation
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-30 blur-3xl rounded-full animate-pulse-glow" />
            <img
              src={aiBrain}
              alt="Glowing neural network illustration representing AI-augmented thinking"
              loading="eager"
              className="relative w-full max-w-md mx-auto animate-float"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 py-16" aria-labelledby="services-h">
        <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--neon-magenta)] mb-2">What I do</p>
            <h2 id="services-h" className="text-3xl sm:text-4xl font-bold">Services built around <span className="gradient-text">AI fluency</span></h2>
          </div>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            More about me <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="glass glass-hover rounded-2xl p-5 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-purple transition-shadow">
                <Icon className="w-5 h-5 text-white" aria-hidden />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Featured project banner */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        <div className="glass rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--neon-purple)] opacity-30 blur-3xl rounded-full" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs glass px-3 py-1 rounded-full">
                <Sparkles className="w-3 h-3 text-[var(--neon-magenta)]" /> Featured Build
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold">Workly <span className="gradient-text">AI</span> — Workplace Productivity Assistant</h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                A futuristic AI workspace combining email drafting, meeting summarization,
                task planning, research and chat into one premium dashboard.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link to="/workly" className="inline-flex items-center gap-2 gradient-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold glow-purple">
                  Open Live Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/projects" className="inline-flex items-center gap-2 glass glass-hover px-5 py-2.5 rounded-xl text-sm font-semibold">
                  All Projects
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Email Generator", "Meeting Notes", "Task Planner", "Research"].map((t) => (
                <div key={t} className="glass rounded-xl p-3 text-xs flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[var(--neon-magenta)]" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
