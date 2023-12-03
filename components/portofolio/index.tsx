'use client';

import { motion } from 'framer-motion';

const Portofolio = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };
  return (
    <div className="mx-[250px]">
      <motion.div
        variants={container}
        initial={'hidden'}
        animate={'show'}
        className="grid md:grid-cols-3 gap-5"
      >
        <div className="col-span-1">
          <motion.div variants={item} className="rounded-lg p-3 bg-blue-200">
            <p>test</p>
          </motion.div>
        </div>
        <div className="col-span-2">
          <motion.div variants={item} className="rounded-lg p-3 bg-purple-200">
            <p>test</p>
          </motion.div>
        </div>
        {/* row 2 */}
        <div className="col-span-2 row-span-2">
          <motion.div
            variants={item}
            className="rounded-lg p-3 h-full bg-red-200"
          >
            <p>test</p>
          </motion.div>
        </div>

        <div className="col-span-1">
          <motion.div variants={item} className="rounded-lg p-3 bg-orange-200">
            <p>test</p>
          </motion.div>
        </div>
        <div className="col-span-1">
          <motion.div variants={item} className="rounded-lg p-3 bg-green-200">
            <p>test</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portofolio;
