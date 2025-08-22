"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const HeroSection: FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-100 via-white to-pink-100 dark:from-violet-600 dark:via-gray-700 dark:to-pink-700 animate-gradient" />

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 tracking-tight"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I am{" "}
            <span className="text-violet-700 dark:text-violet-300 font-serif">Sagar Kumar Jha</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Full Stack Web Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            I build modern, scalable, and user-friendly web applications
            with clean code and strong architecture.
          </p>

          <div className="flex gap-4">
            <Link href={"https://drive.google.com/file/d/1BeBRuNNMUZumdOR9IxcGV-G9VTjfj6I4/view?usp=sharing"} target="_blank" className="rounded-2xl px-6 py-2 text-lg shadow-lg bg-black text-white dark:bg-white dark:text-black
            ">
              Resume
            </Link>
            <Link
              href="#contacts"
              className="rounded-2xl px-6 py-2 text-lg border border-gray-500"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right Image with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Card className="shadow-2xl p-0 rounded-2xl overflow-hidden border-2 border-violet-200">
              <CardContent className="p-0">
                <img
                  src="https://avatars.githubusercontent.com/u/162960900?s=400&u=14f17ea2e2dca8c0aa9e336f492ad89cb27b1988&v=4"
                  alt="Sagar Kumar Jha"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
