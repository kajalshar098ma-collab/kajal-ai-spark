import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({ id, eyebrow, title, subtitle, children }: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 text-center">
            <div className="mb-3 inline-block rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
              {eyebrow}
            </div>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">{title}</h2>
            {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
