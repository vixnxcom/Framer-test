import React from 'react';
import { motion } from 'framer-motion';
import { heart } from '../assets';
import styles from '../style';

const MenuP = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 300, // Original Y-axis movement
     
    },
    onscreen: {
      opacity: 1,
      y: 50,
      rotate: -10, // Original rotation
      scale: [0.2,0.6,1],

      transition: {
        type: 'spring',
        bounce: 0.5,
        stiffness: 300,
        duration: 1,
      
      },
    },
  };

  return (
    <section className='flex flex-col g overflow-x-hidden '>
      <motion.div
        className="card-container max-w-[80vw] md:max-w-[600px] py-10 md:py-20 mx-auto"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true , amount: 0.2 }}

      >
        {/* Cards Section */}
        <motion.div className="splash mt-10 md:mt-20"    
        
         >
          <motion.div className="card"  
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the card is visible
          variants={cardVariants}
          custom={0} >
            <img src={heart} alt="Heart Icon" className="w-20 md:w-24" />
          </motion.div>
        </motion.div>


        {/* Cards Section */}
       
        {/* Cards Section */}
       


        

       
      </motion.div>
    </section>
  );
};

export default MenuP;
