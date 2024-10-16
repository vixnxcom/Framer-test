import React from 'react';
import styles from '../style';
import { burger } from '../assets';
import { motion } from 'framer-motion';

const Menutitle = () => {

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
        repeatDelay: 3,
        duration: 3,
        ease: "easeInOut", // Easing for smooth animation
      },
    },
  };

  return (
    <div className={`${styles.flexCenter} flex flex-row md:w-[50vw] w-[80vw] justify-center items-center mx-auto mb-10`}>
      <motion.div className="mt-2">
        <motion.img 
          src={burger} 
          className="w-40" 
          variants={imgVariants} 
          initial="initial" 
          animate="animate" 
        />
      </motion.div>

      <h1 className='pop-bold text-[11vw] mb-4 text-white mt-10 text'>
        Menu
      </h1>
    </div>
  );
}

export default Menutitle;
