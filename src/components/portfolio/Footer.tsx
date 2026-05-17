import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Kajal Sharma</span>. Crafted with{" "}
          <Heart className="inline h-3.5 w-3.5 text-[var(--neon-pink)]" /> & code.
        </p>
        <div className="flex items-center gap-4">
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
    </footer>
  );
}
