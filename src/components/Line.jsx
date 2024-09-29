import React from 'react';
import { motion } from 'framer-motion';
import { arrow } from '../assets';

const Line = () => {
  return (
    <div className='flex justify-center z-[999] bg-white w-[90vw] h-auto'>
      <div className='flex flex-row mx-auto items-center '>
        <h1 className='text-yellow-400 text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] text-center mt-1 p-2 mx-4'>
          Let's eat Cake
        </h1>
        <motion.button
          initial={{ scale: 1 }} // Starts at normal size
          animate={{ scale: [1, 1.2, 0.9, 1] }} // Bounce effect (scales up and down)
          transition={{
            duration: 1.5, // Duration of each loop
            ease: "easeInOut", // Smooth easing
            repeat: Infinity, // Repeat forever
            repeatType: "loop", // Loop the animation
            repeatDelay: 0.5, // Delay between each repeat
          }}
          className='flex items-center justify-center'
        >
          <img
            src={arrow} // Placeholder image for testing
            alt="arrow"
            className='w-[15vw] sm:w-[10vw] md:w-[8vw] lg:w-[5vw] h-auto p-2'
          />
        </motion.button>
      </div>
    </div>
  );
}

export default Line;
