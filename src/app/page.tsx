import { Navbar } from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import ExperienceEducationSection from "@/sections/ExperienceEducationSection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import LeetCodeSection from "@/sections/LeetCodeSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="">
        <HeroSection />

        <div className="grid sm:grid-cols-4 md:grid-cols-8 gap-2 px-6 py-16">
          <aside className="sticky sm:col-span-1 flex-1 space-y-2 md:col-span-2 z-20">
            <div className="p-0 rounded-2xl justify-center items-center shadow-xl border border-orange-500/30 bg-white/70 dark:bg-gray-950/60 backdrop-blur-md">
              <div className=" flex justify-center items-center p-2 ">
                <img
                  src="https://avatars.githubusercontent.com/u/162960900?s=400&u=14f17ea2e2dca8c0aa9e336f492ad89cb27b1988&v=4"
                  alt="Sagar Kumar Jha"
                  className="w-90 h-90 object-cover rounded-full border-b-4 transition-[border] ease-in-out border-orange-400"
                />
              </div>
            </div>
            <LeetCodeSection />
            <SkillsSection />
            <ContactSection />
          </aside>

          <main className="bg-transparent sm:col-span-3 md:col-span-6 flex-1 space-y-2 z-20">
            <AboutSection />
            <ExperienceEducationSection />
            <ProjectsSection />
          </main>
        </div>
      </main>
      <FooterSection />
      <div className="top-40 right-20 z-0 fixed bg-amber-400/40 dark:bg-orange-500/15 blur-3xl rounded-full w-72 h-72 animate-out"></div>
      <div className="bottom-40 left-20 z-0 fixed bg-amber-500/35 dark:bg-orange-500/10 blur-3xl rounded-full animate-in w-80 h-80"></div>
    </>
  );
}
