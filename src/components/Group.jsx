import { motion } from 'framer-motion';
import React from 'react';
import Text from './Text';
import TextArea from './Text';


const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Group = () => {
  return (
    <div className='flex flex-col gap-8 overflow-x-hidden h-screen'>
      <TextArea/>

      <motion.section
        className='flex flex-row gap-4 p-10'
        variants={containerVariants}
        initial='hidden'
        animate='show'
      >
        
        {/* fade in */}
        <motion.div
          variants={itemVariants}
           className=' flex items-center justify-center  gap-4'>
      
  
       
      
          {/* Content */}
         <motion.div 
         initial={{ opacity: 0, y: 100}}
         animate={{opacity: 1, y: 0}} 
         transition={{ duration: 1, ease: 'easeInOut', delay: 1.5}} className='w-20 h-20 bg-stone-100 rounded-lg'> </motion.div>

         <motion.div
         initial={{ opacity: 0, y: -100}}
         animate={{opacity: 1, y: 0}} 
         transition={{ duration: 1, ease: 'easeInOut', delay: 2}} className='w-20 h-20 bg-stone-100 rounded-full'> </motion.div>

        </motion.div>


     
       
      </motion.section>



   
    </div>
  );
};

export default Group;
