import React from 'react';
import styles from '../style';
import { burger, halo } from '../assets';
import { motion } from 'framer-motion';

const Slidertitle = () => {

  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };


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
    <div className={`${styles.flexCenter} flex flex-col md:w-[50vw] w-[80vw] justify-center items-center mx-auto mb-2`}>
      <motion.div className="mt-2">
        <motion.img 
          src={halo} 
          className="w-100" 
          variants={imgVariants} 
          initial="initial" 
          animate="animate" 
        />
      </motion.div>

      <motion.h1
        className="pop-bold text-[11vw] mb-4 text-white mt-10 items-center justify-center mx-auto text-center"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Customers Reviews
      </motion.h1>
    </div>
  );
}

export default Slidertitle;
