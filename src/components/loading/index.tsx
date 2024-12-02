"use client"

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <motion.div 
            initial={{
                opacity: 1
            }}
            animate={{
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
        className="bg-[#07131c] h-screen w-full">
            <div className="flex justify-center items-center h-full">
                <h1 className="text-white text-[180px] font-thunder font-extrabold">Loading...</h1>
            </div>
        </motion.div>
    )
}