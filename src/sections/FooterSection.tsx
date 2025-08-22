"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Branding */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Sagar Kumar Jha. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          <a
            href="mailto:devsagarkumarjha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/DevSagarKumarJha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/devsagarkumarjha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
