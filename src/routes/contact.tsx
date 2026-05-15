import { createFileRoute } from "@tanstack/react-router";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";
import { useState, FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mfundo Nhlapo" },
      { name: "description", content: "Get in touch with Mfundo Nhlapo for AI automation and knowledge management projects." },
      { property: "og:title", content: "Contact — Mfundo Nhlapo" },
      { property: "og:description", content: "Let's build something useful with AI." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PortfolioLayout>
      <section className="max-w-5xl mx-auto px-4 lg:px-8 pt-16 lg:pt-20 pb-20 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--neon-magenta)] mb-3">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let's build something <span className="gradient-text">useful</span>.
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Have a workflow you'd love to automate, a knowledge base to organize, or an AI
            assistant to design? Drop me a line — I usually reply within 1 business day.
          </p>

          <ul className="mt-8 space-y-3">
            <li>
              <a href="mailto:hello@example.com" className="glass glass-hover rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[var(--neon-magenta)]" /> hello@example.com
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="glass glass-hover rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
                <Github className="w-4 h-4 text-[var(--neon-magenta)]" /> github.com/mfundo
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="glass glass-hover rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
                <Linkedin className="w-4 h-4 text-[var(--neon-magenta)]" /> linkedin.com/in/mfundo
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={submit} className="glass rounded-2xl p-6 space-y-4" aria-label="Contact form">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium">Name</label>
              <input id="name" name="name" required className="w-full bg-background/40 border border-border rounded-lg px-3 py-2.5 text-sm focus:border-primary/60" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium">Email</label>
              <input id="email" type="email" name="email" required className="w-full bg-background/40 border border-border rounded-lg px-3 py-2.5 text-sm focus:border-primary/60" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-medium">Subject</label>
            <input id="subject" name="subject" required className="w-full bg-background/40 border border-border rounded-lg px-3 py-2.5 text-sm focus:border-primary/60" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium">Message</label>
            <textarea id="message" name="message" required rows={6} className="w-full bg-background/40 border border-border rounded-lg px-3 py-2.5 text-sm resize-none focus:border-primary/60" />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 gradient-primary text-white px-4 py-3 rounded-lg text-sm font-semibold glow-purple"
          >
            {sent ? <><Check className="w-4 h-4" /> Message sent</> : <><Send className="w-4 h-4" /> Send Message</>}
          </button>
          <p aria-live="polite" className="sr-only">{sent ? "Your message has been sent." : ""}</p>
          <p className="text-[11px] text-muted-foreground text-center">
            This is a demo form — no data is transmitted.
          </p>
        </form>
      </section>
    </PortfolioLayout>
  );
}
