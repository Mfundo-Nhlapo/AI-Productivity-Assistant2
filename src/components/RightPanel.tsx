import { Zap, Lightbulb, TrendingUp, Calendar, Mic, Mail, ListTodo, FileText } from "lucide-react";

const quickActions = [
  { icon: Mail, label: "New Email" },
  { icon: ListTodo, label: "Add Task" },
  { icon: FileText, label: "Analyze Doc" },
  { icon: Mic, label: "Voice Note" },
];

const suggestions = [
  "Summarize today's standup notes",
  "Draft follow-up to investor meeting",
  "Plan tomorrow's priority list",
];

const tips = [
  "Use ⌘+/ to open the AI chat from anywhere.",
  "Schedule recurring summaries for weekly meetings.",
];

function ScoreRing({ value }: { value: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative w-32 h-32" role="img" aria-label={`Productivity score ${value} out of 100`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.28 305)" />
            <stop offset="100%" stopColor="oklch(0.62 0.26 18)" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r={r} stroke="oklch(0.3 0.04 280)" strokeWidth="8" fill="none" />
        <circle
          cx="50" cy="50" r={r}
          stroke="url(#ring-grad)" strokeWidth="8" fill="none" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={offset}
          style={{ filter: "drop-shadow(0 0 6px oklch(0.65 0.28 305 / 0.6))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold gradient-text">{value}</span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</span>
      </div>
    </div>
  );
}

export function RightPanel() {
  return (
    <aside aria-label="AI insights" className="hidden xl:flex flex-col w-80 shrink-0 gap-4 p-4 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto">
      {/* Productivity Score */}
      <div className="glass rounded-xl p-5 text-center">
        <h3 className="text-sm font-semibold mb-3 flex items-center justify-center gap-2">
          <TrendingUp className="w-4 h-4 text-[var(--neon-magenta)]" aria-hidden />
          Productivity Score
        </h3>
        <div className="flex justify-center"><ScoreRing value={87} /></div>
        <p className="text-xs text-muted-foreground mt-3">+12% vs last week. You're on fire 🔥</p>
      </div>

      {/* Quick actions */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-[var(--neon-purple)]" aria-hidden /> Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map(({ icon: Icon, label }) => (
            <button key={label} className="flex flex-col items-center gap-1.5 p-3 rounded-lg glass glass-hover text-xs">
              <Icon className="w-4 h-4 text-primary" aria-hidden />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-[var(--neon-magenta)]" aria-hidden /> AI Suggestions
        </h3>
        <ul className="space-y-2">
          {suggestions.map((s) => (
            <li key={s}>
              <button className="w-full text-left text-xs px-3 py-2.5 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-colors leading-snug">
                {s}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Daily Progress */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[var(--neon-red)]" aria-hidden /> Daily Progress
        </h3>
        <div className="space-y-3">
          {[{ l: "Tasks", v: 78 }, { l: "Focus Time", v: 64 }, { l: "Goals", v: 92 }].map((p) => (
            <div key={p.l}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">{p.l}</span>
                <span className="font-medium">{p.v}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full gradient-primary rounded-full" style={{ width: `${p.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tips */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-[var(--neon-purple)]" aria-hidden /> AI Tips
        </h3>
        <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
          {tips.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary">→</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
