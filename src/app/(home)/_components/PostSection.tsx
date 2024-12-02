"use client"

import { useInView } from "framer-motion";
import PostContainer from "./PostContainer";
import { useRef } from "react";
import {motion} from "framer-motion"

export default function PostSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, {
    once: true, margin: "-20px 50px"
  })
  return (
    <section ref={containerRef} className="w-full px-[150px] h-screen py-5">
      {/* <div className="w-fit"> */}
        <motion.h2 
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="font-thunder font-extrabold text-white text-[120px]">POST
        </motion.h2>
        <PostContainer />
      {/* </div> */}
    </section>
  );
}
