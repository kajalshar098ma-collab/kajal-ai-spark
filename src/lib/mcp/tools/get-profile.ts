import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Returns Kajal Sharma's bio, education, and social links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Kajal Sharma",
      tagline: "AI/ML Enthusiast | Future Software Engineer | Computer Vision Learner",
      education: {
        degree: "B.Tech CSE (AI/ML)",
        university: "Shri Vishwakarma Skill University",
        years: "2025–2029",
        status: "First Year Student",
      },
      links: {
        github: "https://github.com/kajalshar098ma-collab",
        linkedin: "https://www.linkedin.com/in/kajal-vyas-04a58b37a",
        portfolio: "https://kajalshar-portfolio.lovable.app",
        resume: "https://kajalshar-portfolio.lovable.app/resume.pdf",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
