import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import SEO from "@/components/shared/SEO";
import { CodeBlock, InlineCode } from "@/components/shared/CodeBlock";
import PageContainer from "@/components/shared/PageContainer";
import { getBlogPost } from "@/data/blog-posts";
import type { BlogPost as BlogPostType } from "@/types";

const mdComponents = {
  code({ className, children }: React.ComponentPropsWithoutRef<"code">) {
    const match = /language-(\w+)/.exec(className || "");
    if (match) {
      return <CodeBlock language={match[1]}>{children}</CodeBlock>;
    }
    return <InlineCode>{children}</InlineCode>;
  },
  pre({ children }: React.ComponentPropsWithoutRef<"pre">) {
    return <>{children}</>;
  },
  h1({ children }: React.ComponentPropsWithoutRef<"h1">) {
    return <h1 className="text-display-md text-ink-strong mt-10 mb-4">{children}</h1>;
  },
  h2({ children }: React.ComponentPropsWithoutRef<"h2">) {
    return <h2 className="text-display-lg text-ink-strong mt-8 mb-3">{children}</h2>;
  },
  h3({ children }: React.ComponentPropsWithoutRef<"h3">) {
    return <h3 className="text-display-sm text-ink-strong mt-6 mb-2">{children}</h3>;
  },
  p({ children }: React.ComponentPropsWithoutRef<"p">) {
    return <p className="text-body-md text-body mb-4 leading-relaxed">{children}</p>;
  },
  ul({ children }: React.ComponentPropsWithoutRef<"ul">) {
    return <ul className="list-disc list-inside text-body-md text-body mb-4 space-y-1">{children}</ul>;
  },
  ol({ children }: React.ComponentPropsWithoutRef<"ol">) {
    return <ol className="list-decimal list-inside text-body-md text-body mb-4 space-y-1">{children}</ol>;
  },
  li({ children }: React.ComponentPropsWithoutRef<"li">) {
    return <li className="text-body-md text-body">{children}</li>;
  },
  strong({ children }: React.ComponentPropsWithoutRef<"strong">) {
    return <strong className="font-semibold text-ink">{children}</strong>;
  },
  a({ children, href }: React.ComponentPropsWithoutRef<"a">) {
    return (
      <a href={href} className="text-primary-deep hover:text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
  hr() {
    return <hr className="border-hairline my-8" />;
  },
  blockquote({ children }: React.ComponentPropsWithoutRef<"blockquote">) {
    return (
      <blockquote className="border-l-2 border-primary pl-4 italic text-body-md text-body my-6">
        {children}
      </blockquote>
    );
  },
};

export default function BlogPost() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null | "loading">("loading");

  useEffect(() => {
    if (!slug) return;
    getBlogPost(slug).then((data) => {
      setPost(data);
    });
  }, [slug]);

  if (post === "loading") {
    return (
      <section className="min-h-screen pt-20 pb-20 px-gutter bg-canvas flex items-center justify-center">
        <span className="text-body text-mute">Loading...</span>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="min-h-screen pt-20 pb-20 px-gutter bg-canvas flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-display-md text-ink-strong mb-4">
            {t("not_found.title")}
          </h2>
          <button
            onClick={() => navigate("/blog")}
            className="text-body hover:text-ink transition-colors"
          >
            {t("blog.back")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-20 pb-20 px-gutter bg-canvas">
      <PageContainer>
        <SEO title={post.title} description={post.excerpt} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-body hover:text-ink transition-colors mb-8"
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
          <h1 className="text-display-md text-ink-strong mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-body-sm text-mute mb-8">
            <span>
              {t("blog.published_on")} {post.date}
            </span>
            <span>{post.readTime}</span>
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
          <div>
            <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
          </div>
        </motion.article>
        </PageContainer>
    </section>
  );
}
