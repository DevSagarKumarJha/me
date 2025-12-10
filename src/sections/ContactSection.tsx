"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contacts" className="mx-auto flex flex-col items-center">
      <div className="section-inner w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Card className="rounded-2xl shadow-xl border border-orange-500/30 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-md">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl font-extrabold text-orange-600 dark:text-orange-400">
                Let&apos;s Connect
              </CardTitle>
              <p className="text-zinc-600 dark:text-zinc-400">
                I&apos;m always open to discussing opportunities in software
                development and system design.
              </p>
            </CardHeader>

            <CardContent className="grid gap-6 grid-cols-5 text-center">
              {/* Email */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="mailto:devsagarkumarjha@gmail.com"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition"
                >
                  <Mail className="w-6 h-6 text-orange-600 m-auto dark:text-orange-400" />
                  Email
                </a>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://github.com/DevSagarKumarJha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition"
                >
                  <Github className="w-6 h-6 text-orange-600 m-auto dark:text-orange-400" />
                  GitHub
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://linkedin.com/in/devsagarkumarjha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition"
                >
                  <Linkedin className="w-6 h-6 text-orange-600 m-auto dark:text-orange-400" />
                  LinkedIn
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="tel:+919667207859"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition"
                >
                  <Phone className="w-6 h-6 text-orange-600 m-auto dark:text-orange-400" />
                  Phone
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-medium text-zinc-700  dark:text-zinc-300">
                  <MapPin className="w-6 h-6 text-orange-600 m-auto dark:text-orange-400" />
                  Delhi, India
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
