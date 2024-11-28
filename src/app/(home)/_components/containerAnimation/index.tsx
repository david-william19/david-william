"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContainerAnimation({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            style={{ minHeight: "100vh", display: "flex" }}
        >
            {children}
        </motion.div>
    );
}