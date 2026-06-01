import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-section-y px-gutter bg-canvas border-t border-hairline">
      <div className="max-w-content mx-auto">
        <SectionHeading titleKey="skills.title" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.key}
              variants={itemVariants}
              className="bg-canvas border border-hairline rounded-md p-6"
            >
              <h3 className="text-eyebrow-mono text-primary uppercase tracking-[2.52px] mb-4">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                {t(`skills.${cat.key}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-canvas-soft text-body-sm text-ink border border-hairline"
                  >
                    <skill.icon className="text-base text-primary/80" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
