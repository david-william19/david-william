"use client"

import Scene from "@/components/moon/Scene";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function HeaderSection() {
    const ref = useRef<HTMLDivElement>(null)
    return (
        <div ref={ref} className="flex w-full justify-center items-center mx-auto h-screen bg-stars">
            {/* front end devs container */}
            <div
            className="lg:absolute lg:left-[140px] h-full lg:pt-[140px] flex flex-col justify-between">
                <div>
                <motion.p 
                animate={{
                    color: ["#000", "#32CD32", "#000", "#32CD32"],
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.1), 0 0 20px rgba(0, 255, 0, 0.2), 0 0 30px rgba(0, 255, 0, 0.4)',
                    transition: [{
                        ease: "linear",
                        duration: 1.5
                    }, {
                        ease: "linear",
                        duration: 1.5
                    }, {
                        ease: "linear",
                        duration: 1.5
                    }, {
                        ease: "linear",
                        duration: 1.5
                    }],
                }}
                className="leading-none text-[11.25rem] font-thunder font-extrabold">FRONT END</motion.p>
                <motion.p 
                animate={{
                    color: ["#32CD32", "#000", "#32CD32", "#000", "#32CD32"],
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.1), 0 0 20px rgba(0, 255, 0, 0.2), 0 0 30px rgba(0, 255, 0, 0.4)',
                    transition: [{
                        ease: "linear",
                        duration: 0.8
                    }, {
                        ease: "linear",
                        duration: 0.8
                    }, {
                        ease: "linear",
                        duration: 0.8
                    }, {
                        ease: "linear",
                        duration: 0.8
                    }],
                }} className="leading-none pl-20 text-[180px] font-thunder font-extrabold">DEVS.</motion.p>
                </div>

                <div className="max-w-[33vw] mb-10">
                    <p className="font-sans text-[#cccdcc] font-medium mb-5">Hi i’m david a frontend engineer with passion to creating enganging user experience and always curious about software development. i&apos;m using next JS, Node JS and Typescript for development daily driver</p>
                    <motion.button animate={{
                        transition: {
                            ease: "easeInOut"
                        }
                    }} whileHover={{
                        scale: 1.1
                    }} className="font-thunder p-2.5 rounded-lg tracking-wide font-semibold text-white bg-[#1DB954] hover:bg-[#1ed760]">LET&apos;S CONNECT</motion.button>
                </div>
            </div>
            {/* moon object container*/}
            <div
                className="w-[510px] h-[510px] z-10"
            >
                <Scene />
            </div>
            <span className="lg:absolute lg:right-[140px] lg:bottom-0 p-0">
                <motion.span 
                animate={{
                    color: ["#32CD32", "#000", "#32CD32", "#000", "#32CD32"],
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.1), 0 0 20px rgba(0, 255, 0, 0.2), 0 0 30px rgba(0, 255, 0, 0.4)',
                    transition: [{
                        ease: "linear",
                        duration: 2
                    }],
                }}
                 className="text-[11.25rem] inline-block font-thunder font-extrabold leading-none">ENTHUSIAST</motion.span>
            </span>
        </div>
    )
}
