import React from 'react';
import { delay, motion } from 'framer-motion';
import { arrow } from '../assets';

const Line = () => {



  return (
    <motion.div className='flex justify-center z-[999] bg-white w-[89vw] h-auto neo mx-4 ' 
    initial={{opacity: 0, x: -100}} 
    animate={{opacity:1, x: 0}} 
    transition={{scale: [2,1,2,1],  duration: 3, delay: 4 ,stiffness: 800, type: 'spring'}}
    whileHover={{ scale: [1.2, 1], originX: 0,}} >




      <div className='flex flex-row mx-auto items-center '>
        <h1 className='text-yellow-400 text-[5vw] sm:text-[4vw] md:text-[8vw] lg:text-[8vw] text-center mt-1 p-2 mx-4 texxt'>
          Let's eat Cake
        </h1>
        <motion.button
          initial={{opacity: 0, scale: 1 }} // Starts at normal size
          animate={{opacity: 1,  scale: [1, 1.2, 0.9, 1] }} // Bounce effect (scales up and down)
          transition={{
            duration: 1.5, 
            delay: 6,// Duration of each loop
            ease: "easeInOut", // Smooth easing
            repeat: Infinity, // Repeat forever
            repeatType: "loop", // Loop the animation
            repeatDelay: 0.6, // Delay between each repeat
          }}
          className='flex items-center justify-center'
        >
          <img
            src={arrow} // Placeholder image for testing
            alt="arrow"
            className='w-[15vw] sm:w-[10vw] md:w-[10vw] lg:w-[12vw] h-auto p-2'
          />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Line;
