"use client";

import Image from "next/image";
import TechStackTag from "./TechStackTag";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Project } from "@/types/Project";

export default function ProjectContainer({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const projectContainerVariants = {
    hidden: {
      transform: "rotateY(90deg)",
      opacity: 0,
      transition: {
        staggerChildren: 0.25,
        ease: "easeIn",
      },
    },
    show: {
      transform: "rotateY(0deg)",
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeIn",
      },
    },
  };

  const CardVariants = {
    hidden: {
      transform: "rotateY(90deg)",
      opacity: 0,
    },
    show: {
      transform: "rotateY(0deg)",
      opacity: 1,
    },
  };

  return (
   <div className="max-w-[400px] h-[400px] p-3 rounded-md flex items-center justify-center bg-blue-950">
    <Image 
      src={project.imageUrl}
      alt="image-porto"
      width={120}
      height={120}
    />
   </div>
  );
}
