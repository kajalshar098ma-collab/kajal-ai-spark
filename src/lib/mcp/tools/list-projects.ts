import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const projects = [
  {
    name: "Sarthi",
    description:
      "A productivity and time management application that helps users manage schedules, set goals, and improve daily productivity.",
    tags: ["Python", "AI", "Productivity"],
    repo: "https://github.com/kajalshar098ma-collab",
    demo: "https://kajalshar098ma-collab.github.io/sarthi-app/",
  },
  {
    name: "Talent Sort",
    description:
      "A smart resume builder and direct hiring platform that helps users create professional resumes and showcase skills to recruiters.",
    tags: ["Web", "HTML/CSS", "UX"],
    repo: "https://github.com/kajalshar098ma-collab",
    demo: "https://kajalshar098ma-collab.github.io/talentsort-/",
  },
  {
    name: "Stock Data Handler",
    description:
      "A Python data visualization project that fetches and plots stock market data using pandas and matplotlib.",
    tags: ["Python", "Pandas", "Matplotlib"],
    repo: "https://github.com/kajalshar098ma-collab",
    demo: null,
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "An interactive Tic Tac Toe game with clean UI and game-state logic.",
    tags: ["JavaScript", "Game", "UI"],
    repo: "https://github.com/kajalshar098ma-collab",
    demo: "https://kajalshar098ma-collab.github.io/tic-tac-toe-game/",
  },
  {
    name: "Advanced To-Do App",
    description:
      "A feature-rich to-do application with categories, due dates, search, filters, and dark mode.",
    tags: ["JavaScript", "HTML/CSS", "Productivity"],
    repo: "https://github.com/kajalshar098ma-collab",
    demo: "https://kajalshar098ma-collab.github.io/to-do-list/",
  },
];

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "Lists Kajal's portfolio projects with descriptions, tags, GitHub repos, and live demo URLs. Optionally filter by tag.",
  inputSchema: {
    tag: z
      .string()
      .optional()
      .describe("Optional case-insensitive tag filter (e.g. 'Python', 'Web')."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ tag }) => {
    const filtered = tag
      ? projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
        )
      : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { projects: filtered },
    };
  },
});
