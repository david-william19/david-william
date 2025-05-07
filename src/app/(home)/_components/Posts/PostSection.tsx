"use client"

import PostContainer from "./PostContainer";
import { motion } from "motion/react"

export default function PostSection() {

  const titlePostVariants = {
    hidden: {
      opacity: 0,
      y: '50px'
    },
    show: {
      opacity: 1,
      y: '0px',
      transition: {
        duration: 1,
        ease: "easeInOut"
      },
    }
  }

  const descriptionPostVariants = {
    hidden: {
      opacity: 0,
      y: '50px'
    },
    show: {
      opacity: 1,
      y: '0px',
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeInOut"
      },
    }
  }

  return (
    <section className="w-full container mx-auto pt-5 pb-20">
        <motion.h1 
          variants={titlePostVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-201px"
          }}
          className="font-thunder text-center font-extrabold text-white text-[119px] leading-none mt-28">POST
        </motion.h1>

        <motion.p variants={descriptionPostVariants} initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: "-51px"
        }} className="text-white mx-auto text-center text-xl max-w-[499px] font-thunder mb-10">all post that i created is basically from library or framework that i learned and also basically comes from my experiences.</motion.p>
        <PostContainer />
    </section>
  );
}
