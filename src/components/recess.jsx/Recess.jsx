import React, { useRef } from 'react';


import { bgimg, petal } from '../../assets';
import { motion, useInView } from 'framer-motion';
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
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className={`${styles.flexCenter} ${styles.paddingX} flex flex-col h-[50vh] pink`}>
      <div className={`${styles.flexCenter} flex flex-col  mx-auto`}>
        <motion.div className='text-white flex flex-row'>
       
          <motion.img
            ref={ref} // Attach ref to the image
            src={bgimg}
            alt="Petal"
            className='md:w-50 w-[40%]'
            initial="initial"
            animate={isInView ? "animate" : "initial"} // Animate only when in view
            variants={imgVariants}
          />
       
          <motion.img
            ref={ref} // Attach ref to the image
            src={bgimg}
            alt="Petal"
            className='md:w-50 w-[40%]'
            initial="initial"
            animate={isInView ? "animate" : "initial"} // Animate only when in view
            variants={imgVariants}
          />
        </motion.div>
        
      </div>

    </div>
  );
}

export default Recess;
