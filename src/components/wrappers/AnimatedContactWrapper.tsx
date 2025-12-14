"use client";

import { motion } from "framer-motion";
import React from "react";

export const AnimatedContactWrapper = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?:number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
