import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import saarthiImg from "@/assets/project-saarthi.png";
import talentSortImg from "@/assets/project-talentsort.png";
import stockImg from "@/assets/project-stock.png";
import ticTacToeImg from "@/assets/project-tictactoe.png";
import todoImg from "@/assets/project-todo.png";

const GITHUB = "https://github.com/kajalshar098ma-collab";

const projects = [
  {
    name: "Sarthi",
    desc: "A productivity and time management application that helps users manage schedules, set goals, and improve daily productivity with a clean, focused interface.",
    tags: ["Python", "AI", "Productivity"],
    image: saarthiImg,
    repo: GITHUB,
    demo: "https://kajalshar098ma-collab.github.io/sarthi-app/",
  },
  {
    name: "Talent Sort",
    desc: "A smart resume builder and direct hiring platform that helps users create professional resumes and showcase their skills to recruiters.",
    tags: ["Web", "HTML/CSS", "UX"],
    image: talentSortImg,
    repo: GITHUB,
    demo: "https://kajalshar098ma-collab.github.io/talentsort-/",
  },
  {
    name: "Stock Data Handler",
    desc: "A Python data visualization project that fetches and plots stock market data — built with pandas and matplotlib to analyze price trends over time.",
    tags: ["Python", "Pandas", "Matplotlib"],
    image: stockImg,
    repo: GITHUB,
    demo: null,
  },
  {
    name: "Tic Tac Toe Game",
    desc: "An interactive Tic Tac Toe game built with clean UI and game-state logic — play, win, and restart with a smooth experience.",
    tags: ["JavaScript", "Game", "UI"],
    image: ticTacToeImg,
    repo: GITHUB,
    demo: "https://kajalshar098ma-collab.github.io/tic-tac-toe-game/",
  },
  {
    name: "Advanced To-Do App",
    desc: "A feature-rich to-do application with task categories, due dates, search, filters (All/Completed/Pending), and a dark mode toggle for a smooth productivity experience.",
    tags: ["JavaScript", "HTML/CSS", "Productivity"],
    image: todoImg,
    repo: GITHUB,
    demo: "https://kajalshar098ma-collab.github.io/to-do-list/",
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
              <div className="relative h-56 overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={`${p.name} project screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 font-mono text-xs text-white backdrop-blur">
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
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-neon px-4 py-2 text-xs font-semibold text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Live demo coming soon"
                      className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-2 text-xs font-semibold text-muted-foreground opacity-60"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Demo Soon
                    </span>
                  )}
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
