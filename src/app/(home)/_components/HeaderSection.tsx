'use client'

import Scene from "@/components/moon/Scene";
import StaggerText from "@/components/staggerText";
import { motion } from "motion/react";
import { CSSProperties, useRef, useState } from "react";
import SocmedContainer from "./SocmedContainer";
import { SocialMedia } from "@/types/SocialMedia";

const socialMedia: SocialMedia[] = [
  {
    name: "twitter",
    link: "https://x.com/whoareeuuu_",
    icon: "twitter",
  },
  {
    name: "linkedin",
    link: "https://x.com/whoareeuuu_",
    icon: "linkedin",
  },
  {
    name: "gmail",
    link: "https://x.com/whoareeuuu_",
    icon: "gmail",
  },
  {
    name: "github",
    link: "https://x.com/whoareeuuu_",
    icon: "github",
  },
];

export default function HeaderSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHideSocmed, setIsHideSocmed] = useState<boolean>(false);

  const closeIconVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    }
  }

  return (
    <div
      ref={ref}
      className="w-full container relative pt-24 mx-auto z-0 h-screen"
    >
      {/* front end devs container */}
      <motion.div className="leading-none text-center mt-5 font-bold z-10 w-fit mx-auto">

        <StaggerText text="FRONTEND&nbsp;ENGINEER" className="text-[#1DCD9F] font-thunder font-semibold text-[200px]" prefix="2" />

        <div className="flex justify-between">
          <motion.p initial={{opacity: 0, scale: .95}} animate={{opacity: 1, scale: 1, transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay:1.8,
          }}} className="max-w-[120px] font-thin text-[18px] text-left leading-tight text-gray-400"><span className="font-bold text-white">David</span> William da costa</motion.p>
          <motion.p initial={{opacity: 0, scale: .95}} animate={{opacity: 1, scale: 1, transition: {
            duration: 0.9,
            ease: "easeInOut",
            delay:2,
          }}} className="max-w-[210px] font-thin text-[12px] text-right leading-tight text-gray-400">
            <span className="text-white font-semibold">Design</span> and <span className="text-white font-semibold">Code</span> that works together to achieve the goals of application.
          </motion.p>
        </div>
      </motion.div>
      {/* moon object container*/}
      <motion.div initial={{opacity: 0}} animate={{
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
          delay: 2.5,
        },
      }} className="flex-1 w-full h-full absolute top-0 z-0 flex items-center justify-center left-0">
        <Scene />
      </motion.div>
      <div className="absolute bottom-20 w-full flex flex-col items-center">
        <div className="flex gap-5 mt-5 min-w-[300px] h-[45px] items-center">
          <motion.button 
            initial={false}
            animate={{
              x: isHideSocmed ? 0 : 100,
              borderRadius: !isHideSocmed ? "10px" : "50%",
              width: !isHideSocmed ? "110px" : "44px"
            }}
             transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setIsHideSocmed(!isHideSocmed)} 
            className="bg-[#1DCD9F] text-white h-full flex items-center justify-center"
          >
            {!isHideSocmed ? <p className="truncate">Let&apos;s talk</p> : <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                  width="24"
                  height="24"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.line 
                    x1="8"
                    y1="8"
                    x2="18"
                    y2="18"
                    stroke="#fff"
                    variants={closeIconVariants}
                    custom={2}
                    style={shape}
                  />
                  <motion.line 
                    x1="8"
                    y1="18"
                    x2="18"
                    y2="8"
                    stroke="#fff"
                    variants={closeIconVariants}
                    custom={2}
                    style={shape}
                  />
                </motion.svg>}
          </motion.button>
          {isHideSocmed && <SocmedContainer isHide={isHideSocmed} socialMedia={socialMedia} />}
        </div>
      </div>
    </div>
  );
}


const shape: CSSProperties = {
  strokeWidth: 2,
  strokeLinecap: "round",
  fill: "transparent",
}
