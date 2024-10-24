import React from 'react'
import { burger, custom, meal, stars } from '../assets'
import styles from '../style'
import { motion } from 'framer-motion'

const Custom = () => {


    const starVariants = {
        initial: {
          
          x: 4,
          
        },
        animate: {
       
          x: -4,
        

          transition: {
            delay: 6,
            duration: 3, // Controls the duration of the animation
            repeat: Infinity,
            repeatDelay: 2,
            type: 'spring',
            stiffness: 300,
            ease: "easeInOut", // Easing for smooth animation
          },
        },
      };



  return (
    <div className=''>
        
    
        <div className='dusk rounded-full neoo'>
    <motion.div>
        <motion.img src={stars} alt="" className='w-40 mx-6'  
       />
    </motion.div>

    <motion.div className='h-[15vh] '>
        <motion.img src={meal} alt="" className='md:w-[50%] w-40 mx-6'  
        variants={starVariants} 
          initial="initial" 
          animate="animate" />
    </motion.div>
    </div>

    <div className={`${styles.flexCenter}  mx-auto justify-center items-center text-center flex flex-col `}>
        <h1 className='pop-medium md:text-[3vw] text-[7vw] textgreen mt-1 '>5,000 </h1>
        <h1 className='pop-medium md:text-[3vw] text-[6vw] textgreen mt-1 '>ORDERS </h1>
    </div>


    </div>

  )
}

export default Custom