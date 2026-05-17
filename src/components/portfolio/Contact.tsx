import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const cards = [
  { icon: Mail, label: "Email", value: "kajalshar098ma@gmail.com", href: "mailto:kajalshar098ma@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 98171 80781", href: "tel:+919817180781" },
  { icon: Github, label: "GitHub", value: "kajalshar098ma-collab", href: "https://github.com/kajalshar098ma-collab" },
  { icon: Linkedin, label: "LinkedIn", value: "Kajal Vyas", href: "https://www.linkedin.com/in/kajal-vyas-04a58b37a" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's <span className="text-gradient">connect</span></>}
      subtitle="Have a project, opportunity, or just want to say hi? My inbox is open."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass neon-glow-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-neon text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="truncate text-sm font-medium">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
              (e.target as HTMLFormElement).reset();
            }}
            className="glass neon-border space-y-4 rounded-2xl p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" type="text" placeholder="What's this about?" />
            <div>
              <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about it..."
                className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--neon-cyan)]"
              />
            </div>
            <button
              type="submit"
              className="neon-glow-hover inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-neon px-6 py-3 text-sm font-semibold text-white"
            >
              {sent ? "Message sent ✓" : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        {...props}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--neon-cyan)]"
      />
    </div>
  );
}
