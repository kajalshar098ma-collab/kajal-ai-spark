import { defineTool } from "@lovable.dev/mcp-js";

const certificates = [
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
    link: "https://www.linkedin.com/posts/kajal-vyas-04a58b37a_skillup-simplilearn-skillup-share-7475447088990961665-0qvj/",
  },
  {
    name: "AI Web Development Internship",
    issuer: "InAmigos Foundation",
    year: "2026",
    link: "https://www.linkedin.com/posts/kajal-vyas-04a58b37a_webdevelopment-internship-amigosfoundation-activity-7474664159763394560-mZPY",
  },
];

export default defineTool({
  name: "list_certificates",
  title: "List certificates",
  description: "Returns Kajal's certificates and internship completions with verification links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(certificates, null, 2) }],
    structuredContent: { certificates },
  }),
});
