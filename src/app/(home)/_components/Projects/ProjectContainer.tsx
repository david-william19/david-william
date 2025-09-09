"use client";

// import TechStackTag from "./TechStackTag";
import { motion } from "framer-motion";
import { Project } from "@/types/Project";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";

export default function ProjectContainer({
  project,
}: {
  id: number;
  project: Project;
}) {
  const containerCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
      },
    },
  };

  const handleViewProject = (link: string) => {
    window.open(link);
  };

  return (
    <motion.div
      viewport={{
        once: true,
        margin: "-50px",
      }}
      variants={containerCardVariants}
      initial="hidden"
      whileInView="show"
      className={clsx(
        "overflow-hidden relative p-3 rounded-xl flex items-center justify-center min-h-[400px]"
      )}
      style={{
        background: `radial-gradient(ellipse at bottom -50% right -50%, ${project.color} 15%, rgba(255,255,255,0.1) 80%)`,
      }}
    >
      <motion.div
        viewport={{
          once: true,
          margin: "-201px",
        }}
        variants={containerCardVariants}
        initial="hidden"
        whileInView="show"
        className="w-full h-full flex flex-col justify-between"
      >
        <div>
          <motion.p
            variants={contentVariants}
            className="text-white font-thunder text-[50px] leading-none mt-5"
          >
            {project.name}
          </motion.p>
          <motion.p className="text-slate-700 text-sm bg-white/50 py-1 px-2 rounded-md w-fit">
            {project.deviceType} Application
          </motion.p>
        </div>
        <Button
          onClick={() => handleViewProject(project.urlProject)}
          className="mt-auto w-fit border-none transition-all duration-300 hover:scale-105 hover:bg-[#1DCD9F] hover:text-white"
          variant={"outline"}
        >
          View Project
        </Button>
      </motion.div>
      {project.imageUrl && (
        <Image
          className={clsx(
            "absolute z-0 object-contain",
            project.deviceType === "Website" && "-bottom-[50px] -right-[200px]",
            project.deviceType === "Mobile" &&
              "w-[500px] h-[500px] -bottom-[270px] -right-[200px]"
          )}
          src={project.imageUrl}
          alt="image-porto"
          width={500}
          height={500}
          loading="lazy"
          decoding="async"
        />
      )}
    </motion.div>
  );
}
