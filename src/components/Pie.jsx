import { motion } from 'framer-motion';
import React from 'react';
import { avacado, cake, heart } from '../assets';
import styles from '../style';

const Pie = () => {
  // SVG Path animation variants
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
        delay: 1,
   
        ease: 'easeInOut',
      },
    },
  };

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
          className="text-[5vw] pop-medium  w-[300px] items-center justify-center flex mx-auto  mt-10 text-white"
         
        >
            Pie
          <motion.img src={cake} className="w-40 " alt="heart"  initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          style={{ originY: '100%' }}/>
        </motion.div>

        {/* Optional Background Element (Commented Out) */}
        {/* <div className='green w-[80vw] h-[200px] mx-auto green-bg rounded-[24px] z-60' /> */}
        <svg width="318" height="89" viewBox="0 0 318 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 17.5C14.5416 23.5416 19.5129 29.8504 28.6667 30.3889C33.7535 30.6881 38.9361 30.5854 44.0278 30.4722C52.2765 30.2889 58.1418 27.1694 64.8333 22.5C68.2777 20.0965 71.1066 17.3675 74.2222 14.5833C75.9623 13.0284 78.0086 10.8675 80.2778 10.1111C82.0473 9.52126 83.3669 8.20463 85.0278 7.5C87.1765 6.58842 89.6583 6.66798 91.9167 6.19444C93.9578 5.76646 95.9156 5.01083 97.9444 4.52778C102.904 3.34694 106.871 2 112.028 2C117.586 2 122.601 4.00332 127.889 5.47222C128.993 5.77901 129.382 6.05391 130.111 6.94444C130.111 6.94444 134.667 9.28622 136.993 10.1111C140.164 11.2352 142.075 12.925 145.167 14.25C148.761 15.7904 151.694 18.4383 155.056 20.3889C158.489 22.3811 162.953 23.1085 166.778 24.1111C168.957 24.6823 170.848 25.3697 172.778 26.4722C174.883 27.675 178.212 27.315 180.5 27.7222C190.11 29.4329 200.537 33.5294 209.944 29.2222C212.192 28.1931 214.144 26.6001 216.222 25.2778C218.704 23.6987 221.625 22.6977 224.167 21.1111C229.085 18.0411 229.567 16.7576 235 15C235 15 241.481 11.7749 242.972 10.8056C246.402 8.57618 251.935 7.38541 255.944 7.11111C260.658 6.78858 267.209 6.03634 271.861 7.25C276.421 8.43958 280.543 12.2473 284.389 14.8889C287.622 17.1093 289.917 20.2874 292.583 23.1111C297.341 28.1485 304.362 32.9414 311.25 34.4722C313.02 34.8656 314.627 34.4155 316 33.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M8.5 48.5C12.0042 49.5012 15.4462 52.6228 18.75 54.25C26.2219 57.9302 35.5961 58.3312 43.75 56.9722C46.7468 56.4728 49.4677 55.6216 52.1111 54.1111C56.7307 51.4714 61.3379 49.2437 66.1389 46.9722C70.1799 45.0604 73.5228 42.2561 77.2778 39.8889C79.9213 38.2223 83.0614 37.5993 86.0556 36.8333C89.8903 35.8523 94.5064 36.5 98.4444 36.5C101.76 36.5 105.391 36.1156 108.639 36.8889C111.473 37.5637 114.148 39.3701 116.667 40.7778C125.923 45.9506 135.472 51.3166 145.167 55.5556C157.113 60.7787 170.09 63.2566 183.111 63.5C190.723 63.6423 196.613 62.8317 203.667 59.7222C211.198 56.4018 218.432 51.3655 224 45.3333C226.309 42.832 229 41.5833 234.25 40.5C239 36.8889 242 37.3412 245.05 36.8889C250.175 36.1289 254.015 38.0328 259.139 38.8333C263.276 39.4798 267.574 40.2697 271.556 41.5833C275.498 42.8841 278.914 45.296 282.556 47.2222C285.364 48.7077 288.658 49.6188 291.278 51.4167C294.08 53.3398 295.881 55.7614 299.333 56.6111C304.376 57.8523 309.04 58.4173 314 57" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M2 75.5C8.63591 75.5 15.1323 76.9515 21.7778 77C26.6864 77.0358 31.4999 76.8923 36.2778 75.6111C43.63 73.6396 49.8118 69.2034 56.6667 66.1389C60.6486 64.3587 64.9655 63.5405 68.9444 61.75C71.9152 60.4132 74.7321 59.2842 78 59C82.3139 58.6249 86.3017 58.3102 90.5556 59C106.257 61.5461 121.219 66.2065 135.694 72.8056C143.818 76.5091 152.855 78.5364 161.472 80.75C167.469 82.2906 172.833 86.2438 179 86.6667C183.808 86.9964 188.516 86.6667 193.333 86.6667C196.628 86.6667 201.821 84.46 204.972 83.2222C208.377 81.8845 208.189 80.75 215.333 75.5C219 72.8056 221.357 72.9051 225.75 69.7222C228.5 67.7297 234.91 66.0117 238.389 65.5C243.608 64.7324 249.066 64.829 254.333 65.0278C260.478 65.2597 266.07 68.7739 272.167 69.7222C274.95 70.1552 276.638 71.8494 279.111 73.1111C285.083 76.1582 291.93 77.9731 298.222 80.1667C303.883 82.1401 308.627 82 314.5 82" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>



        {/* card 1 */}
        <div className={`${styles.flexCenter} h-[16vh]`}>
       <motion.button className='pink text-white md:w-[30vw] w-[50vw]  h-[80px]   text-[32px] mt-1 pop-medium neobutton'
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
