import Activities from "@/components/activity_components/Activities";
import DiscordMessageBox from "@/components/contact_components/MessageBox";
import IntroComponent from "@/components/page_components/IntroComponent";
import ProjectsGrid from "@/components/project_components/ProjectsGrid";
import { projects } from "@/data/projects";
import { MessageSquareCodeIcon } from "lucide-react";
import { Suspense } from "react";


export default function Home() {
  return (
    <main className="sm:py-12 py-3">
      <IntroComponent />

      <div className="mt-16 px-3 py-8">
        <ProjectsGrid title="Projects" projects={projects} />
      </div>

      <Activities />
      <section className="mt-16 px-3 py-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <MessageSquareCodeIcon className="w-10 h-10 text-black dark:text-white" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Send me a message</h2>
          </div>
        </div>

        <Suspense
          fallback={<div className="h-32 animate-pulse bg-muted rounded-lg" />}
        >
          <DiscordMessageBox />
        </Suspense>
      </section>
    </main>
  );
}
