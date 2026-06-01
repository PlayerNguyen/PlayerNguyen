import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import SEO from "@/components/shared/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { timelineEvents } from "@/data/timeline";
import { skillCategories } from "@/data/skills";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen pt-20 pb-20 px-gutter bg-canvas">
      <div className="max-w-content mx-auto">
        <SEO titleKey="about.title" description="About Nguyễn Huỳnh Nguyên" />
        <SectionHeading titleKey="about.title" subtitleKey="about.subtitle" />

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card>
            <p className="text-lg text-ink leading-relaxed">
              {t("about.bio")}
            </p>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-h3 text-center mb-8 text-ink font-brand">
            {t("skills.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <Card key={cat.key}>
                <h4 className="text-eyebrow text-light-signal-orange uppercase mb-4">
                  {t(`skills.${cat.key}`)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-canvas-soft text-body-sm text-ink border border-hairline"
                    >
                      <skill.icon className="text-base" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-h3 text-center mb-8 text-ink font-brand">
            {t("about.experience")} & {t("about.education")}
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-hairline -translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * i }}
                    className={`relative flex items-start gap-6 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 mt-6" />

                    {/* Content */}
                    <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {event.type === "education" ? (
                          <FiBookOpen className="text-light-signal-orange" />
                        ) : (
                          <FiBriefcase className="text-light-signal-orange" />
                        )}
                        <span className="text-sm text-slate-gray">
                          {t(event.dateKey)}
                        </span>
                      </div>
                      <Card>
                        <h4 className="text-lg font-bold text-ink">
                          {t(event.titleKey)}
                        </h4>
                        <p className="text-sm text-slate-gray mt-1">
                          {event.institution}
                        </p>
                        <p className="text-sm text-slate-gray mt-2">
                          {t(event.descriptionKey)}
                        </p>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
