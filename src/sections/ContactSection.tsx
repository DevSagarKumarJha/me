"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section
      id="contacts"
      className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Card className="rounded-2xl shadow-xl border border-violet-200 bg-white/70 dark:bg-black/40 backdrop-blur-md">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-extrabold text-violet-700 dark:text-violet-400">
              Get In Touch
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400">
              Interested in working together? Let’s connect 🚀
            </p>
          </CardHeader>

          <CardContent className="grid gap-6 sm:grid-cols-3 text-center">
            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              <a
                href="mailto:devsagarkumarjha@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition"
              >
                devsagarkumarjha@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              <a
                href="tel:+919667207859"
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition"
              >
                +91 9667207859
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              <p className="text-gray-700 dark:text-gray-300">Delhi, India</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactSection;
