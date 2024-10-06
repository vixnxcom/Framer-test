import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import Navvbarr from "./Navvbarr";

const EgNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Panel animation variants
  const panelVariants = {
    open: { x: 0, transition: { duration: 1, ease: "easeInOut" } },
    closedLeft: { x: "-100vw", transition: { duration: 1.5, delay: 0.9, ease: "easeInOut" } },
    closedRight: { x: "100vw", transition: { duration: 1.5, delay: 0.9, ease: "easeInOut" } },
  };

  // Menu parent animation variants (staggerChildren added here)
  const menuVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5, // Keep your preferred delay between items
        delay: 1,             // Delay before the items start to appear
        delayChildren: 1.5,   // Delay before the staggering starts
      },
    },
  };

  // Individual menu item animation variants (retain your transitions)
  const itemVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring', bounce: 2, stiffness: 600 } },
  };

  // Handle menu item selection
  const handleSelection = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav className=" nav-section w-full   z-[999]">
      {/* Main Navbar */}
        {/* logo / text */}
        <div className="absolute top-4 left-2 flex flex-row">
           <Navvbarr />
            </div>
          <motion.button
            className="absolute top-0 right-8 w-28 text-black   mt-1 " // Close button inside the menu
            onClick={() => setIsOpen(!isOpen)} // menu open on button click
          >
           <motion.img src={menu} alt=""   initial={{rotate: 180, opacity: 0,  scale: 1 }} // Starts at normal size
          animate={{rotate: 0, opacity: 1,  scale: [1, 1.5, 0.9, 1] }}
          transition={{
            delay: 3, duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 7}}
          
         
           />

          </motion.button>
   
      
        
        {/* logo / text */}


      {/* Split screen effect */}
      <motion.div
        className={`fixed inset-0 z-40 bg-blue-400 flex justify-between ${isOpen ? "block" : "hidden"} `} transition={{delay: 2, duration: 2}}
      >
        {/* Left Panel */}
        <motion.div
          className="w-1/2 h-full yellow relative flex items-start justify-end"
          initial="open"
          animate={isOpen ? "closedLeft" : "open"}
          variants={panelVariants}
        />
        {/* Right Panel */}
        <motion.div
          className="w-1/2 h-full pink relative"
          initial="open"
          animate={isOpen ? "closedRight" : "open"}
          variants={panelVariants}
        />
      </motion.div>

      {/* Menu Items after Split */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 green bg-opacity-90 flex flex-col items-center justify-center text-white"
          initial="hidden"
          animate="visible"
          variants={menuVariants} // Staggered animation applied to the parent div
        >
            <div className="absolute top-4 left-2 flex flex-row">
            <img src={logo} className="w-16"/>
            <h1 className="pop-bold text-4xl mx-1 mt-4 texxtt">
             Churros
            </h1>
            </div>
          <button
            className="absolute top-0 right-8 w-24 text-white  rounded-full   z-50" // Close button inside the menu
            onClick={() => setIsOpen(false)} // Close on button click
          >
           
            <img src={close} className="w-24" />
            &times;
          </button>
          <motion.ul className="space-y-8 text-5xl texxt">
            <motion.li variants={itemVariants}>
              <Link
                to="/home"
                onClick={handleSelection} // Close menu on item click
                className="hover:text-gray-400 neue-medium mx-2 font-bold"
              >
                HOME
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/menu"
                onClick={handleSelection}
                className="hover:text-gray-400 neue-medium mx-2 font-bold"
              >
                MENU
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/about"
                onClick={handleSelection}
                className="hover:text-gray-400 neue-medium mx-2 font-bold"
              >
                ABOUT
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/contact"
                onClick={handleSelection}
                className="hover:text-gray-400 neue-medium mx-2 font-bold"
              >
                CONTACT
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </nav>
  );
};

export default EgNav;
