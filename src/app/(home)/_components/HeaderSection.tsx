"use client";

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

  const handleSlideSosmed = () => {
    setIsHideSocmed(!isHideSocmed);
  };

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
      className="w-full container relative pt-24 mx-auto z-0 h-screen bg-[#050505]"
    >
      {/* front end devs container */}
      <motion.div className="leading-none text-center mt-5 font-bold z-10 w-fit mx-auto">
        {/* <StaggerText text="FRONTEND" className="text-[#FFA955]" prefix="1" />
        <br />
        <StaggerText text="DEVELOPERS" className="text-[#FFA955]" prefix="2" /> */}
        <h1 className="text-[#1DCD9F] font-thunder font-semibold text-[200px]">FRONTEND ENGINEER</h1>

        <div className="flex justify-between">
          <p className="max-w-[120px] font-thin text-[18px] text-left leading-tight text-gray-400"><span className="font-bold text-white">David</span> William da costa</p>
          <p className="max-w-[210px] font-thin text-[12px] text-right leading-tight text-gray-400">
            <span className="text-white font-semibold">Design</span> and <span className="text-white font-semibold">Code</span> that works together to achieve the goals of application.
          </p>
        </div>
      </motion.div>
      {/* moon object container*/}
      <div className="flex-1 w-full h-full absolute top-0 z-0 flex items-center justify-center left-0">
        <Scene />
      </div>
      <div className="absolute bottom-20 w-full flex flex-col items-center">
        {/* <p className="text-white text-center text-lg font-normal z-10 max-w-[70vw] mt-4">
          Hi, I'm David, a frontend developer with 3 years of experience in web
          and cross-platform mobile development. I enjoy sharing insights
          through articles. hit button below for open conversation
        </p> */}
        <div className="flex gap-5 mt-5 justify-center items-center">
          <motion.button
            animate={{
              width: isHideSocmed ? 50 : 150,
              borderRadius: isHideSocmed ? 100 : 10,
              opacity: 1,
              transition: {
                duration: 0.1,
              },
            }}
            onClick={handleSlideSosmed}
            className="bg-[#1DCD9F] text-black font-bold text-md h-[50px] w-[150px] rounded-lg z-10"
          >
            {isHideSocmed ? (
              <span className="text-black">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                  width="30"
                  height="30"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.line 
                    x1="8"
                    y1="8"
                    x2="22"
                    y2="22"
                    stroke="#000"
                    variants={closeIconVariants}
                    custom={2}
                    style={shape}
                  />
                  <motion.line 
                    x1="8"
                    y1="22"
                    x2="22"
                    y2="8"
                    stroke="#000"
                    variants={closeIconVariants}
                    custom={2}
                    style={shape}
                  />
                </motion.svg>
              </span>
            ) : (
              <p className="w-full truncate">Let's Talk 🚀</p>
            )}
          </motion.button>
          <SocmedContainer isHide={isHideSocmed} socialMedia={socialMedia} />
        </div>
      </div>
    </div>
  );
}

const shape: CSSProperties = {
  strokeWidth: 2,
  strokeLinecap: "round",
  fill: "transparent"
}
