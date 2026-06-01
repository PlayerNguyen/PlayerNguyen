import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    titleKey: "projects.items.portfolio.title",
    descriptionKey: "projects.items.portfolio.description",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/PlayerNguyen/PlayerNguyen",
    liveUrl: "https://playernguyen.dev",
    category: "web",
  },
  {
    id: "express-api",
    titleKey: "projects.items.express_api.title",
    descriptionKey: "projects.items.express_api.description",
    tech: ["Express", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/PlayerNguyen",
    category: "web",
  },
  {
    id: "java-tool",
    titleKey: "projects.items.java_tool.title",
    descriptionKey: "projects.items.java_tool.description",
    tech: ["Java", "Spring Boot", "Maven"],
    githubUrl: "https://github.com/PlayerNguyen",
    category: "tools",
  },
];
