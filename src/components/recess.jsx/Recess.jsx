import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { bgg, custom } from '../../assets';
import styles from '../../style';

const Recess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation will happen once when it enters the viewport

  const imgVariants = {
    initial: {
      opacity: 0,
      scale: 0.2,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div className={`${styles.flexCenter} relative h-[40vh] bg-pink`}>
      <h1 className=' absolute pop-bold text-[6vw] text-white top-0 left-2'>
        Churros
      </h1>
      <h1 className=' absolute pop-bold text-[11vw] text-white top-12 left-2'>
        Churros
      </h1>
    
      {/* Background image (bgg) */}
      <img 
        src={bgg} 
        alt="Background" 
        className='absolute top-0 right-0 w-[50vw] z-10' // Positioned behind the custom image
      />
      
      {/* Custom image */}
      <motion.img
        ref={ref} 
        src={custom}
        alt="Custom Image"
        className='absolute top-0 right-[4vw] md:w-[50%] w-[70%] z-20' // Positioned in front of the background
        initial="initial"
        animate={isInView ? "animate" : "initial"} 
        variants={imgVariants}
      />
      
    </motion.div>
  );
};

export default Recess;
