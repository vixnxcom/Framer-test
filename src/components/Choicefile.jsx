import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Stat from './Stats';
import Custom from './Custom';
import Orders from './Orders';
import Recipes from './Recipes';
import styles from '../style';

// Animation variants with bounce effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Stagger each child component by 0.5 seconds
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start lower for a noticeable bounce effect
  visible: {
    opacity: 1,
    y: 0, // End at the original position
    transition: {
      type: 'spring', // Use spring for bounce
      stiffness: 500, // Control the bounciness
      damping: 15,    // Control how fast it settles after bouncing
      duration: 1,  // Overall duration
    },
  },
};

const Choicefile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% of the component is visible

  return (
    <motion.div
      ref={ref}
      className={`${styles.flexCenter} grid grid-cols-2 gap-2 mx-auto yellow md:h-[120vh] h-[76vh]`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on viewport visibility
    >
      {[Stat, Custom, Orders, Recipes].map((Component, index) => (
        <motion.div
          key={index}
          className={`${styles.flexCenter}  md:h-[50vh] h-[35vh] mt-5 ${index >= 2 ? 'mb-5' : ''} neobox`}
          variants={itemVariants}
        >
          <div className={`${styles.boxWidth}`}>
            <Component />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Choicefile;
