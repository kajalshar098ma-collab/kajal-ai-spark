import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const certs = [
  {
    name: "Introduction to Generative AI Studio",
    issuer: "Google Cloud",
    year: "2025",
    link: "https://www.linkedin.com/posts/kajal-vyas-04a58b37a_introduction-to-generative-ai-studio-ugcPost-7415979447557701632-fTcQ",
  },
  {
    name: "Databricks Fundamentals",
    issuer: "Simplilearn",
    year: "2026",
    link: "/simplilearn-databricks-certificate.pdf",
  },
  {
    name: "AI Web Development Internship",
    issuer: "InAmigos Foundation",
    year: "2026",
    link: "/inamigos-internship-certificate.png",
  },
];

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="Certificates" title={<>Verified <span className="text-gradient">achievements</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {certs.map((c, i) => (
          <Reveal key={c.name} delay={i * 100}>
            <div className="glass neon-glow-hover group relative h-full overflow-hidden rounded-2xl p-7">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-neon opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-neon text-white neon-glow">
                  <Award className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-[var(--neon-cyan)]">{c.issuer}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
              >
                View Certificate <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
