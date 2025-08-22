"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
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
          <CardHeader className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2 text-violet-700 dark:text-violet-400">
              <UserIcon className="w-6 h-6" />
              <CardTitle className="text-3xl font-extrabold">About Me</CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-center md:text-left">
              <p>
                I’m a{" "}
                <span className="font-semibold text-violet-700 dark:text-violet-400">
                  Full Stack Web Developer
                </span>{" "}
                with hands-on experience building scalable and responsive web
                applications using the{" "}
                <span className="font-medium">MERN Stack</span> (MongoDB,
                Express.js, React.js, Node.js).
              </p>

              <p>
                I have a strong foundation in{" "}
                <span className="font-medium">Data Structures & Algorithms</span>{" "}
                and proven ability to build{" "}
                <span className="font-medium">production-grade projects</span>{" "}
                from scratch.
              </p>

              <ul className="list-none space-y-2">
                <li>✅ Skilled in: Node.js, Express.js, MongoDB, React, REST APIs, JavaScript, Git, GitHub</li>
                <li>🚀 Built <span className="font-medium">LeetLab</span> – a coding practice platform inspired by LeetCode</li>
                <li>💼 Open to Backend, Full Stack Developer, or Software Engineering roles</li>
              </ul>

              <p>
                🌱 Actively contributing to open-source projects and continuously
                learning modern tech stacks.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default AboutSection;
