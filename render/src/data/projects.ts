import type { Project } from "@/types";

let cached: Project[] | null = null;

export async function getProjects(): Promise<Project[]> {
  if (cached) return cached;
  const res = await fetch("/projects.json");
  const data: Project[] = await res.json();
  cached = data;
  return data;
}
