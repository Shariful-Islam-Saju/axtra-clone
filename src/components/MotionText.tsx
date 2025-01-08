"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const MotionText = ({
  children,
  time,
}: {
  children: ReactNode;
  time: number;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: time }}
    >
      {children}
    </motion.span>
  );
};

export default MotionText;
