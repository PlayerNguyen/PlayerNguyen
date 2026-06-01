import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import SEO from "@/components/shared/SEO";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPost() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen pt-24 pb-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t("not_found.title")}
          </h2>
          <button
            onClick={() => navigate("/blog")}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            {t("blog.back")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SEO titleKey={post ? post.titleKey : "not_found.title"} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <FiArrowLeft size={16} />
            {t("blog.back")}
          </button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-white mb-4">
            {t(post.titleKey)}
          </h1>
          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8">
            <span>
              {t("blog.published_on")} {post.date}
            </span>
            <span>{post.readTime}</span>
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
          <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed">
            <p>{t(post.contentKey)}</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
