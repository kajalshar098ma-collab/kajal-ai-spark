import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";

const roles = [
  "AI/ML Enthusiast",
  "Future Software Engineer",
  "Computer Vision Learner",
];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
            Available for internships & collaborations
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Kajal Sharma</span>
          </h1>

          <div className="font-mono text-lg text-muted-foreground sm:text-xl">
            <span className="text-foreground">&gt; </span>
            <span className="text-gradient">{text}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-blink bg-[var(--neon-cyan)]" style={{ height: "1em", verticalAlign: "-2px" }} />
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am a passionate first-year <span className="text-foreground">B.Tech CSE (AI/ML)</span> student exploring
            Artificial Intelligence, Machine Learning, Web Development, and Computer Vision.
            I love building impactful projects that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="neon-glow-hover inline-flex items-center gap-2 rounded-full bg-gradient-neon px-6 py-3 text-sm font-semibold text-white"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.jpg"
              download
              className="neon-glow-hover inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="neon-glow-hover inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com/kajalshar098ma-collab" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/kajal-vyas-04a58b37a" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:kajalshar098ma@gmail.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-30 blur-3xl" />
          </div>
          <div className="glass neon-border relative flex h-full w-full items-center justify-center rounded-full">
            <div className="absolute inset-6 rounded-full border border-[var(--neon-cyan)]/30" />
            <div className="absolute inset-12 rounded-full border border-[var(--neon-purple)]/30" />
            <div className="relative flex h-2/3 w-2/3 items-center justify-center rounded-full bg-gradient-neon font-display text-7xl font-bold text-white neon-glow">
              KS
            </div>
            <div className="absolute -top-2 right-10 rounded-full glass px-3 py-1 text-xs font-mono">AI/ML</div>
            <div className="absolute bottom-8 -left-2 rounded-full glass px-3 py-1 text-xs font-mono">B.Tech</div>
            <div className="absolute -right-2 top-1/2 rounded-full glass px-3 py-1 text-xs font-mono">CSE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
