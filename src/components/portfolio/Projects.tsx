import { Github, ExternalLink, Calendar, Gamepad2, ListChecks, FileText } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const GITHUB = "https://github.com/kajalshar098ma-collab";

const projects = [
  {
    name: "Sarthi",
    desc: "A productivity and time management application that helps users manage schedules, set goals, and improve daily productivity with a clean, focused interface.",
    tags: ["Python", "AI", "Productivity"],
    icon: Calendar,
    repo: `${GITHUB}`,
    demo: "#",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Talent Sort",
    desc: "A resume-building and talent management platform that helps users create professional resumes and showcase their skills to recruiters.",
    tags: ["Web", "HTML/CSS", "UX"],
    icon: FileText,
    repo: `${GITHUB}`,
    demo: "#",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    name: "Tic Tac Toe Game",
    desc: "An interactive Tic Tac Toe game built with modern UI, smooth animations, and clean game-state logic.",
    tags: ["JavaScript", "Game", "UI"],
    icon: Gamepad2,
    repo: `${GITHUB}`,
    demo: "#",
    accent: "from-pink-500 to-rose-500",
  },
  {
    name: "To-Do List App",
    desc: "A task management application with a minimal, clean design — add, complete, and organize tasks effortlessly.",
    tags: ["Web", "Productivity", "UI"],
    icon: ListChecks,
    repo: `${GITHUB}`,
    demo: "#",
    accent: "from-emerald-400 to-teal-500",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've <span className="text-gradient">built</span></>}
      subtitle="A selection of recent work — explore the code on GitHub."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <article className="glass neon-glow-hover group relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]" />
                <p.icon className="h-20 w-20 text-white/90 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.2} />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/30 px-3 py-1 font-mono text-xs text-white backdrop-blur">
                  {p.name.toLowerCase().replace(/\s+/g, "-")}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-neon px-4 py-2 text-xs font-semibold text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 text-center">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold neon-glow-hover"
          >
            <Github className="h-4 w-4" /> View all on GitHub
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
