import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heart, sunn, taco } from "../../assets"; // Ensure this path is correct

const Taco3DScroll = () => {
  const { scrollYProgress } = useScroll();

  // Transform the scroll progress into scale and rotation values
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2.5]); // Scale from 0.5 to 2.5
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Fade-in effect for the text
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Fade in from 0 to 1

  return (
    <div className="taco-container relative flex items-center">
      <motion.img
        src={taco} // Use your taco image from assets
        alt="Taco"
        style={{ scale, rotateZ }} // Animate scale and rotation based on scroll
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className="taco-image"
      />
      {/* <motion.h1
        className="taco-text ml-2 pop-medium text-[10vw] text-white" 
        style={{ opacity }}
        transition={{ duration: 0.5 }} 
      >
        Tacos
      </motion.h1> */}
      <motion.img
        className="taco-text ml-2 pop-medium w-20 text-white" 
      src={heart}
      />
        
     
    </div>
  );
};

export default function App() {
  return (
    <div className="app-container">
      <Taco3DScroll />
    </div>
  );
}
