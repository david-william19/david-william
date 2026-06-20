"use client"

import { getPosts } from "@/services/devtoApi";
import PostCard from "./PostCard";
import { motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { PostDevTo } from "@/types/Post";

export default function PostContainer() {
    const {data, isLoading} = useQuery({ queryKey: ['getPosts'], queryFn: getPosts });

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: '200px',
            transition: {
                staggerChildren: 0.10,
            }
        },

        show: {
            opacity: 1,
            y: "0px",
            transition: {
                staggerChildren: 0.10,
                delayChildren: 0.5,
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: '200px',
        width: "300px",
        },

        show: {
            opacity: 1,
            y: '0px',
            zIndex: 0,
            transition: {
                staggerChildren: 0.10,
                delayChildren: 0.5,
            }
        }
    }
    
    if(isLoading) {
        return (
            <p>Loading..</p>
        )
    }

    return (
        <motion.div variants={containerVariants} viewport={{
            once: true,
            margin: "-50px"
        }} initial="hidden" whileInView="show" className="flex items-center gap-2.5 max-w-1/2 justify-center h-fit mx-auto">
            {
                data?.map((post: PostDevTo, index: number) => (
                <motion.div
                    key={post.id}
                    variants={cardVariants} 
                    whileHover={{
                        scale: 1.05,
                        width: "800px",
                        zIndex: 10,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    className={clsx("h-[650px] overflow-hidden relative")}
                >
                    <PostCard 
                        key={index}
                        title={post.title}
                        description={post.description}
                        image={post.cover_image}
                        alt={post.title}
                        link={post.url}
                        tags={post.tag_list}
                    />
                </motion.div>
                ))
            }
        </motion.div>
        // </AnimatePresence>
    )
}
