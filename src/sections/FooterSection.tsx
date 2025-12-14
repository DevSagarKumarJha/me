"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer
      className="w-full border-t border-orange-500/20 dark:border-orange-600/20 mt-16"
      data-landmark-index="2"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Branding */}
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} Sagar Kumar Jha. All rights reserved. |
          LeetCode Expert
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          <a
            href="mailto:devsagarkumarjha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email"
            className="text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/DevSagarKumarJha"
            target="_blank"
            aria-label="my_github_profile"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition"
            >
            <Github className="w-5 h-5" />
          </a>
          <a
            aria-label="my_linkedin_profile"
            href="https://www.linkedin.com/in/devsagarkumarjha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
