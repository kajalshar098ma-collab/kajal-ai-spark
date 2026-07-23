import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listSkills from "./tools/list-skills";
import listCertificates from "./tools/list-certificates";

export default defineMcp({
  name: "kajal-portfolio-mcp",
  title: "Kajal Sharma Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools that expose Kajal Sharma's portfolio: bio, projects, skills, and certificates. Use these to answer questions about her background or link to her work.",
  tools: [getProfile, listProjects, listSkills, listCertificates],
});
