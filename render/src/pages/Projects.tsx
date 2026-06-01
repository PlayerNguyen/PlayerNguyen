import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SEO from "@/components/shared/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";

const categories = ["all", "web", "mobile", "tools"] as const;

export default function Projects() {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SEO titleKey="projects.title" description="Projects built by Player Nguyen" />
        <SectionHeading titleKey="projects.title" subtitleKey="projects.subtitle" />

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800 border border-transparent"
              }`}
            >
              {t(`projects.${cat === "tools" ? "tools_category" : cat}`)}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-zinc-400 text-sm flex-1 mb-4">
                      {t(project.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-zinc-700/50 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
                          <FiGithub size={16} />
                          {t("projects.view_github")}
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink size={16} />
                          {t("projects.view_live")}
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-zinc-500 py-12"
              >
                {t("projects.no_projects")}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
