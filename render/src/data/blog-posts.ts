import type { BlogPost } from "@/types";

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yaml = match[1];
  const content = match[2].trim();
  const data: Record<string, unknown> = {};

  for (const line of yaml.split("\n")) {
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    const rawVal = line.slice(sep + 1).trim();

    if (rawVal === "true" || rawVal === "false") {
      data[key] = rawVal === "true";
    } else if (!isNaN(Number(rawVal))) {
      data[key] = Number(rawVal);
    } else if (rawVal.startsWith("[") && rawVal.endsWith("]")) {
      data[key] = rawVal.slice(1, -1).split(",").map((s: string) => s.trim().replace(/^"|"$/g, ""));
    } else {
      data[key] = rawVal.replace(/^"|"$/g, "");
    }
  }

  return { data, content };
}

export async function getBlogSlugs(): Promise<string[]> {
  const res = await fetch("/blog/index.json");
  const list: { slug: string }[] = await res.json();
  return list.map((item) => item.slug);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`/blog/${slug}.md`);
    if (!res.ok) return null;
    const raw = await res.text();
    const { data, content } = parseFrontmatter(raw);

    return {
      slug,
      title: (data.title as string) || slug,
      excerpt: (data.excerpt as string) || "",
      date: (data.date as string) || "",
      readTime: (data.readTime as string) || "",
      tags: (data.tags as string[]) || [],
      content,
    };
  } catch {
    return null;
  }
}

const postCache = new Map<string, BlogPost>();

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getBlogSlugs();
  const posts: BlogPost[] = [];
  for (const slug of slugs) {
    const cached = postCache.get(slug);
    if (cached) {
      posts.push(cached);
      continue;
    }
    const post = await getBlogPost(slug);
    if (post) {
      postCache.set(slug, post);
      posts.push(post);
    }
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}
