import { Project } from "@/types/project";
import React from 'react'
import { BsPuzzleFill } from "react-icons/bs";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps{
    title:string;
    description?:string;
    projects: Project[];  
}

const ProjectsGrid:React.FC<ProjectGridProps> = ({title, description, projects}) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 mb-6">
        <BsPuzzleFill className="w-10 h-10 text-black dark:text-white" />
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
          {description && <p className="text-muted-foreground">
            {description}
          </p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {projects.map((project) => (
          <div key={project.name}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid