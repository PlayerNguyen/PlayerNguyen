import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/shared/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { blogPosts } from "@/data/blog-posts";

export default function Blog() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SEO titleKey="blog.title" description="Blog posts by Player Nguyen" />
        <SectionHeading titleKey="blog.title" subtitleKey="blog.subtitle" />

        {blogPosts.length === 0 ? (
          <p className="text-center text-zinc-500 mt-12">{t("blog.no_posts")}</p>
        ) : (
          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="hover:border-purple-500/30 cursor-pointer transition-all">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(post.titleKey)}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4">
                      {t(post.excerptKey)}
                    </p>
                    <div className="flex items-center justify-between text-sm text-zinc-500">
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
                            className="px-2 py-0.5 rounded bg-zinc-700/50 text-xs text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-purple-400 font-medium">
                      {t("blog.read_more")} →
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
