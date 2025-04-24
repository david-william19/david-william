import * as motion from "motion/react-client"

export default function PostsSectionHeader() {
  return (
    <div>
     <motion.h1                                                                                                                                                                                                                    
      variants={titlePostVariants}
      initial="hidden"
      whileInView="show"                                                                                                                                                                                                          </div>
  )   viewport={{
}       once: true,
        margin: "-201px"
      }}
      className="font-thunder text-center font-extrabold text-white text-[119px] leading-none mt-28">POST
    </motion.h1>
                                                                                                                                                                                                                                 
    <motion.p variants={descriptionPostVariants} initial="hidden" whileInView="show" viewport={{
      once: true,
      margin: "-51px"
    }} className="text-white mx-auto text-center text-xl max-w-[499px] font-thunder mb-10">all post that i created is basically from library or framework that i learned and also basically comes from my experiences.</motion.p>




