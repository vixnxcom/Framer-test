import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { back, emoji, forward, heart, petal, starr } from "../assets";
import Clip from "./Clip";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, content: "THE BEST PRODUCTS ON THE MARKET. WAS REALLY SOLD AFTER MY FIRST ORDER", image: emoji, name: 'Jheny Victory' },
    { id: 2, content: "REALLY NUTRITIOUS ADDITION TO MY DIET PLAN", image: emoji , name: 'Frederick .k'},
    { id: 3, content: "ABSOLUTELY TASTY MEALS I COULDN'T STOP! THEIR SERVICE IS OVER THE TOP TOO.", image: emoji, name: 'Rosa Diego'},
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full xl:h-[70vh] lg:h-[80vh] md:h-[100vh] h-[62vh] overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bottom-0 transform -translate-y-1/2 xl:w-12 lg:w-16 md:w-20 w-24 p-2 text-white z-20 mt-10"
      >
        <img src={forward} alt="Previous Slide" />
      </button>

      <div className="relative w-[98vw] mx-auto xl:h-[30vh] lg:h-[40vh] md:h-[50vh] h-full flex justify-center items-center">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ y: 300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute w-full xl:h-auto h-full flex flex-col items-center"
                >
                  <div className="text-white mx-auto xl:text-[0.8vw] lg:text-[1.5vw] md:text-[2vw] text-[5vw] mt-24 relative z-10 text-shadow bg-opacity-100 xl:w-[500px] lg:w-[470px] md:w-[470px] sm:w-[600px] w-[320px] text-center neue-medium xl:h-[15vh] lg:h-[20vh] md:h-[25vh] h-[11vh]">
                    {slide.content}
                  </div>

                  <div className="absolute md:top-2 top-6 md:h-[50vh] md:w-[40vw] z-50 "> {/* Increased width and height */}
                   <Clip />
                </div>


                  <img src={starr} alt="Star" className="xl:w-[20%] lg:w-[25%] md:w-[30%] w-[33.3%] mb-10 z-40" />

                  <div className="xl:h-[20vh] lg:h-[30vh] md:h-[40vh] md:mt-44 sm:mt-20 mt-32 text items-center justify-center mx-auto z-10 text-white xl:text-[2.5vw] lg:text-[4vw] md:text-[5vw] text-[7vw] flex flex-col pop-medium">
                    {slide.name}
                    <img src={petal} alt="Petal" className="xl:w-4 lg:w-6 md:w-8 w-10" />
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-0 transform -translate-y-1/2 xl:w-12 lg:w-16 md:w-20 w-24 p-2 text-white z-20"
      >
        <img src={back} alt="Next Slide" />
      </button>
    </div>
  );
};

export default Slider;
