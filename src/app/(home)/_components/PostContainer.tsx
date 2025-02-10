"use client"

import { getPosts } from "@/services/devtoApi";
import PostCard from "./PostCard";
import { AnimatePresence } from "motion/react";
import {motion, useScroll} from "framer-motion"
import { useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";

interface PostDevTo {
    title: string;
    description: string;
    cover_image: string;
    url: string;
    tag_list: string[]
}

export default function PostContainer({ref}: {ref: any}) {
    const {data, isLoading} = useQuery('getPosts', getPosts);

    const [id, setId] = useState<number | null>(0)

    const variantsCard = {
        hidden: {
            opacity: 0,
            width: 0,
            x: '200px'
        },
        show: {
            opacity: 1,
            // width: "100%",
            x: 0,
            transition: {
                staggerChildren: 0.8,
                delayChildren: 0.2,
            }
        },
    }

    const handleHoverChange = (id: number | null) => {
        setId(id)
    }
    
    if(isLoading) {
        return (
            <p>Loading..</p>
        )
    }

    return (
        <motion.div initial="hidden" whileInView="show" className="flex items-center gap-2.5 w-full">
            {
                data.map((post: PostDevTo, index: number) => (
                    <PostCard 
                        key={index}
                        id={index}
                        title={post.title}
                        description={post.description}
                        image={post.cover_image}
                        alt={post.title}
                        link={post.url}
                        tags={post.tag_list}
                        isHovered={index === id}
                        isAnyHovered={id !== null}
                        variants={variantsCard}
                        onHoverChange={handleHoverChange}
                    />
                ))
            }
        </motion.div>
        // </AnimatePresence>
    )
}