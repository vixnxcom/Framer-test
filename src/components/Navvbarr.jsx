import { motion } from 'framer-motion';
import React from 'react';
import { logo } from '../assets';

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
    <div className='w-full mt-2 mx-4 z-[900]'>
      <motion.div className='flex flex-row'>
        {/* text area */}
        <motion.img
          src={logo}
          className='md:w-16 h-20 w-36 z-[900] '
          initial='hidden'
          animate='visible'
          variants={svgVariants}
          whileInView="visible"
        />
        <div className='mt-4'>
          <h1 className='text-white pop-thin md:text-[2vw] text-[4vw]'>
            Churros
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Navvbarr;