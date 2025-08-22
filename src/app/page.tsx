import { Navbar } from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import ExperienceEducationSection from "@/sections/ExperienceEducationSection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full" data-landmark-index="1">
        <HeroSection />
        <div className="max-w-7xl mx-auto dark:bg-gray-900 mt-">
          <AboutSection />
          <ProjectsSection/>
          <ExperienceEducationSection/>
          <SkillsSection />
          <ContactSection/>
        </div>
      </main>
      <FooterSection/>
    </>
  );
}
