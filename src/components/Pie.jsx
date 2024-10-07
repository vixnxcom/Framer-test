import { motion } from 'framer-motion';
import React from 'react';
import { avacado, cake, cream, heart } from '../assets';
import styles from '../style';
import Svganim from './Svganim';

const Pie = () => {
 

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
        duration: 1,
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
    <section className="flex mt-10 mb-5">
      <motion.div
        className="flex flex-col justify-center  w-[100vw]  items-center ccard mt-10 mx-auto"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* card 1 */}

        <motion.div
          className="text-[6vw] pop-medium gap-2  w-[75vw] items-center justify-center flex mx-auto  mt-10 text-white"
         
        >
           <h1 className=''>Desserts</h1>
          <motion.img src={cream} className="w-40 mb-4" alt="heart"  initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          style={{ originY: '100%' }}/>
        </motion.div>

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

export default Pie;
