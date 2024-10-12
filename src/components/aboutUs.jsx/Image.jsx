import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { about } from "../../assets";

export default function Image() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className=""
      animate={isInView ? {
        scale: [0.1, 1], // Start small and zoom to normal size
        rotate: [0, 360], // Rotate from 0 to 360 degrees
      } : {}}
      transition={{
        duration: 2, // Total animation duration
        ease: "easeInOut", // Smooth easing
      }}
    >
      <img src={about} alt="about" className="w-full h-auto" />
    </motion.div>
  );
}
