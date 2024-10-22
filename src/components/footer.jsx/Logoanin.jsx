import React from 'react';
import { motion } from 'framer-motion';
import { logo } from '../../assets';

const Logoanin = () => {
  return (
    <div>
      <div className='flex flex-row mx-4'>
        {/* First image with a specific stiffness and delay */}
        <motion.img 
          src={logo} 
          alt="logo" 
          className='w-20' 
          whileInView={{ y: ["0%", "-20%"] }}
          transition={{
            type: "spring", 
            stiffness: 100, // First image stiffness
            duration: 0.6,
            yoyo: Infinity,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 0.4 // First image delay
          }}
        />
        
        {/* Second image with a different stiffness and delay */}
        <motion.img 
          src={logo} 
          alt="logo" 
          className='w-20' 
          whileInView={{ y: ["0%", "-20%"] }}
          transition={{
            type: "spring", 
            stiffness: 100, // Second image stiffness
            duration: 0.6,
            yoyo: Infinity,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 0.5 // Second image delay
          }}
        />
        
        {/* Third image with another stiffness and delay */}
        <motion.img 
          src={logo} 
          alt="logo" 
          className='w-20' 
          whileInView={{ y: ["0%", "-20%"] }}
          transition={{
            type: "spring", 
            stiffness: 100, // Third image stiffness
            duration: 0.6,
            yoyo: Infinity,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 0.6 // Third image delay
          }}
        />
      </div>
      
      <h1 className='text-white pop-medium text-[10vw] mb-20 mx-4'>
        Churros
      </h1>
    </div>
  );
};

export default Logoanin;
