"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Layers } from "lucide-react";
import { categories } from "@/data/skills.js"




const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl sm:max-w-7xl mx-auto px-6 py-16 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Card className="rounded-2xl shadow-xl border border-violet-200 bg-white/70 dark:bg-black/40 backdrop-blur-md">
          {/* Header */}
          <CardHeader className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2 text-violet-700 dark:text-violet-400">
              <Layers className="w-6 h-6" />
              <CardTitle className="text-3xl font-extrabold">Skills</CardTitle>
            </div>
          </CardHeader>

          {/* Content */}
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-black/30 rounded-xl shadow-sm border border-violet-100 dark:border-violet-800 p-4"
                >
                  <h3 className="text-lg font-semibold text-violet-700 dark:text-violet-400 mb-3">
                    {category.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
