"use client";
import React from "react";
import { AnimatedTopSection } from "../wrappers/AnimatedTopSection";
import dynamic from "next/dynamic";
import { Terminal } from "lucide-react";
import ContactComponent from "./ContactComponent";
import { sociallinks } from "@/data/intro";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => (
    <span
      className="text-2xl font-heading text-neutral-800 dark:text-neutral-200"
      aria-hidden
    >
      Full Stack Developer, India
    </span>
  ),
});

const IntroComponent = () => {
  return (
    <AnimatedTopSection>
      <div className=" shadow-md flex flex-col border px-4 py-2 border-black/15 dark:border-white/15 sm:py-10 gap-4 mt-12">
        <div className="flex items-center justify-start gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              Sagar Kumar Jha
            </h2>

            <div className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 font-medium h-8 flex items-center">
              <span className="mr-2 text-foreground/50">
                <Terminal />
              </span>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Tech Enthusiast",
                    "Open For Work",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursor: "|",
                }}
              />
            </div>
          </div>
        </div>
        <article className="sm:px-2 px-1.5 text-wrap tracking-wider flex flex-col text-lg sm:text-xl text-gray-800 dark:text-gray-200 italic gap-4">
          <p>
            I work with latest technologies to build scalable and efficient web
            applications. My expertise lies in full-stack development, with a
            focus on creating seamless user experiences and robust backend
            systems.
          </p>

          <ContactComponent links={sociallinks} />
        </article>
      </div>
    </AnimatedTopSection>
  );
};

export default IntroComponent;
