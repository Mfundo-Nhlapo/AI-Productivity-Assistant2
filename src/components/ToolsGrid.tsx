import { Mail, FileAudio, ListTodo, Search, MessageSquare, Mic, FileText, BarChart3, ArrowUpRight } from "lucide-react";

const tools = [
  { icon: Mail, title: "Smart Email Generator", desc: "Draft pitch-perfect emails with tone selectors — formal, friendly, persuasive.", glow: "from-purple-500 to-fuchsia-500" },
  { icon: FileAudio, title: "Meeting Notes Summarizer", desc: "Turn long meetings into summaries, decisions, action items, and deadlines.", glow: "from-fuchsia-500 to-rose-500" },
  { icon: ListTodo, title: "AI Task Planner", desc: "Auto-prioritize tasks, generate schedules, and get productivity suggestions.", glow: "from-rose-500 to-red-500" },
  { icon: Search, title: "Research Assistant", desc: "Get deep summaries, insights, and curated recommendations from any topic.", glow: "from-purple-500 to-violet-500" },
  { icon: MessageSquare, title: "AI Chat Assistant", desc: "Conversational workplace AI — your always-on copilot for any question.", glow: "from-violet-500 to-purple-500" },
  { icon: Mic, title: "Voice-to-Task", desc: "Speak naturally and watch AI convert speech into structured tasks instantly.", glow: "from-pink-500 to-rose-500" },
  { icon: FileText, title: "Document Analyzer", desc: "Upload PDFs and contracts — extract key clauses, risks, and summaries.", glow: "from-red-500 to-orange-500" },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Visualize productivity, AI usage, and team performance with smart charts.", glow: "from-fuchsia-500 to-purple-500" },
];

export function ToolsGrid() {
  return (
    <section aria-labelledby="tools-title" className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <h2 id="tools-title" className="text-2xl font-bold tracking-tight">AI Tools</h2>
          <p className="text-sm text-muted-foreground mt-1">Eight intelligent modules. One workspace.</p>
        </div>
        <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">View all →</button>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {tools.map((t) => {
          const Icon = t.icon;
          return (
            <article
              key={t.title}
              className="group glass glass-hover rounded-xl p-5 relative overflow-hidden cursor-pointer"
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-30 blur-2xl bg-gradient-to-br ${t.glow} group-hover:opacity-60 transition-opacity`} aria-hidden />

              <div className="relative space-y-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.glow} p-[1px]`}>
                  <div className="w-full h-full rounded-xl bg-card/80 backdrop-blur flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" aria-hidden />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{t.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{t.desc}</p>
                </div>

                <button
                  aria-label={`Open ${t.title}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/90 group-hover:gap-2 transition-all pt-1"
                >
                  Open Tool
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary" aria-hidden />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
