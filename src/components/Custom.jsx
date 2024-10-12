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
        
    
    <motion.div>
        <motion.img src={stars} alt="" className='w-40 mx-2'  
       />
    </motion.div>

    <motion.div className='h-[15vh]'>
        <motion.img src={meal} alt="" className='md:w-[50%] w-[85%]'  
        variants={starVariants} 
          initial="initial" 
          animate="animate" />
    </motion.div>

    <div className={`${styles.flexCenter}  mx-auto justify-center items-center text-center flex flex-col `}>
        <h1 className='pop-medium text-[7vw] text-white mt-1 '>5,000 </h1>
        <h1 className='pop-medium text-[6vw] text-white mt-1 '>Orders </h1>
    </div>


    </div>

  )
}

export default Custom