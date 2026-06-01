import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-react",
    titleKey: "blog.items.react_start.title",
    excerptKey: "blog.items.react_start.excerpt",
    date: "2024-01-15",
    readTime: "5 min",
    tags: ["React", "JavaScript"],
    contentKey: "blog.items.react_start.content",
  },
  {
    slug: "typescript-tips",
    titleKey: "blog.items.ts_tips.title",
    excerptKey: "blog.items.ts_tips.excerpt",
    date: "2024-02-20",
    readTime: "4 min",
    tags: ["TypeScript", "Tips"],
    contentKey: "blog.items.ts_tips.content",
  },
];
