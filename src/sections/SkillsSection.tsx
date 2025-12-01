"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";
import { categories } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className=" mx-auto flex flex-col items-center"
    >
      <div className="section-inner w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Card className="rounded-2xl shadow-xl border border-orange-500/30 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-md">
            {/* Header */}
            <CardHeader className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <Layers className="w-6 h-6" />
                <CardTitle className="text-3xl font-extrabold">
                  Skills
                </CardTitle>
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent>
              <div className="flex-1 space-y-2">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/60 dark:bg-zinc-900/50 rounded-xl shadow-sm border border-orange-500/30 dark:border-orange-600/30 p-4 hover:border-orange-500/60 transition"
                  >
                    <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400 mb-3">
                      {category.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="px-3 py-1 text-sm rounded-full bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
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
      </div>
    </section>
  );
};

export default SkillsSection;
