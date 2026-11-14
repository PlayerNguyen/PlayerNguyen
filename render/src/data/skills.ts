import type { IconType } from "react-icons";
import { FiCloud, FiCpu, FiDatabase } from "react-icons/fi";
import {
  SiApachekafka,
  SiBun,
  SiDocker,
  SiExpress,
  SiGit,
  SiHono,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface SkillCategory {
  key: string;
  skills: {
    name: string;
    icon: IconType;
    category: "frontend" | "backend" | "ai_emerging" | "tools";
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "React", icon: SiReact, category: "frontend" },
      { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
      { name: "TypeScript", icon: SiTypescript, category: "frontend" },
      { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Java", icon: SiOpenjdk, category: "backend" },
      { name: "Spring Boot", icon: SiSpringboot, category: "backend" },
      { name: "Node.js", icon: SiNodedotjs, category: "backend" },
      { name: "ExpressJS", icon: SiExpress, category: "backend" },
      { name: "Python", icon: SiPython, category: "backend" },
      { name: "Hono", icon: SiHono, category: "backend" },
      { name: "Bun", icon: SiBun, category: "backend" },
    ],
  },
  {
    key: "ai_emerging",
    skills: [
      { name: "Agentic AI", icon: FiCpu, category: "ai_emerging" },
      { name: "LLM Integration", icon: FiCpu, category: "ai_emerging" },
      { name: "Elysia", icon: FiCpu, category: "ai_emerging" },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Docker", icon: SiDocker, category: "tools" },
      { name: "PostgreSQL", icon: SiPostgresql, category: "tools" },
      { name: "Kafka", icon: SiApachekafka, category: "tools" },
      { name: "Redis", icon: SiRedis, category: "tools" },
      { name: "Hazelcast", icon: FiDatabase, category: "tools" },
      { name: "S3 Storage", icon: FiCloud, category: "tools" },
      { name: "Git", icon: SiGit, category: "tools" },
    ],
  },
];

import type { Skill } from "@/types";
export const allSkills: Skill[] = skillCategories.flatMap((cat) => cat.skills);
