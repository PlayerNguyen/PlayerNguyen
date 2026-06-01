import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/shared/SEO";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { getAllPosts } from "@/data/blog-posts";
import type { BlogPost } from "@/types";

export default function Blog() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="min-h-screen pt-20 pb-20 px-gutter bg-canvas">
      <PageContainer>
        <SEO titleKey="blog.title" description="Blog posts by Nguyễn Huỳnh Nguyên" />
        <SectionHeading titleKey="blog.title" subtitleKey="blog.subtitle" />

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="text-body text-mute">Loading...</span>
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-mute mt-12">{t("blog.no_posts")}</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="hover:border-ink/20 cursor-pointer transition-all">
                    <h3 className="text-xl font-bold text-ink mb-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-gray text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-gray">
                      <div className="flex items-center gap-4">
                        <span>
                          {t("blog.published_on")} {post.date}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-sm bg-canvas-soft text-body-sm text-mute border border-hairline"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 text-primary text-body-sm font-medium">
                      {t("blog.read_more")} →
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
        </PageContainer>
    </section>
  );
}
