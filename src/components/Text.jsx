import { delay, motion } from 'framer-motion';
import { love } from '../assets';
import styles from '../style';

const TextArea = () => {

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
        delay: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

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
      className="md:mt-10 mt-11 "
      variants={container}
      initial="hidden"
      animate="visible"
    >
    
      <motion.h1
        className="flex items-center justify-center pop-medium md:text-[8vw] text-[14vw] text-white md:mt-0 mt-10 text"
        variants={child}
       
      >
        
        Exquisite!
      </motion.h1>

      <div className='h-[14vh]'>
<motion.svg width="173" height="200" viewBox="0 0 173 200" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-24 mx-1'>
<motion.path d="M44.25 166.5C42.8247 163.039 39.8607 159.885 37.9769 156.616C36.657 154.325 35.9542 151.981 34.9907 149.556C34.6962 148.814 34.0815 148.323 33.625 147.681C30.9595 143.927 28.5879 139.904 26.3333 135.898C15.7232 117.045 7.10526 96.3522 5.33796 74.5556C4.36001 62.4941 3.84954 48.1955 12.1435 38.4445C15.667 34.302 19.5259 30.3908 23.3704 26.5463C24.9781 24.9385 25.9079 24.6511 28 23.9537C31.3631 22.8327 34.3606 21.5749 37.9537 21.5C39.9381 21.4587 41.7978 21.1738 43.787 20.9908C48.6182 20.5463 53.8163 19.7209 58.2546 22.125C61.0465 23.6373 64.1273 25.0483 66.6574 26.963C68.717 28.5216 70.8211 30.3452 72.7222 32.1019C74.2522 33.5157 75.1176 35.4756 76.5648 36.963C78.0227 38.4614 78.4749 39.3984 78.8333 41.6389C79.0308 42.8731 79.8729 43.3633 80.1065 44.6482C80.4425 46.4963 82.013 48.0178 82.4907 49.8334C82.5625 50.1062 82.4841 51.5941 82.838 50.6898C83.4383 49.1557 83.5913 47.6694 83.8796 46.0834C84.3752 43.3575 86.7209 39.5032 86.8426 38.5834C86.9643 37.6636 89.6667 30.25 90.2598 29.7359C92.75 23.9537 92.0053 26.0418 94 22.125C95.2343 19.7013 97.5188 18.8525 99.0417 16.6158C100.543 14.4104 103.155 13.5996 104.806 11.5926C105.442 10.8194 105.555 10.1588 106.426 9.64817C111.478 6.68675 118.425 4 124 4C129.686 4 136.466 6.26163 141.981 7.47225C144.187 7.95641 145.755 10.3139 147.491 11.6158C149.331 12.996 151.15 13.8572 152.792 15.5972C155.865 18.8536 157.117 22.8719 159.759 26.2685C162.85 30.2422 164.683 35.8398 166.241 40.5741C168.06 46.1008 168.61 50.3867 168.417 56.0833C168.21 62.1673 167.337 70.5088 166.333 76.5926C164.996 84.6925 160.204 91.7207 157.884 99.625C157.052 102.462 156.782 103.971 154.968 106.199C151.212 110.811 147.923 115.963 144.597 120.898C141.421 125.612 136.842 129.769 132.676 133.537C127.308 138.392 121.248 143.801 114.667 147.009C107.678 150.416 101.377 155.381 94.7824 159.463C90.4223 162.162 85.9103 163.138 81.4722 165.759C75.7494 169.139 69.5132 172.25 64.2963 176.407C61.6878 178.486 59.1913 180.522 56.4722 182.472C52.1242 185.592 47.9327 188.874 43.463 191.87C42.4187 192.57 39.502 193.913 38.8333 195.25"
 stroke="white" stroke-width="8" stroke-linecap="round"
 variants={pathVariants}/>
</motion.svg>
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
