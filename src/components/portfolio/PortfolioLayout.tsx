import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-screen flex flex-col relative overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 grid-bg opacity-40" />
      <div aria-hidden className="pointer-events-none fixed -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-[var(--neon-purple)] opacity-20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none fixed -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-[var(--neon-red)] opacity-15 blur-[140px]" />
      <Nav />
      <main id="main" className="flex-1 relative">{children}</main>
      <Footer />
    </div>
  );
}
