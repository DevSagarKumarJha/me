"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { leetcodeStats as fallbackStats } from "@/data/leetcodeStats";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";
import { Intro } from "@/data/intro";
import { FileJsonIcon } from "lucide-react";

const HeroSection: FC = () => {
  const [totalSolvedProblems, setTotalSolvedProblems] = useState(
    fallbackStats.totalSolved
  );

  useEffect(() => {
    async function getLeetCodeSolvedProblems() {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${fallbackStats.username}`
        );

        if (!response.ok) return fallbackStats;

        const data = await response.json();
        return { totalSolved: data.totalSolved };
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
        return fallbackStats;
      }
    }

    getLeetCodeSolvedProblems().then((data) => {
      setTotalSolvedProblems(data.totalSolved);
    });
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Animated background text */}
      <div className="absolute top-10 right-10 text-orange-500/50 font-mono text-2xl hidden lg:block">
        {"<algorithms />"}
      </div>
      <div className="absolute left-5 top-5 text-orange-500/50 font-mono text-4xl hidden lg:block">
        <FileJsonIcon size={50} />
      </div>
      <div className="absolute bottom-40 left-30 text-orange-500/50 font-mono text-4xl hidden lg:block">
        {"C++"}
      </div>
      <div className="absolute bottom-20 right-15 text-orange-500/50 font-mono text-4xl hidden lg:block">
        {"<JS/>"}
      </div>

      <div className="md:max-w-7xl mx-auto sm:px-6 py-32 flex z-10 flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 tracking-tight"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-400 text-sm font-semibold">
            {`LeetCode Expert | ${totalSolvedProblems} Problems Solved`}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="dark:text-white">Sagar Kumar</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Jha
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-zinc-700 dark:text-zinc-200">
            Full Stack Developer | MERN | Prisma
          </h2>

          <p className="text-zinc-600 max-w-lg text-lg">
            Passionate about writing optimal algorithms and scalable systems.
            Consistently solving complex problems across multiple platforms.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href={fallbackStats.profileUrl}
              target="_blank"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              LeetCode Profile
            </Link>

            <Link
              href="https://drive.google.com/file/d/1BeBRuNNMUZumdOR9IxcGV-G9VTjfj6I4/view?usp=sharing"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-orange-500 text-orange-400 font-semibold hover:bg-orange-500/10 transition-all"
            >
              Resume
            </Link>

            <Link
              href="#contacts"
              className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-500 dark:text-zinc-300 font-semibold hover:border-orange-500 hover:text-orange-400 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FIXED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <motion.div
            animate={{ y: [20, 0, 20] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-md mx-auto"
          >
            <CodeExample code={Intro} fileName="intro.json" language="json" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
