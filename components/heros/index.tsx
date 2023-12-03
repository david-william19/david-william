'use client';

import { motion } from 'framer-motion';

const Heros = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-3">
      <div className="w-fit h-fit">
        <h1 className="tracking-[-20px] leading-[14.5rem] text-[240px] font-bold whitespace-normal h-fit">
          Halo
        </h1>
      </div>
      <motion.h3
        className="text-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring' }}
      >
        I&apos;m David William - Frontend Developer <br />@ Telkom Indonesia
      </motion.h3>
    </div>
  );
};

export default Heros;
