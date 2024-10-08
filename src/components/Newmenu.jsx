import { delay, motion } from 'framer-motion';
import React from 'react';
import { avacado, cherry, heart } from '../assets';
import styles from '../style';
import Svganim from './Svganim';

const Newmenu = () => {
  // SVG Path animation variants
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
        delay: 1,
           repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 0, // Original Y-axis movement
    },
    onscreen: {
      opacity: 1,
      y: 50,
      rotate: -10, // Original rotation
      scale: [0.2, 0.6, 1],
      
      transition: {
        type: 'spring',
        bounce: 0.5,
        stiffness: 300,
        delay: 1,
        duration: 2,
      },
    },
  };
// button
const buttonVariants ={
    hidden: {
        opacity: 0,        
    },

visible: {
opacity: 1,
scale: [1, 2,1],
transition:{
    
    delay: 2,
    duration: 1
}
}

}

// button



  return (
    <section className="flex  mb-5">
      <motion.div
        className="flex flex-col justify-center  w-[100vw]  items-center ccard "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* card 1 */}

        <motion.div
          className="text-[6vw] neue-medium gap-2  w-[75vw] items-center justify-center flex mx-auto  mt-10 text-white"
         
        >
           <h1 className='underline'>Fruits</h1>
          <motion.img src={cherry} className="w-40 mb-4" alt="heart"  initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          style={{ originY: '100%' }}/>
        </motion.div>
        {/* Optional Background Element (Commented Out) */}
        {/* <div className='green w-[80vw] h-[200px] mx-auto green-bg rounded-[24px] z-60' /> */}

        <Svganim />


        {/* card 1 */}

       <div className={`${styles.flexCenter} h-[16vh]`}>
       <motion.button className='pink text-white md:w-[30vw] w-[50vw]  h-[72px]   text-[28px] mt-1 pop-medium neobutton'
       variants={buttonVariants}
       initial='hidden'
       whileInView='visible'
       viewport={{ once: true, amount: 0.2 }}>
            Order Today
        </motion.button>
       </div>
      </motion.div>
    </section>
  );
};

export default Newmenu;
