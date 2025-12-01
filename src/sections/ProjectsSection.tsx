"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className=" w-full mx-auto flex flex-col items-center"
    >
      <div className="section-inner w-full">
        {/* Section Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Card className="rounded-2xl shadow-xl border border-orange-500/30 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-md">
            <CardHeader className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <FolderGit2 className="w-6 h-6" />
                <CardTitle className="text-3xl font-extrabold">
                  Projects
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/60 dark:bg-zinc-900/50 rounded-xl shadow-sm border border-orange-500/30 dark:border-orange-600/30 p-5 flex flex-col justify-between hover:border-orange-500/60 transition"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-400 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
                        {project.description}
                      </p>
                      {project.impact && (
                        <p className="text-xs font-medium text-orange-600 dark:text-orange-400 mb-2">
                          ★ {project.impact}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs rounded-full bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
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
                          className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition"
                        >
                          Live
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-medium rounded-lg border border-orange-500 text-orange-600 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
