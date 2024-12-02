"use client"

import { getPosts } from "@/services/devtoApi";
import PostCard from "./PostCard";
import { AnimatePresence } from "motion/react";
import {motion} from "framer-motion"
import { useQuery } from "react-query";

interface PostDevTo {
    title: string;
    description: string;
    cover_image: string;
    link: string;
}

export default function PostContainer() {
    const {data, isLoading} = useQuery('getPosts', getPosts);

    const cardContainer = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            }
        }
    }

    const cardItem = {
        hidden: {
            marginBottom: '-15px',
        },
        show: {
            marginBottom: 0
        }
    }
    
    if(isLoading) {
        return (
            <p>Loading..</p>
        )
    }

    return (
        <AnimatePresence>
        <motion.div variants={cardContainer} initial="hidden" animate="show" className="flex gap-[67px]">
            {
                data.map((post: PostDevTo, index: number) => (
                    <PostCard 
                        key={index}
                        title={post.title}
                        description={post.description}
                        image={post.cover_image}
                        alt={post.title}
                        link={post.link}
                        variants={cardItem}
                    />
                ))
            }
        </motion.div>
        </AnimatePresence>
    )
}