import { delay, motion } from 'framer-motion';
import { love } from '../assets';
import styles from '../style';

const TextArea = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
     
        staggerChildren: 0.5, // Stagger the h1 tags instead of letters
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },  // Start below with opacity 0
    visible: {opacity: 1, y: 0, scale: [1,2,2,1],
        transition: {
          
            duration: 1, 
            delay: 1,
            // scale: { type: "bounce", stiffness: 200, damping: 10 }
        }
     },  
    // Fade in and move up
    
  };

  return (
    <section className={`${styles.flexCenter}`}>


       

    <motion.div
      className="md:mt-10 mt-10 "
      variants={container}
      initial="hidden"
      animate="visible"
    >
    
      <motion.h1
        className="flex items-center justify-center pop-medium md:text-[8vw] text-[14vw] text-white md:mt-0 mt-8 text"
        variants={child}
       
      >
        
        Exquisite!
      </motion.h1>
      <div className=''>
        <img src={love} alt="" className='w-28 ' />
         </div>

      <motion.h1
        className="flex items-center justify-center pop-medium md:text-[8vw] text-[12vw] text-white text"
        variants={child}
      >
        Delightful!
      </motion.h1>
    </motion.div>
    </section>
  );
};

export default TextArea;
