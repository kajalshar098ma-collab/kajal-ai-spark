import { GraduationCap, School } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech CSE (AI/ML)",
    org: "Shri Vishwakarma Skill University",
    period: "2025 – 2029",
    detail: "Currently pursuing — specialization in Artificial Intelligence & Machine Learning.",
    badge: "Ongoing",
  },
  {
    icon: School,
    title: "Class 12th — Science",
    org: "Ch. Heeralal Sr. Sec. School (CBSE)",
    period: "2024 – 2025",
    detail: "Completed senior secondary with a strong foundation in mathematics and science.",
    badge: "75%",
  },
  {
    icon: School,
    title: "Class 10th",
    org: "Ch. Heeralal Sr. Sec. School (CBSE)",
    period: "2022 – 2023",
    detail: "Built early academic discipline and curiosity for problem solving.",
    badge: "88%",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title={<>Academic <span className="text-gradient">journey</span></>}>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 100}>
            <div className="glass neon-glow-hover relative h-full overflow-hidden rounded-2xl p-7">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-neon opacity-20 blur-2xl" />
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-neon text-white">
                  <it.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-[var(--neon-cyan)]/40 bg-[var(--neon-cyan)]/10 px-3 py-1 font-mono text-xs text-[var(--neon-cyan)]">
                  {it.badge}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-[var(--neon-purple)]">{it.org}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{it.period}</p>
              <p className="mt-4 text-sm text-muted-foreground">{it.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
