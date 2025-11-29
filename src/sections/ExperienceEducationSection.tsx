"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, education } from "@/data/ExperienceEducationSection";

const ExperienceEducationSection = () => {
  return (
    <section
      id="experience-education"
      className="w-full mx-auto flex flex-col gap-12"
    >
      <div className="flex-1 space-y-2">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-xl border border-orange-500/30 bg-white/70 dark:bg-gray-950/60 backdrop-blur-md">
            <CardHeader className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
              <Briefcase className="w-6 h-6" />
              <CardTitle className="text-2xl font-bold">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-orange-500/20 dark:border-orange-600/20 pb-4"
                  >
                    <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">
                      {exp.role} – {exp.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-xl border border-orange-500/30 bg-white/70 dark:bg-gray-950/60 backdrop-blur-md">
            <CardHeader className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
              <GraduationCap className="w-6 h-6" />
              <CardTitle className="text-2xl font-bold">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={`${edu.institution}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-orange-500/20 dark:border-orange-600/20 pb-4"
                  >
                    <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.institution} • {edu.period}
                    </p>
                    {edu.description && (
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {edu.description}
                      </p>
                    )}
                    {edu.skills && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
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

export default ExperienceEducationSection;
