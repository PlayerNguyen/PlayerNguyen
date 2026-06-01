import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiSpringboot,
  SiPython,
  SiPhp,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface SkillCategory {
  key: string;
  skills: { name: string; icon: IconType; category: "frontend" | "backend" | "tools" }[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "React", icon: SiReact, category: "frontend" },
      { name: "TypeScript", icon: SiTypescript, category: "frontend" },
      { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, category: "backend" },
      { name: "Express", icon: SiExpress, category: "backend" },
      { name: "Spring Boot", icon: SiSpringboot, category: "backend" },
      { name: "Python", icon: SiPython, category: "backend" },
      { name: "PHP", icon: SiPhp, category: "backend" },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, category: "tools" },
      { name: "MongoDB", icon: SiMongodb, category: "tools" },
      { name: "Git", icon: SiGit, category: "tools" },
      { name: "Docker", icon: SiDocker, category: "tools" },
      { name: "Figma", icon: SiFigma, category: "tools" },
    ],
  },
];

import type { Skill } from "@/types";
export const allSkills: Skill[] = skillCategories.flatMap((cat) => cat.skills);
