"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { FolderGit2 } from "lucide-react";
import {projects} from "@/data/projects.js";


const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl sm:max-w-7xl mx-auto px-6 py-16 flex flex-col items-center"
    >
      {/* Section Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Card className="rounded-2xl shadow-xl border border-violet-200 bg-white/70 dark:bg-black/40 backdrop-blur-md">
          <CardHeader className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2 text-violet-700 dark:text-violet-400">
              <FolderGit2 className="w-6 h-6" />
              <CardTitle className="text-3xl font-extrabold">
                Projects
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-black/30 rounded-xl shadow-sm border border-violet-100 dark:border-violet-800 p-5 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-400 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-2">
                    {project.live && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition"
                      >
                        Live
                      </a>
                    )}
                    {project.repo && (<a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium rounded-lg border border-violet-500 text-violet-600 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition"
                    >
                      Code
                    </a>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
