import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProjects } from "@/data/projects";
import type { Project } from "@/types";

const categories = ["all", "web", "mobile", "tools"] as const;

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-section-y px-gutter bg-canvas border-t border-hairline">
      <div className="max-w-content mx-auto">
        <SectionHeading titleKey="projects.title" subtitleKey="projects.subtitle" />

        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-canvas rounded-sm border border-primary"
                  : "text-body hover:text-ink rounded-sm border border-transparent hover:border-hairline"
              }`}
            >
              {t(`projects.${cat === "tools" ? "tools_category" : cat}`)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="text-body text-mute">Loading...</span>
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <h3 className="text-display-sm text-ink-strong mb-2">
                        {t(project.titleKey)}
                      </h3>
                      <p className="text-body-sm text-body flex-1 mb-4">
                        {t(project.descriptionKey)}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-sm bg-canvas-soft text-body-sm text-ink border border-hairline"
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
                            className="flex items-center gap-1 text-body-sm text-body hover:text-primary transition-colors"
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
                            className="flex items-center gap-1 text-body-sm text-body hover:text-primary transition-colors"
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
                  className="col-span-full text-center text-mute py-12"
                >
                  {t("projects.no_projects")}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
