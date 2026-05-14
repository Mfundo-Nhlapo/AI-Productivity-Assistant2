import { Mail, FileAudio, ListTodo, Mic, Sparkles } from "lucide-react";

const items = [
  { icon: Mail, text: "Generated follow-up email to Acme Corp", time: "2m ago", color: "text-[var(--neon-purple)]" },
  { icon: FileAudio, text: "Summarized 47-min product sync meeting", time: "18m ago", color: "text-[var(--neon-magenta)]" },
  { icon: ListTodo, text: "Auto-prioritized 12 tasks for tomorrow", time: "1h ago", color: "text-[var(--neon-red)]" },
  { icon: Mic, text: "Converted voice memo into 4 action items", time: "3h ago", color: "text-[var(--neon-purple)]" },
];

export function ActivityFeed() {
  return (
    <section aria-labelledby="activity-title" className="glass rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[var(--neon-magenta)]" aria-hidden />
          <h2 id="activity-title" className="font-semibold">Recent AI Activity</h2>
        </div>
        <button className="text-xs text-muted-foreground hover:text-foreground">View log</button>
      </div>
      <ul className="space-y-1">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <li key={i} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-secondary/40 transition-colors">
              <div className={`w-9 h-9 rounded-lg glass flex items-center justify-center ${it.color}`}>
                <Icon className="w-4 h-4" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm truncate">{it.text}</p>
                <p className="text-xs text-muted-foreground">{it.time}</p>
              </div>
              <button className="text-xs text-primary hover:underline shrink-0">Open</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
