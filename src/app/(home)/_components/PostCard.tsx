"use client"

import { motion } from "motion/react"

interface Post {
    title: string;
    description: string;
    image: string;
    alt: string;
    link?: string;
}

export default function PostCard(props: Post) {
    const link = props.link ?? "https://dev.to/davidwilliam_";

    return (
        <motion.a 
            whileHover={{
                scale: 1.02,
                transition: {
                    duration: 0.2
                },
                backgroundColor: "#1f1f1f",
                boxShadow: "0 0 10px 0 #fff"
            }}
            href={link} 
            className="rounded-lg w-full"
        >
            {/* image post */}
            <img 
                src={props.image}
                alt={props.alt}
                height={"300"}
                className="rounded-lg"
            />
            <div className="px-[15px] mt-[20px]">
                {/* title post */}
            <h2 className="font-thunder text-white text-[40px] font-extrabold">{props.title}</h2>
            {/* description post */}
            <p className="font-thunder font-light text-white text-[18px]">{props.description}</p>
            </div>
        </motion.a>
    )
}