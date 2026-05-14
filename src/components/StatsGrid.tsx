import { useEffect, useState } from "react";
import { Clock, TrendingUp, Target, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Clock, label: "Hours Saved", value: 247, suffix: "h", color: "text-[var(--neon-purple)]", trend: "+18%" },
  { icon: TrendingUp, label: "Productivity Increase", value: 64, suffix: "%", color: "text-[var(--neon-magenta)]", trend: "+12%" },
  { icon: Target, label: "AI Accuracy", value: 98, suffix: "%", color: "text-[var(--neon-red)]", trend: "+0.4%" },
  { icon: CheckCircle2, label: "Tasks Completed", value: 1284, suffix: "", color: "text-[var(--neon-purple)]", trend: "+126" },
];

function useCounter(target: number, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

function StatCard({ stat }: { stat: typeof stats[number] }) {
  const Icon = stat.icon;
  const value = useCounter(stat.value);
  return (
    <div className="glass glass-hover rounded-xl p-5 relative overflow-hidden group" role="article" aria-label={stat.label}>
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl bg-primary group-hover:opacity-40 transition-opacity" aria-hidden />
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center ${stat.color}`}>
          <Icon className="w-5 h-5" aria-hidden />
        </div>
        <span className="text-xs font-medium text-[var(--neon-magenta)] glass px-2 py-0.5 rounded-full">{stat.trend}</span>
      </div>
      <div className="text-3xl font-bold tracking-tight" aria-live="polite">
        {value.toLocaleString()}<span className="text-xl text-muted-foreground">{stat.suffix}</span>
      </div>
      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
    </div>
  );
}

export function StatsGrid() {
  return (
    <section aria-label="Productivity statistics" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => <StatCard key={s.label} stat={s} />)}
    </section>
  );
}
