"use client"

import clsx from "clsx";
import { motion } from "motion/react";

interface StaggerTextProps {
  text: string;
  className?: string;
  prefix: string;
}

export default function StaggerText(props: StaggerTextProps) {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: .02,
        ease: "easeInOut",
      },
    },
    stop: {
      transition: {
        staggerChildren: .06,
        ease: "easeInOut",
      },
    },
  };

  const letterVariants = {
    start: {
      y: 3,
      opacity: 0,
    },
    stop: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .5,
        ease: "easeInOut"
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="stop"
      style={{
        fontSize: 0,
      }}
       className="inline-block w-fit overflow-hidden p-0 m-0"
    >
      {props.text.split("").map((letter, index) => (
        <motion.span
          key={`${props.prefix}-${index}`}
          className={clsx("inline-block align-bottom w-fit p-0 m-0 leading-none", props.className)}
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
