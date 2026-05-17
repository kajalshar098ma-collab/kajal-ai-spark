import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certificates } from "@/components/portfolio/Certificates";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Particles } from "@/components/portfolio/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kajal Sharma — AI/ML Student & Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Kajal Sharma — B.Tech CSE (AI/ML) student at Shri Vishwakarma Skill University. Projects in AI, Computer Vision, and Web Development.",
      },
      { property: "og:title", content: "Kajal Sharma — AI/ML Student Portfolio" },
      { property: "og:description", content: "AI/ML Enthusiast | Future Software Engineer | Computer Vision Learner." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
