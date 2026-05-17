import { Section } from "./Section";
import { Reveal } from "./Reveal";

const milestones = [
  { year: "2022 – 2023", title: "Class 10th Completed", text: "Scored 88% — built strong foundations and early curiosity for tech." },
  { year: "2024 – 2025", title: "Class 12th Science", text: "Completed senior secondary with 75%, choosing the path of engineering." },
  { year: "2025 – 2029", title: "B.Tech CSE (AI/ML)", text: "Began my degree at Shri Vishwakarma Skill University, diving deep into AI." },
  { year: "Now", title: "Building Projects", text: "Started shipping AI and web development projects — learning by doing." },
];

export function Journey() {
  return (
    <Section id="journey" eyebrow="Journey" title={<>My <span className="text-gradient">timeline</span></>}>
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--neon-purple)] via-[var(--neon-cyan)] to-transparent md:left-1/2" />
        <div className="space-y-12">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <div className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                  <div className="h-4 w-4 rounded-full bg-gradient-neon neon-glow" />
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass neon-glow-hover rounded-2xl p-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--neon-cyan)]">{m.year}</span>
                    <h3 className="mt-2 font-display text-lg font-semibold">{m.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
