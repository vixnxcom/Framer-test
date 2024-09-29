import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const svgVariants = {
  hidden: {
    rotate: 180,
    opacity: 0,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 1, delay: 2.7, },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2.2,
      delay: 3.2,
      ease: 'easeInOut',
    },
  },
};

const Bag = () => {
  const [svgAnimationComplete, setSvgAnimationComplete] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <div
      ref={ref} // Ref to track when this div enters the viewport
      className="w-full md:h-[50vh] h-[20vh] mt-2 flex flex-col items-center justify-center "
    >
      {inView && (
        <>
          <motion.svg
            width="60"
            height="50"
            viewBox="0 0 90 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[40vh]"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setSvgAnimationComplete(true)}
          >
            <circle cx="46.5" cy="32" r="31.5" stroke="#fff" />
            <motion.path
              d="M1.06359 79.5L6.94359 30.5H86.0338L89.4638 79.5H1.06359Z"
              fill="#ff0080"
              stroke="yellow"
              variants={pathVariants}



            />
          </motion.svg>

          {/* Display text after SVG animation completes */}
          {svgAnimationComplete && (
            <motion.h2
              className="mt-4 text-[5vw] pop-thin text-white text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} 
            >
             Shop Today!
            </motion.h2>
          )}
        </>
      )}
    </div>
  );
};

export default Bag;
