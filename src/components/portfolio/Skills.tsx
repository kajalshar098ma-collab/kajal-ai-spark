import { Code, Cpu, Wrench } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const groups = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 82 },
      { name: "Data Structures", level: 70 },
    ],
  },
  {
    icon: Cpu,
    title: "AI & Tech Skills",
    skills: [
      { name: "Artificial Intelligence", level: 78 },
      { name: "Computer Vision", level: 72 },
      { name: "AI Deployment", level: 65 },
      { name: "Problem Solving", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Techniques",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "Virtual Environment", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>What I <span className="text-gradient">work with</span></>}>
      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 120}>
            <div className="glass neon-glow-hover h-full rounded-2xl p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-neon text-white">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-neon transition-[width] duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
