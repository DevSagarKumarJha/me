"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";

const FooterSection = () => {
  return (
    <footer
      className="w-full border-t-2 border-orange-500 mt-16"
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
        <p className="text-orange-500 font-medium dark:text-orange-500 text-sm">
          © {new Date().getFullYear()} Sagar Kumar Jha. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          <a
            href="mailto:devsagarkumarjha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email"
            className="text-orange-500 border-2 hover:text-zinc-700 hover:dark:text-zinc-100 p-1 rounded "
          >
            <RiMailFill className="size-5" />
          </a>
          <a
            href="https://github.com/DevSagarKumarJha"
            target="_blank"
            aria-label="my_github_profile"
            rel="noopener noreferrer"
            className="text-orange-500 border-2 hover:text-gray-600 hover:dark:text-zinc-200 p-1 rounded "
          >
            <RiGithubFill className="size-5" />
          </a>
          <a
            aria-label="my_linkedin_profile"
            href="https://www.linkedin.com/in/devsagarkumarjha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 border-2 hover:text-blue-700 p-1 rounded "
          >
            <RiLinkedinFill className="size-5" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
