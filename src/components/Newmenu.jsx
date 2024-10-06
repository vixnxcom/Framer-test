import { motion } from 'framer-motion'
import React from 'react'
import { heart } from '../assets'

const Newmenu = () => {

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
    <section className=' flex py-50 h-[120vh] mt-10'>

   <motion.div className='flex flex-col justify-center py-10 w-[100vw] h-[100vh]  items-center ccard mt-10'  
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true , amount: 0.2 }}
>
     
    
    
   <motion.div className='xard text-[10vw] w-[300px] items-center justify-center flex mx-auto  
   bg-white h-[60vh]  rounded-[24px] '    
   initial="offscreen"
   whileInView="onscreen"
   viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the card is visible
   variants={cardVariants}
   custom={0}>
   
    <img src={heart} className='w-40' />

   </motion.div>

   <div className='green  w-[80vw] h-[200px] mx-auto green-bg  rounded-[24px] z-60' />

 

   </motion.div>


    </section>
  )
}

export default Newmenu