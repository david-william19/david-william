"use client"

import Scene from "@/components/moon/Scene";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeaderSection() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true });
    return (
        <div ref={ref} className="flex w-full justify-center items-center mx-auto h-screen bg-stars">
            <span
            className="text-[180px] font-thunder font-extrabold lg:absolute lg:left-[140px] lg:top-[140px]">
                <motion.p 
                animate={{
                    color: ["#000", "#32CD32", "#000", "#32CD32"],
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
                    backdropFilter: "blur(20px)"
                }}
                className="leading-none">FRONT END</motion.p>
                <motion.p 
                animate={{
                    color: ["#32CD32", "#000", "#32CD32", "#000", "#32CD32"],
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
                    backdropFilter: "blur(20px)"
                }} className="leading-none pl-20">DEVS.</motion.p>
            </span>
            <div
                className="w-[510px] h-[510px] z-10"
            >
                <Scene />
            </div>
            <motion.span className="text-[180px] font-thunder font-extrabold lg:absolute lg:right-[140px] lg:bottom-0">
                <motion.p 
                animate={{
                    color: ["#32CD32", "#000", "#32CD32", "#000", "#32CD32"],
                    transition: [{
                        ease: "linear",
                        duration: 2
                    }],
                    backdropFilter: "blur(20px)"
                }}
                 className="leading-none">ENTHUSIAST</motion.p>
            </motion.span>
        </div>
    )
}
