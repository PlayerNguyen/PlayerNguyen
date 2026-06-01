import type { IconType } from "react-icons";

export interface SocialLink {
  icon: IconType;
  label: string;
  url: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "web" | "mobile" | "tools";
  image?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "tools" | "ai_emerging";
}

export interface TimelineEvent {
  id: string;
  type: "education" | "experience";
  dateKey: string;
  titleKey: string;
  descriptionKey: string;
  institution: string;
}

export interface BlogPost {
  slug: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  readTime: string;
  tags: string[];
  contentKey: string;
}

export interface NavLink {
  labelKey: string;
  path: string;
}
