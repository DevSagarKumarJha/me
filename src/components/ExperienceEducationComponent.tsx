"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences, education } from "@/data/ExperienceEducationSection";
import Link from "next/link";
import { FaShare } from "react-icons/fa6";

const ExperienceEducationComponent = () => {
  return (
    <section
      id="experience-education"
      className="w-full mx-auto flex flex-col gap-12 mt-8"
    >
      <div className="flex-1 space-y-4 justify-center align-middle">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-2">
            <h1 className="text-xl  text-center font-bold underline sm:text-2xl sm:text-start ">
              Experiences & Bootcamps
            </h1>
            <article className="grid sm:grid-cols-2 gap-2 p-1 mt-2">
              {experiences.map((experience, idx) => (
                <div
                  key={idx}
                  className="p-2 dark:border shadow-md dark:border-white/10 "
                >
                  <h2 className="font-bold text-lg sm:text-xl">
                    {experience.role}
                  </h2>

                  <h3 className="flex justify-between opacity-75">
                    <Link
                      href={experience.url}
                      target="_blank"
                      className="font-bold text-sm flex gap-2 justify-center items-center hover:underline "
                    >
                      {experience.title} <FaShare />
                    </Link>
                    <span className="font-bold text-xs ">
                      {experience.period}
                    </span>
                  </h3>

                  <div className="border border-black/15 dark:border-white/15" />
                  <p className="dark:text-gray-100/80 p-2 text-wrap italic text-sm sm:text-lg">
                    {experience.description}
                  </p>
                  <div className="border border-black/15 dark:border-white/15 mb-2" />
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm px-2">
                    {experience.skills.map((skill, i) => (
                      <p
                        key={i}
                        className="rounded bg-black/10 backdrop:blur border border-black dark:bg-white/20 p-1"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </article>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-2 max-sm:shadow-md">
            <h1 className="text-xl  text-center font-bold underline sm:text-2xl sm:text-start ">
              Education
            </h1>
            <article className="grid sm:grid-cols-2 gap-2 p-1">
              {education.map((e, idx) => (
                <div
                  key={idx}
                  className="p-2 dark:border sm:shadow-md dark:border-white/10 "
                >
                  <h2 className="font-bold text-lg sm:text-xl">
                    {e.degree}
                  </h2>

                  <h3 className="flex justify-between opacity-75">
                    <span
                      className="font-bold text-sm flex gap-2 justify-center items-center"
                    >
                      {e.institution}
                    </span>
                    <span className="font-bold text-xs ">
                      {e.period}
                    </span>
                  </h3>

                  <div className="border border-black/15 dark:border-white/15" />
                  <p className="dark:text-gray-100/80 p-2 text-wrap italic text-sm sm:text-lg">
                    {e.description}
                  </p>
                  {e.specialization && (
                    <>
                    
                    <div className="border border-black/15 dark:border-white/15 mb-2" />
                    <p className="sm:text-sm text-xs">
                    <strong>
                      Specialized in {" "}
                    </strong>
                    {e.specialization}
                  </p>
                    </>
                )}
                </div>
              ))}
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceEducationComponent;
