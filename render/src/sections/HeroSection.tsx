import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SiFreecodecamp,
  SiGithub,
  SiGit,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/shared/SocialLinks";
import { socialLinks } from "@/data/social";

const floatingIcons = [
  { Icon: SiFreecodecamp, x: "4vw", y: "12vh", color: "text-green-600", size: "text-6xl" },
  { Icon: SiGithub, x: "18vw", y: "16vh", color: "text-zinc-300", size: "text-6xl" },
  { Icon: SiGit, x: "32vw", y: "10vh", color: "text-orange-600", size: "text-6xl" },
  { Icon: SiReact, x: "70vw", y: "14vh", color: "text-cyan-400", size: "text-5xl" },
  { Icon: SiTypescript, x: "85vw", y: "20vh", color: "text-blue-500", size: "text-5xl" },
];

export default function HeroSection() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Floating icons */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, color, size }, i) => (
          <div
            key={i}
            className={`absolute ${color} ${size}`}
            style={{
              left: x,
              top: `calc(${y} + ${scrollY * (0.05 + i * 0.01)}px)`,
              transition: "top 0.1s ease-out",
            }}
          >
            <Icon />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
            {t("hero.title")}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="mt-4 text-xl md:text-2xl uppercase font-bold text-zinc-200">
            {t("hero.subtitle")}
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto"
        >
          {t("hero.bio")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/projects">
            <Button variant="primary">{t("hero.cta_projects")}</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">{t("hero.cta_contact")}</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <SocialLinks links={socialLinks} size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
