import { useState } from "react";
import { Copy, Sparkles, Check, RefreshCw } from "lucide-react";

const tones = ["Formal", "Friendly", "Persuasive"] as const;
type Tone = typeof tones[number];

const samples: Record<Tone, string> = {
  Formal: "Dear Team,\n\nI hope this message finds you well. I'm writing to follow up on our Q3 product roadmap discussion and to confirm the next steps outlined during our session.\n\nPlease review the attached summary at your earliest convenience and share any revisions by end of day Friday.\n\nBest regards,\nAlex",
  Friendly: "Hey team! 👋\n\nQuick recap from yesterday's roadmap chat — really loved the energy in the room. I've put together a short summary of what we agreed on, and I'd love your thoughts before Friday.\n\nThanks a million,\nAlex",
  Persuasive: "Team,\n\nYesterday's roadmap session unlocked something important — and we can't afford to lose momentum. The plan we aligned on positions us 3 months ahead of competitors, but only if we move now.\n\nReview the summary today. Reply by Friday. Let's ship.\n\nAlex",
};

export function EmailGeneratorPanel() {
  const [tone, setTone] = useState<Tone>("Formal");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(samples.Formal);
  const [copied, setCopied] = useState(false);

  const regenerate = (newTone?: Tone) => {
    const t = newTone ?? tone;
    setLoading(true);
    setOutput("");
    setTimeout(() => {
      setOutput(samples[t]);
      setLoading(false);
    }, 900);
  };

  const handleTone = (t: Tone) => {
    setTone(t);
    regenerate(t);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section aria-labelledby="email-gen-title" className="glass rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center glow-purple">
            <Sparkles className="w-5 h-5 text-white" aria-hidden />
          </div>
          <div>
            <h2 id="email-gen-title" className="font-semibold">Smart Email Generator</h2>
            <p className="text-xs text-muted-foreground">Pick a tone — AI drafts in seconds</p>
          </div>
        </div>

        <div className="flex gap-1 glass rounded-lg p-1" role="tablist" aria-label="Email tone">
          {tones.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tone === t}
              onClick={() => handleTone(t)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                tone === t ? "gradient-primary text-white shadow-md" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <textarea
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          aria-label="AI-generated email draft, editable"
          aria-live="polite"
          rows={10}
          className="w-full bg-background/40 border border-border rounded-xl p-4 text-sm leading-relaxed font-mono resize-none focus:border-primary/50 transition-colors"
          placeholder={loading ? "AI is drafting..." : ""}
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm rounded-xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-typing" />
              <span className="w-2 h-2 rounded-full bg-[var(--neon-magenta)] animate-typing" style={{ animationDelay: "0.2s" }} />
              <span className="w-2 h-2 rounded-full bg-[var(--neon-red)] animate-typing" style={{ animationDelay: "0.4s" }} />
              <span className="ml-2">AI is composing...</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <button
          onClick={() => regenerate()}
          className="inline-flex items-center gap-1.5 glass glass-hover px-4 py-2 rounded-lg text-xs font-medium"
        >
          <RefreshCw className="w-3.5 h-3.5" aria-hidden /> Regenerate
        </button>
        <button
          onClick={copy}
          aria-label="Copy email to clipboard"
          className="inline-flex items-center gap-1.5 gradient-primary text-white px-4 py-2 rounded-lg text-xs font-medium glow-purple"
        >
          {copied ? <><Check className="w-3.5 h-3.5" aria-hidden /> Copied</> : <><Copy className="w-3.5 h-3.5" aria-hidden /> Copy</>}
        </button>
      </div>
    </section>
  );
}
