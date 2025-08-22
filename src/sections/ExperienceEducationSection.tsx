"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import {experiences, education} from  "@/data/ExperienceEducationSection.js"



const ExperienceEducationSection = () => {
  return (
    <section
      id="experience-education"
      className="max-w-6xl sm:max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12"
    >
      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="rounded-2xl shadow-xl border border-violet-200 bg-white/70 dark:bg-black/40 backdrop-blur-md">
          <CardHeader className="flex items-center gap-2 text-violet-700 dark:text-violet-400">
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
                  className="border-b border-gray-200 dark:border-gray-700 pb-4"
                >
                  <h3 className="text-lg font-semibold text-violet-700 dark:text-violet-300">
                    {exp.role} – {exp.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
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
        <Card className="rounded-2xl shadow-xl border border-violet-200 bg-white/70 dark:bg-black/40 backdrop-blur-md">
          <CardHeader className="flex items-center gap-2 text-violet-700 dark:text-violet-400">
            <GraduationCap className="w-6 h-6" />
            <CardTitle className="text-2xl font-bold">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${index}`} // ✅ unique key
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-200 dark:border-gray-700 pb-4"
                >
                  <h3 className="text-lg font-semibold text-violet-700 dark:text-violet-300">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.institution} • {edu.period}
                  </p>
                  {edu.description && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
                  )}
                  {edu.activities && (
                    <p className="mt-2 text-gray-600 dark:text-gray-400 italic">
                      Activities: {edu.activities}
                    </p>
                  )}
                  {edu.skills && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
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
    </section>
  );
};

export default ExperienceEducationSection;
