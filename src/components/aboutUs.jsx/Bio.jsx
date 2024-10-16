import React, { useRef } from 'react';
import styles from '../../style';
import Image from './Image';
import { bgimg, petal } from '../../assets';
import { motion, useInView } from 'framer-motion';

const Bio = () => {
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
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
      <div className={`${styles.flexCenter} flex flex-col md:w-[1200px] w-[380px] mx-auto`}>
        <motion.div className='text-[8vw] pop-medium text-white flex flex-row'>
          <h1>Churros</h1>
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
        <p className=' md:text-[3vw] text-[5vw] neue-medium p-2'>
          Welcome to Churros, where organic goodness meets uncompromising quality. We believe that what you eat should nourish
          both your body and the planet. That’s why we’re committed to offering products that are not only delicious but also
          grown with care for the environment, ensuring that you can enjoy clean, healthy food without compromise.
        </p>
      </div>
      <Image />
    </div>
  );
}

export default Bio;
