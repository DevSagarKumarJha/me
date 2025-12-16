
import { Project } from "@/types/project";
import React from "react";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, description, tech, status, live, link, repo } = project;
    let color;

    if(status === "active") color ="bg-green-700";
    else if (status === "in_progress") color = "bg-orange-600"
    else if (status === "maintained") color = "bg-teal-600"
    else if (status === "archived") color="bg-gray-500"
      return (
        <div className="group relative rounded-2xl p-3 sm:p-4 border transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm dark:bg-zinc-900/30 dark:border-zinc-800/50 dark:hover:bg-zinc-900/50 dark:hover:border-zinc-700 h-72 flex flex-col justify-around">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{name}</h3>
            <span
            title={status.replace("_"," ")}
              className={`text-xs uppercase tracking-wider px-2 py-1 font-semibold cursor-pointer text-white ${color}`}
            >
              {status.replace("_", " ")}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-muted">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2 text-sm">
            {live && link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md font-semibold bg-black text-white dark:bg-white dark:text-zinc-900 hover:opacity-80"
              >
                Live
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md font-semibold border hover:bg-zinc-200 hover:dark:bg-zinc-800"
              >
                Code
              </a>
            )}
          </div>
        </div>
      );
};

export default ProjectCard;
