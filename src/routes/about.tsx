import { createFileRoute, Link } from "@tanstack/react-router";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { Brain, Workflow, FileSearch, Bot, Sparkles, GraduationCap, Briefcase, Trophy } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mfundo Nhlapo" },
      { name: "description", content: "About Mfundo Nhlapo — a Knowledge Management Specialist applying AI tools to automate everyday business tasks." },
      { property: "og:title", content: "About — Mfundo Nhlapo" },
      { property: "og:description", content: "Knowledge Management Specialist focused on practical, responsible AI in the workplace." },
    ],
  }),
  component: AboutPage,
});

const skills = [
  { icon: Brain, label: "Knowledge Management" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: Bot, label: "Prompt Engineering" },
  { icon: FileSearch, label: "Information Architecture" },
  { icon: Sparkles, label: "AI Tool Integration" },
];

const timeline = [
  { icon: Briefcase, year: "2024 — Now", title: "Knowledge Management Specialist", body: "Designing AI-augmented workflows that reduce manual ops for distributed teams." },
  { icon: Sparkles, year: "2023", title: "AI Skills Acceleration Programme (ASA_2)", body: "Hands-on training in prompt engineering, AI ethics and applied LLM workflows." },
  { icon: Trophy, year: "2022", title: "First production AI assistant", body: "Built and shipped an internal email + research copilot for an operations team." },
  { icon: GraduationCap, year: "Earlier", title: "Foundations", body: "Background in information science, taxonomy design and digital content operations." },
];

function AboutPage() {
  return (
    <PortfolioLayout>
      <section className="max-w-4xl mx-auto px-4 lg:px-8 pt-16 lg:pt-20 pb-10">
        <p className="text-xs uppercase tracking-widest text-[var(--neon-magenta)] mb-3">About</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Hi, I'm Mfundo — I make <span className="gradient-text">AI feel useful</span> at work.
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-6 leading-relaxed">
          I'm a Knowledge Management Specialist focused on using AI tools to automate and ease the
          repetitive parts of business — drafting communication, summarizing meetings, organizing
          documents and surfacing insights. I care about practical results, clean information
          architecture, and responsible AI practices that keep humans in the loop.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 lg:px-8 py-10" aria-labelledby="skills-h">
        <h2 id="skills-h" className="text-xl font-semibold mb-4">Core skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map(({ icon: Icon, label }) => (
            <span key={label} className="glass inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs">
              <Icon className="w-3.5 h-3.5 text-[var(--neon-magenta)]" /> {label}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 lg:px-8 py-10" aria-labelledby="journey-h">
        <h2 id="journey-h" className="text-xl font-semibold mb-6">Journey</h2>
        <ol className="relative border-l border-border/60 ml-2 space-y-6">
          {timeline.map(({ icon: Icon, year, title, body }) => (
            <li key={title} className="pl-6 relative">
              <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full gradient-primary flex items-center justify-center glow-purple">
                <Icon className="w-3 h-3 text-white" aria-hidden />
              </span>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{year}</p>
              <h3 className="font-semibold mt-1">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
        <div className="glass rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm">Want to work together on an AI workflow?</p>
          <Link to="/contact" className="gradient-primary text-white px-4 py-2 rounded-lg text-xs font-semibold glow-purple">
            Get in touch
          </Link>
        </div>
      </section>
    </PortfolioLayout>
  );
}
