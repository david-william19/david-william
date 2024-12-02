"use client"

import { motion, Variants } from "motion/react"

interface Post {
    title: string;
    description: string;
    image: string;
    alt: string;
    link?: string;
    variants?: Variants;
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
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 0 10px 0 #fff"
            }}
            variants={props.variants}
            animate
            href={link} 
            className="rounded-lg w-full pb-5"
        >
            {/* image post */}
            <img 
                src={props.image}
                alt={props.alt}
                height={500}
                width={"100%"}
                className="rounded-lg h-[200px] object-cover"
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