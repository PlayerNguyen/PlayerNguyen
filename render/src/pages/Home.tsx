import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SEO from "@/components/shared/SEO";

export default function Home() {
  return (
    <>
      <SEO description="Nguyễn Huỳnh Nguyên - Software Engineer portfolio" />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
    </>
  );
}
