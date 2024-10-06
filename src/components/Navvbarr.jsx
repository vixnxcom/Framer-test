import { motion } from 'framer-motion';
import React from 'react';
import { logo } from '../assets';
import { div } from 'framer-motion/client';

const svgVariants = {
  hidden: {
    rotate: 180,
    opacity: 0,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    scale: [4,2,1],
    transition: { duration: 1 , }
    
  }
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 2,
      ease: 'easeInOut'
    }
  }
};

const Navvbarr = () => {
  return (

   
      <motion.div className='flex flex-row max-h-[15vh]'>
        {/* text area */}
        <motion.img
          src={logo}
          className='md:w-16  w-24 mt-1 '
          initial='hidden'
          animate='visible'
          variants={svgVariants}
          whileInView="visible"
        />
        <div className='mt-4'>
          <h1 className='text-white pop-bold md:text-[3vw] text-[6vw] text'>
            Churros
          </h1>
        </div>
      </motion.div>

 
  );
};

export default Navvbarr;
