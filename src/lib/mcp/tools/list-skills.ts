import { defineTool } from "@lovable.dev/mcp-js";

const skills = {
  "Programming Languages": [
    { name: "Python", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 82 },
    { name: "Data Structures", level: 70 },
  ],
  "AI & Tech Skills": [
    { name: "Artificial Intelligence", level: 78 },
    { name: "Computer Vision", level: 72 },
    { name: "AI Deployment", level: 65 },
    { name: "Problem Solving", level: 80 },
  ],
  "Tools & Techniques": [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 85 },
    { name: "Virtual Environment", level: 75 },
    { name: "VS Code", level: 90 },
  ],
};

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "Returns Kajal's technical skills grouped by category with proficiency levels.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
    structuredContent: skills,
  }),
});
