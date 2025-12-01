"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full mx-auto flex flex-col items-center"
    >
      <div className="w-full">
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
                <UserIcon className="w-6 h-6" />
                <CardTitle className="text-3xl font-extrabold">
                  About Me
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4 text-center md:text-left">
                <p>
                  I&apos;m a Full Stack Developer and Software Engineer with a
                  strong foundation in Data Structures, Algorithms, and System
                  Design. I build production-grade applications and solve
                  complex computational problems.
                </p>

                <p>
                  I specialize in full-stack development with the{" "}
                  <span className="font-medium">MERN Stack</span> (MongoDB,
                  Express.js, React, Node.js) and competitive programming
                  excellence.
                </p>

                <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-lg p-4 border border-orange-500/30 dark:border-orange-600/30">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">
                    Core Expertise:
                  </h4>
                  <ul className="list-none space-y-1 text-sm">
                    <li>
                      • Full-stack web development with React, Next.js, Node.js,
                      and Express.js
                    </li>
                    <li>• Database design and optimization (MongoDB, MySQL)</li>
                    <li>• REST APIs and backend architecture</li>
                    <li>
                      • Data Structures & Algorithms with proficiency in C++,
                      Java, and Python
                    </li>
                    <li>
                      • Responsive design and web accessibility (WCAG
                      compliance)
                    </li>
                  </ul>
                </div>

                <p>
                  I&apos;m actively seeking roles in Software Development,
                  Backend Engineering, or System Design where I can contribute
                  to building scalable, efficient systems. I&apos;m dedicated to
                  mastering algorithms, competitive programming, and advancing
                  my craft as a software engineer.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
