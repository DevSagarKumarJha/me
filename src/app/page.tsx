import { Navbar } from "@/components/Navbar";
import GalaxyComponent from "@/components/ui/galaxy-component";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import ExperienceEducationSection from "@/sections/ExperienceEducationSection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import LeetCodeSection from "@/sections/LeetCodeSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import Image from "next/image";

export default function Home() {
  

  return (
    <>
      <Navbar />

      <main className="mx-auto px-4">
        <HeroSection />

        <div className="flex justify-center items-center bg-black/5 dark:bg-yellow-500/5 py-20 px-6 w-full">
          <GalaxyComponent
            title="<Coding/>"
            subtitle="Code for Harmony"
            badges={["Optimal", "Readable", "Scalable", "Maintainable", "Clean Code"]}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 p-0 md:px-6 md:py-16">
          <aside className="md:w-1/3 space-y-4">
            <div className="p-4 rounded-2xl shadow-xl border border-orange-500/30 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-md">
              <div className="flex justify-center items-center">
                <Image
                  src="https://avatars.githubusercontent.com/u/162960900?s=400&u=14f17ea2e2dca8c0aa9e336f492ad89cb27b1988&v=4"
                  alt="Sagar Kumar Jha"
                  width={192}
                  height={192}
                  className="object-cover rounded-full border-b-4 transition-[border] ease-in-out border-orange-400"
                />
              </div>
            </div>
            <LeetCodeSection />
            <SkillsSection />
            <ContactSection />
          </aside>

          <main className="md:w-2/3 space-y-4">
            <AboutSection />
            <ExperienceEducationSection />
            <ProjectsSection />
          </main>
        </div>
      </main>
      <FooterSection />
      <div className="top-40 right-20 -z-10 fixed bg-yellow-400/20 dark:bg-orange-500/15 blur-3xl rounded-full w-72 h-72 animate-out"></div>
      <div className="bottom-40 left-20 -z-10 fixed bg-yellow-400/25 dark:bg-orange-500/10 blur-3xl rounded-full animate-in w-80 h-80"></div>
    </>
  );
}
