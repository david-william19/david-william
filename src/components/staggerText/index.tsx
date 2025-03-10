import { motion } from "framer-motion";

export default function StaggerText({ text }: { text: string }) {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.05,
        ease: "easeInOut",
      },
    },
    stop: {
      transition: {
        staggerChildren: 0.05,
        ease: "easeInOut",
      },
    },
  };

  const letterVariants = {
    start: {
      y: 150,
    },
    stop: {
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="stop"
      className="inline-block h-[140px] overflow-hidden p-0 m-0"
    >
      {text.split("").map((letter, index) => (
        <motion.p
          key={index}
          className="inline-block p-0 m-0 leading-[0.5em]"
          variants={letterVariants}
        >
          {letter}
        </motion.p>
      ))}
    </motion.div>
  );
}