import { motion } from "framer-motion";

export default function LoadingScreen() {
    const containerVariants = {
        start: {
            transition: {
                staggerChildren: 0.1,
                ease: "easeInOut",
            },
        },
        stop: {
            transition: {
                staggerChildren: 0.1,
                ease: "easeInOut",
            },
        },
    }

    const barVariants = {
        start: {
            height: '100%',
            width: "100%",
            transition: {
                duration: 0.5,
            }
        },
        stop: {
            height: '0',
        },
    }
    return (
        <motion.div
            variants={containerVariants}
            initial="start"
            animate="stop"
            className="loading-container h-screen w-full absolute top-0 left-0 flex"
            >
            {
                [...Array(7)].map((_, index) => (
                    <motion.div
                        key={index} 
                        className="bar z-50 bg-[#FF6500]"
                        variants={barVariants}
                    ></motion.div>
                ))
            }
        </motion.div>
    )
}