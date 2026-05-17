import { Brain, Code2, Rocket, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Brain, title: "AI/ML Focus", text: "Exploring deep learning, computer vision, and intelligent systems." },
  { icon: Code2, title: "Builder Mindset", text: "Turning ideas into clean, functional code and real applications." },
  { icon: Rocket, title: "Problem Solver", text: "Love tackling DSA challenges and engineering practical solutions." },
  { icon: Sparkles, title: "Daily Learner", text: "Improving skills every single day with curiosity and discipline." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title={<>The story <span className="text-gradient">behind the code</span></>}>
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="glass neon-border rounded-2xl p-8 text-muted-foreground leading-relaxed">
            <p className="mb-4">
              I'm <span className="text-foreground font-semibold">Kajal Sharma</span>, currently pursuing my B.Tech in
              Computer Science Engineering with a specialization in Artificial Intelligence & Machine Learning at
              <span className="text-foreground"> Shri Vishwakarma Skill University</span>.
            </p>
            <p className="mb-4">
              My journey is driven by a deep curiosity for how machines learn and how technology can be used to
              solve real-world problems. From building productivity tools to experimenting with computer vision,
              I love crafting projects that bridge logic and creativity.
            </p>
            <p>
              I'm an enthusiastic learner who believes in consistent growth — sharpening my skills in programming,
              problem-solving, and engineering one project at a time.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <div className="glass neon-glow-hover h-full rounded-2xl p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-neon text-white">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-display text-lg font-semibold">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
