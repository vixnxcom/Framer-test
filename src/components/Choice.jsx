import React from 'react';
import styles from '../style';
import { burger, clip, heart } from '../assets';
import { motion } from 'framer-motion';

const Choice = () => {

  const imgVariants = {
    initial: {
      opacity: 0.8,
      y: 0,
    },
    animate: {
      opacity: 1,
      scale: [1, 1.2, 1],
      y: 5,
      transition: {
        duration: 1.5, // Controls the duration of the animation
        repeat: Infinity,
        repeatDelay: 1,
        duration: 3,
        ease: "easeInOut", // Easing for smooth animation
      },
    },
  };

  return (
    <div className={`${styles.flexCenter} flex flex-row md:w-[50vw] w-[80vw] justify-center items-center mx-auto mb-10 `}>
        <h1 className='pop-bold text-[11vw] mb-4 text-white mt-10 text'>
        Yum Choices
      </h1>
      <motion.div className="mt-2">
        <motion.img 
          src={clip} 
          className="md:w-[100%] w-[100%]" 
          variants={imgVariants} 
          initial="initial" 
          animate="animate" 
        />
      </motion.div>

      
    </div>
  );
}

export default Choice;
