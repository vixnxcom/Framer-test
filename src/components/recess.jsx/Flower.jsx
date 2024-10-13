import React from 'react'
import { sun, sunn } from '../../assets'
import styles from '../../style'
import { motion } from 'framer-motion'

const Flower = () => {


    const flowerVariants = {
        initial: {
          opacity: 1,
        
        },
        animate: {
          opacity: 1,
       rotate: [0,360],
        
          transition: {
            duration: 1.5, // Controls the duration of the animation
            repeat: Infinity,
            
          
            ease: "easeInOut", // Easing for smooth animation
          },
        },
      };
    const sunVariants = {
        initial: {
          opacity: 1,
        
        },
        animate: {
          opacity: 1,
       rotate: [0,-360],
        
          transition: {
            duration: 1.5, // Controls the duration of the animation
            repeat: Infinity,
            
          
            ease: "easeInOut", // Easing for smooth animation
          },
        },
      };







  return (
    <div>
    <div className={`${styles.flexCenter} mx-auto`}>
    <motion.div className='mt-2 gap-4 flex flex-row'>
    <motion.img src={sun} alt="" className='w-20 mx-4' variants={flowerVariants} 
          initial="initial" 
          animate="animate" />
    <motion.img src={sun} alt="" className='w-20 ' variants={flowerVariants} 
          initial="initial" 
          animate="animate" />
    <motion.img src={sun} alt="" className='w-20 ' variants={flowerVariants} 
          initial="initial" 
          animate="animate" />
    <motion.img src={sun} alt="" className='w-20 ' variants={flowerVariants} 
          initial="initial" 
          animate="animate" />

    
    


    </motion.div>
    </div>

    <div className={`${styles.flexCenter} mx-auto mt-2`}>
    <motion.div className='mt-2 gap-4 flex flex-row'>
    <motion.img src={sunn} alt="" className='w-20 mx-4' variants={sunVariants} 
          initial="initial" 
          animate="animate" />
    <motion.img src={sunn} alt="" className='w-20 ' variants={sunVariants} 
          initial="initial" 
          animate="animate" />
    <motion.img src={sunn} alt="" className='w-20 ' variants={sunVariants} 
          initial="initial" 
          animate="animate" />
    <motion.img src={sunn} alt="" className='w-20 ' variants={sunVariants} 
          initial="initial" 
          animate="animate" />
   
    


    </motion.div>
    </div>
    </div>
  )
}

export default Flower