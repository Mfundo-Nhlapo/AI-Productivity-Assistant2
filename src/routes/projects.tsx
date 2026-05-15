import { createFileRoute, Link } from "@tanstack/react-router";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { ArrowUpRight, Mail, FileAudio, ListTodo, Search, MessageSquare, FileText } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mfundo Nhlapo" },
      { name: "description", content: "Selected AI automation and knowledge management projects by Mfundo Nhlapo." },
      { property: "og:title", content: "Projects — Mfundo Nhlapo" },
      { property: "og:description", content: "AI assistants, automation workflows and knowledge tooling I've built." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Workly AI",
    tagline: "AI Workplace Productivity Assistant",
    desc: "All-in-one neon SaaS dashboard combining email drafting, meeting summarization, task planning, research and chat.",
    tags: ["React", "Tailwind", "Prompt Engineering", "SaaS UI"],
    icon: Mail,
    href: "/workly",
    featured: true,
  },
  {
    title: "MeetingMind",
    tagline: "Voice-to-Action meeting recap engine",
    desc: "Turns recorded meetings into structured summaries, decisions and assigned action items in seconds.",
    tags: ["Whisper", "LLM", "Automation"],
    icon: FileAudio,
  },
  {
    title: "FlowPlanner",
    tagline: "AI weekly planner for ops teams",
    desc: "Generates prioritized daily and weekly plans from a backlog, calendar and team capacity.",
    tags: ["Planning", "Agents", "Calendar API"],
    icon: ListTodo,
  },
  {
    title: "InsightLens",
    tagline: "AI research summarizer",
    desc: "Multi-source research assistant that condenses long reports into briefings with citations.",
    tags: ["RAG", "Vector Search", "Summarization"],
    icon: Search,
  },
  {
    title: "DeskBot",
    tagline: "Internal helpdesk copilot",
    desc: "Domain-trained chatbot answering HR, IT and policy questions using a private knowledge base.",
    tags: ["Chatbot", "Knowledge Base", "RAG"],
    icon: MessageSquare,
  },
  {
    title: "DocSense",
    tagline: "Smart document analyzer",
    desc: "Extracts key clauses, risks and obligations from contracts and policy documents.",
    tags: ["NLP", "Document AI"],
    icon: FileText,
  },
];

function ProjectsPage() {
  return (
    <PortfolioLayout>
      <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-16 lg:pt-20 pb-10">
        <p className="text-xs uppercase tracking-widest text-[var(--neon-magenta)] mb-3">Selected work</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Projects that put <span className="gradient-text">AI to work</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          A mix of shipped products and prototypes — all focused on automating tedious work
          and helping people make faster, better-informed decisions.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => {
          const Icon = p.icon;
          const Card = (
            <article className={`glass glass-hover rounded-2xl p-6 h-full flex flex-col group ${p.featured ? "lg:col-span-2 lg:row-span-1" : ""}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center glow-purple">
                  <Icon className="w-5 h-5 text-white" aria-hidden />
                </div>
                {p.featured && (
                  <span className="text-[10px] uppercase tracking-widest text-[var(--neon-magenta)] glass px-2 py-1 rounded-full">Featured</span>
                )}
              </div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-xs text-[var(--neon-magenta)] mt-0.5">{p.tagline}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground">{t}</span>
                ))}
              </div>
              {p.href && (
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-foreground group-hover:gap-2 transition-all">
                  View live demo <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              )}
            </article>
          );
          return p.href ? (
            <Link key={p.title} to={p.href} className="block">{Card}</Link>
          ) : (
            <div key={p.title}>{Card}</div>
          );
        })}
      </section>
    </PortfolioLayout>
  );
}
