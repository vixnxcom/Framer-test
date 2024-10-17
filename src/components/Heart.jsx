import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heart, heartt } from '../assets'; // Correct path to your heart image

const RandomHearts = () => {
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress * 100, { stiffness: 100, damping: 30 });

  // Random vertical positions for each heart
  const [leftHeartTop, setLeftHeartTop] = useState('10%');
  const [rightHeartTop, setRightHeartTop] = useState('10%');

  useEffect(() => {
    const randomVerticalPosition = () => {
      const position = Math.random() * 80 + 10 + '%'; // Between 10% and 90%
      setLeftHeartTop(position); // Set random position for left heart
      setRightHeartTop(position); // Set random position for right heart
    };

    randomVerticalPosition(); // Set initial random vertical positions
  }, []);

  return (
    <>
      {/* Left Heart */}
      <motion.div
        style={{
          position: 'fixed', // Fixed position to stay in view while scrolling
          top: leftHeartTop, // Random vertical position
          left: '15%', // Position to the left
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [0, 1.5, 1], // Balloon pop-up effect
          y: [-30, 0, 30, 0], // Float effect
        }}
        transition={{
            delay: 5.5,
          duration: 3, // Duration for smooth float
          ease: 'easeInOut',
          repeat: Infinity, // Infinite repeat for floating effect
          repeatType: 'reverse', // Back-and-forth floating
          repeatDelay: 2,
        }}
      >
        {/* Pixel heart image */}
        <img src={heartt} alt="Pixel Heart" className="w-[15%]" />
      </motion.div>

      {/* Right Heart */}
      <motion.div
        style={{
          position: 'fixed', // Fixed position to stay in view while scrolling
          top: rightHeartTop, // Random vertical position
          left: '85%', // Position to the right
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [0, 1.5, 1], // Balloon pop-up effect
          y: [-30, 0, 30, 0], // Float effect
        }}
        transition={{
          duration: 3, // Duration for smooth float
          ease: 'easeInOut',
          repeat: Infinity, // Infinite repeat for floating effect
          repeatType: 'reverse', // Back-and-forth floating
          repeatDelay: 2,
          delay: 7.5, // Delay the right heart animation by 1 second
        }}
      >
        {/* Pixel heart image */}
        <img src={heart} alt="Pixel Heart" className="w-[13%]" />
      </motion.div>
    </>
  );
};

export default RandomHearts;
