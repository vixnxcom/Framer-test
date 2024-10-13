import { motion } from 'framer-motion';
import React from 'react'
import { cake } from '../assets';

const Svganim = () => {

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
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div>
          {/* Optional Background Element (Commented Out) */}
         {/* <div className='green w-[80vw] h-[200px] mx-auto green-bg rounded-[24px] z-60' />  */}
        {/* <motion.svg width="318" height="89" viewBox="0 0 318 89" fill="none" xmlns="http://www.w3.org/2000/svg">
     <motion.path d="M8.5 17.5C14.5416 23.5416 19.5129 29.8504 28.6667 30.3889C33.7535 30.6881 38.9361 30.5854 44.0278 30.4722C52.2765 30.2889 58.1418 27.1694 64.8333 22.5C68.2777 20.0965 71.1066 17.3675 74.2222 14.5833C75.9623 13.0284 78.0086 10.8675 80.2778 10.1111C82.0473 9.52126 83.3669 8.20463 85.0278 7.5C87.1765 6.58842 89.6583 6.66798 91.9167 6.19444C93.9578 5.76646 95.9156 5.01083 97.9444 4.52778C102.904 3.34694 106.871 2 112.028 2C117.586 2 122.601 4.00332 127.889 5.47222C128.993 5.77901 129.382 6.05391 130.111 6.94444C130.111 6.94444 134.667 9.28622 136.993 10.1111C140.164 11.2352 142.075 12.925 145.167 14.25C148.761 15.7904 151.694 18.4383 155.056 20.3889C158.489 22.3811 162.953 23.1085 166.778 24.1111C168.957 24.6823 170.848 25.3697 172.778 26.4722C174.883 27.675 178.212 27.315 180.5 27.7222C190.11 29.4329 200.537 33.5294 209.944 29.2222C212.192 28.1931 214.144 26.6001 216.222 25.2778C218.704 23.6987 221.625 22.6977 224.167 21.1111C229.085 18.0411 229.567 16.7576 235 15C235 15 241.481 11.7749 242.972 10.8056C246.402 8.57618 251.935 7.38541 255.944 7.11111C260.658 6.78858 267.209 6.03634 271.861 7.25C276.421 8.43958 280.543 12.2473 284.389 14.8889C287.622 17.1093 289.917 20.2874 292.583 23.1111C297.341 28.1485 304.362 32.9414 311.25 34.4722C313.02 34.8656 314.627 34.4155 316 33.5" 
     stroke="white" stroke-width="3" stroke-linecap="round"
     variants={pathVariants}
     initial="hidden"
     animate='visible'

   
     />
      <motion.path d="M8.5 48.5C12.0042 49.5012 15.4462 52.6228 18.75 54.25C26.2219 57.9302 35.5961 58.3312 43.75 56.9722C46.7468 56.4728 49.4677 55.6216 52.1111 54.1111C56.7307 51.4714 61.3379 49.2437 66.1389 46.9722C70.1799 45.0604 73.5228 42.2561 77.2778 39.8889C79.9213 38.2223 83.0614 37.5993 86.0556 36.8333C89.8903 35.8523 94.5064 36.5 98.4444 36.5C101.76 36.5 105.391 36.1156 108.639 36.8889C111.473 37.5637 114.148 39.3701 116.667 40.7778C125.923 45.9506 135.472 51.3166 145.167 55.5556C157.113 60.7787 170.09 63.2566 183.111 63.5C190.723 63.6423 196.613 62.8317 203.667 59.7222C211.198 56.4018 218.432 51.3655 224 45.3333C226.309 42.832 229 41.5833 234.25 40.5C239 36.8889 242 37.3412 245.05 36.8889C250.175 36.1289 254.015 38.0328 259.139 38.8333C263.276 39.4798 267.574 40.2697 271.556 41.5833C275.498 42.8841 278.914 45.296 282.556 47.2222C285.364 48.7077 288.658 49.6188 291.278 51.4167C294.08 53.3398 295.881 55.7614 299.333 56.6111C304.376 57.8523 309.04 58.4173 314 57" 
      stroke="black" stroke-width="3" stroke-linecap="round"/>
      <motion.path d="M2 75.5C8.63591 75.5 15.1323 76.9515 21.7778 77C26.6864 77.0358 31.4999 76.8923 36.2778 75.6111C43.63 73.6396 49.8118 69.2034 56.6667 66.1389C60.6486 64.3587 64.9655 63.5405 68.9444 61.75C71.9152 60.4132 74.7321 59.2842 78 59C82.3139 58.6249 86.3017 58.3102 90.5556 59C106.257 61.5461 121.219 66.2065 135.694 72.8056C143.818 76.5091 152.855 78.5364 161.472 80.75C167.469 82.2906 172.833 86.2438 179 86.6667C183.808 86.9964 188.516 86.6667 193.333 86.6667C196.628 86.6667 201.821 84.46 204.972 83.2222C208.377 81.8845 208.189 80.75 215.333 75.5C219 72.8056 221.357 72.9051 225.75 69.7222C228.5 67.7297 234.91 66.0117 238.389 65.5C243.608 64.7324 249.066 64.829 254.333 65.0278C260.478 65.2597 266.07 68.7739 272.167 69.7222C274.95 70.1552 276.638 71.8494 279.111 73.1111C285.083 76.1582 291.93 77.9731 298.222 80.1667C303.883 82.1401 308.627 82 314.5 82" 
      stroke="black" stroke-width="3" stroke-linecap="round"    variants={pathVariants}  initial="hidden"
     animate='visible'
     

      
      />
     </motion.svg> */}
     <motion.svg width="308" height="75" viewBox="0 0 308 75" fill="none" xmlns="http://www.w3.org/2000/svg" 
      >
<motion.path d="M2.25006 19.75C6.80448 23.6143 11.5274 26.551 17.1166 28C19.5881 28.6408 22.1926 29.3611 24.9382 30.0556C27.6838 30.75 28.6538 30.75 31.4206 30.75C32.5689 30.75 34.7957 30.75 37.6886 30.75C41.6664 30.75 43.4745 30.0556 43.4745 30.0556C43.4745 30.0556 46.0058 30.0556 51.1622 26.5C52.531 24.8225 56.8546 19.8611 56.8546 19.8611C56.8546 19.8611 58.3008 18.75 61.3143 17.2778C64.3278 15.8056 64.1938 16.4861 65.7742 15.7222C67.3546 14.9584 68.0645 14.75 68.0645 14.75L76.7969 12.2222C76.7969 12.2222 82.4835 10.75 86.0918 10.75C89.0379 10.75 91.6815 10.25 94.6099 10.25C97.985 10.25 101.36 10.25 104.735 10.25C108.378 10.25 109.643 9.84184 113.146 10.75C114.799 11.1786 119.665 12.3684 121.236 13.0278C122.827 13.6958 123.823 14.9732 125.388 15.7222C128.898 17.4023 131.177 20.7432 134.602 22.25C135.877 22.8107 137.197 23.8472 138.459 24.25C139.589 24.6106 141.352 25.9992 142.375 26.5C143.79 27.193 144.388 27.6492 145.692 28.25C146.973 28.8403 148.972 29.6309 150.326 29.8611C157.982 31.1627 159.527 32.5 167.389 32.5C169.422 32.5 176.639 30.2739 178.505 29.4445C179.958 28.7987 179.684 29.4445 182.917 26.5C184.909 26.2705 188.604 23.3028 190.253 22.25C191.928 21.1814 191.026 20.9231 192.702 19.8611C194.325 18.8327 195.53 17.2295 197.524 16.25C199.507 15.2759 200.039 14.502 201.381 12.75C204.515 10.9167 207.296 8.85874 209.792 7.5278C213.894 5.34012 218.339 4.54412 222.971 4.25002C224.403 4.1591 226.313 3.97435 227.685 3.50002C230.098 2.66609 232.297 3.0731 234.81 2.75002C240.011 2.08145 233.494 2.75002 247.427 2.75001C250.668 4.00001 257.951 4.14757 260.927 5.75C263.237 6.99346 266.548 9.34466 268.615 10.9167C269.348 11.4741 270.323 11.5504 271.079 12.1389C272.117 12.946 272.612 14.1141 273.812 14.75C276.055 15.939 278.759 18.4192 280.642 20.2222C282.024 21.5453 284.581 23.2987 286.241 24.25C290.391 26.6287 293.201 30.4859 298.294 30.75C301.014 30.891 302.634 30.75 306.25 29.8611" 
stroke="#fff" stroke-width="3" stroke-linecap="round"
variants={pathVariants}
      initial="hidden"
      animate='visible'/>
<path d="M2.25006 40C6.80448 43.8643 11.5274 46.801 17.1166 48.25C19.5881 48.8908 22.1926 49.6111 24.9382 50.3056C27.6838 51 28.6538 51 31.4206 51C32.5689 51 34.7957 51 37.6886 51C41.6664 51 43.4745 50.3056 43.4745 50.3056C43.4745 50.3056 46.0058 50.3056 51.1622 46.75C52.531 45.0725 56.8546 40.1111 56.8546 40.1111C56.8546 40.1111 58.3008 39 61.3143 37.5278C64.3278 36.0556 64.1938 36.7361 65.7742 35.9722C67.3546 35.2084 68.0645 35 68.0645 35L76.7969 32.4722C76.7969 32.4722 82.4835 31 86.0918 31C89.0379 31 91.6815 30.5 94.6099 30.5C97.985 30.5 101.36 30.5 104.735 30.5C108.378 30.5 109.643 30.0918 113.146 31C114.799 31.4286 119.665 32.6184 121.236 33.2778C122.827 33.9458 123.823 35.2232 125.388 35.9722C128.898 37.6523 131.177 40.9932 134.602 42.5C135.877 43.0607 137.197 44.0972 138.459 44.5C139.589 44.8606 141.352 46.2492 142.375 46.75C143.79 47.443 144.388 47.8992 145.692 48.5C146.973 49.0903 148.972 49.8809 150.326 50.1111C157.982 51.4127 159.527 52.75 167.389 52.75C169.422 52.75 176.639 50.5239 178.505 49.6945C179.958 49.0487 179.684 49.6945 182.917 46.75C184.909 46.5205 188.604 43.5528 190.253 42.5C191.928 41.4314 191.026 41.1731 192.702 40.1111C194.325 39.0827 195.53 37.4795 197.524 36.5C199.507 35.5259 200.039 34.752 201.381 33C204.515 31.1667 207.296 29.1087 209.792 27.7778C213.894 25.5901 218.339 24.7941 222.971 24.5C224.403 24.4091 226.313 24.2244 227.685 23.75C230.098 22.9161 232.297 23.3231 234.81 23C240.011 22.3315 233.494 23 247.427 23C250.668 24.25 257.951 24.3976 260.927 26C263.237 27.2435 266.548 29.5947 268.615 31.1667C269.348 31.7241 270.323 31.8004 271.079 32.3889C272.117 33.196 272.612 34.3641 273.812 35C276.055 36.189 278.759 38.6692 280.642 40.4722C282.024 41.7953 284.581 43.5487 286.241 44.5C290.391 46.8787 293.201 50.7359 298.294 51C301.014 51.141 302.634 51 306.25 50.1111" stroke="#55f606" stroke-width="3" stroke-linecap="round"/>
<motion.path d="M2.25006 60.25C6.80448 64.1143 11.5274 67.051 17.1166 68.5C19.5881 69.1408 22.1926 69.8611 24.9382 70.5556C27.6838 71.25 28.6538 71.25 31.4206 71.25C32.5689 71.25 34.7957 71.25 37.6886 71.25C41.6664 71.25 43.4745 70.5556 43.4745 70.5556C43.4745 70.5556 46.0058 70.5556 51.1622 67C52.531 65.3225 56.8546 60.3611 56.8546 60.3611C56.8546 60.3611 58.3008 59.25 61.3143 57.7778C64.3278 56.3056 64.1938 56.9861 65.7742 56.2222C67.3546 55.4584 68.0645 55.25 68.0645 55.25L76.7969 52.7222C76.7969 52.7222 82.4835 51.25 86.0918 51.25C89.0379 51.25 91.6815 50.75 94.6099 50.75C97.985 50.75 101.36 50.75 104.735 50.75C108.378 50.75 109.643 50.3418 113.146 51.25C114.799 51.6786 119.665 52.8684 121.236 53.5278C122.827 54.1958 123.823 55.4732 125.388 56.2222C128.898 57.9023 131.177 61.2432 134.602 62.75C135.877 63.3107 137.197 64.3472 138.459 64.75C139.589 65.1106 141.352 66.4992 142.375 67C143.79 67.693 144.388 68.1492 145.692 68.75C146.973 69.3403 148.972 70.1309 150.326 70.3611C157.982 71.6627 159.527 73 167.389 73C169.422 73 176.639 70.7739 178.505 69.9445C179.958 69.2987 179.684 69.9445 182.917 67C184.909 66.7705 188.604 63.8028 190.253 62.75C191.928 61.6814 191.026 61.4231 192.702 60.3611C194.325 59.3327 195.53 57.7295 197.524 56.75C199.507 55.7759 200.039 55.002 201.381 53.25C204.515 51.4167 207.296 49.3587 209.792 48.0278C213.894 45.8401 218.339 45.0441 222.971 44.75C224.403 44.6591 226.313 44.4744 227.685 44C230.098 43.1661 232.297 43.5731 234.81 43.25C240.011 42.5815 233.494 43.25 247.427 43.25C250.668 44.5 257.951 44.6476 260.927 46.25C263.237 47.4935 266.548 49.8447 268.615 51.4167C269.348 51.9741 270.323 52.0504 271.079 52.6389C272.117 53.446 272.612 54.6141 273.812 55.25C276.055 56.439 278.759 58.9192 280.642 60.7222C282.024 62.0453 284.581 63.7987 286.241 64.75C290.391 67.1287 293.201 70.9859 298.294 71.25C301.014 71.391 302.634 71.25 306.25 70.3611" 
stroke="#55f606" stroke-width="3" stroke-linecap="round"
variants={pathVariants}
      initial="hidden"
      animate='visible'/>
</motion.svg>




    </div>
  )
}

export default Svganim