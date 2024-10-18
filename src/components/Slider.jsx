import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { back, emoji, forward, heart, petal } from "../assets";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, content: "THE BEST PRODUCTS ON THE MARKET. WAS REALLY SOLD AFTER MY FIRST ORDER", image: emoji },
    { id: 2, content: "REALLY NUTRITIOUS ADDITION TO MY DIET PLAN", image: emoji },
    { id: 3, content: "ABSOLUTELY TASY MEALS I COULDN'T STOP! THEIR CUSTOMER SERVICE IS OVER THE TOP TOO.", image: emoji},
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[55vh] overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bottom-0 transform -translate-y-1/2 w-20 p-2  text-white z-20"
      >
        <img src={forward} alt="" />
      </button>

      <div className="relative w-full h-full flex justify-center items-center">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={slide.image}
                    alt={slide.content}
                    className="w-20 mb-20  transition-transform duration-300 hover:scale-105 " // Enhanced styles for the image
                  />
                  <div className="text-black mx-auto text-3xl mt-5 relative z-10 text-shadow  bg-opacity-50 md:w-[470px]  text-center neue-medium">
                    {slide.content}
                  </div>
                  <img src={petal} alt="" className="w-20" />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-0 transform -translate-y-1/2 w-20 p-2   text-white z-20"
      >
        <img src={back} alt="" />
      </button>
    </div>
  );
};

export default Slider;
