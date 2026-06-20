import { SocialMedia } from "@/types/SocialMedia";
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image";

interface SocmedProps {
  isHide: boolean;
  socialMedia: SocialMedia[]
}

export default function SocmedContainer({isHide, socialMedia}:SocmedProps) {
  const slideVariants = {
    start: {
      opacity: 0,
      transform: "translateX(-50px)",
      transition: {
        staggerChildren: 0.3,
        ease: "linear"
      }
    },

    show: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        staggerChildren: 0.3,
        ease: "linear"
      },
    },

    exit: {
    opacity: 0,
    transform: "translateX(-50px)",
    transition: {
        duration: 0,
        ease: "linear"
      }
    }
  }

  const socmedItem = {
    start: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: -50
    }
  }

  return (
    <AnimatePresence>
      {isHide && (
      <motion.ul variants={slideVariants} initial="start" animate="show" exit="exit" className="flex gap-2.5 items-center">
          {
            socialMedia.map((data, index) => {
              return (
                <motion.li variants={socmedItem} className="bg-[#ffffff62] w-[40px] h-[40px] p-2.5 rounded-full" key={index}>
                  <a href={data.link}>
                    <Image src={`/icons/${data.icon}.svg`} width={30} height={30} alt={`image-${index}`} />
                  </a>
                </motion.li>
              )
            })
          }
      </motion.ul>
        )}
    </AnimatePresence>
  )
}
