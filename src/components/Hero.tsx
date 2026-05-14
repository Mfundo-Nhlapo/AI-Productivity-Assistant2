import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import brain from "@/assets/ai-brain.png";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative glass rounded-2xl p-6 sm:p-10 overflow-hidden grid-bg"
    >
      {/* Decorative glows */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[var(--neon-red)]/25 rounded-full blur-3xl pointer-events-none" aria-hidden />

      <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
        <div className="space-y-6 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[var(--neon-magenta)]" aria-hidden />
            <span>Powered by next-gen AI models</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="text-muted-foreground">v2.4</span>
          </div>

          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Your <span className="gradient-text text-glow">AI Workplace</span><br />Assistant.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Automate emails, summarize meetings, plan your work, and research smarter — all in one intelligent workspace built for modern teams.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 gradient-primary text-white px-5 py-3 rounded-xl font-medium text-sm glow-purple hover:scale-[1.02] transition-transform">
              Start with Email
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </button>
            <button className="inline-flex items-center gap-2 glass glass-hover px-5 py-3 rounded-xl font-medium text-sm">
              <MessageSquare className="w-4 h-4" aria-hidden />
              Open AI Chat
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#a855f7", "#ec4899", "#ef4444"].map((c, i) => (
                  <div key={i} className="w-6 h-6 rounded-full ring-2 ring-background" style={{ background: c }} />
                ))}
              </div>
              <span>12,400+ teams</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[var(--neon-magenta)]">★★★★★</span>
              <span>4.9 rating</span>
            </div>
          </div>
        </div>

        {/* Brain visual */}
        <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
          </div>
          <img
            src={brain}
            alt="Glowing AI neural brain visualization"
            width={1024}
            height={1024}
            className="relative w-full max-w-md object-contain animate-float drop-shadow-[0_0_60px_oklch(0.65_0.28_305_/_0.6)] mix-blend-screen"
          />
          {/* Orbit rings */}
          <div className="absolute inset-8 rounded-full border border-primary/20 animate-spin-slow pointer-events-none" />
          <div className="absolute inset-16 rounded-full border border-[var(--neon-red)]/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
