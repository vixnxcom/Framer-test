import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { back, emoji, forward, heart, petal, starr } from "../assets";
import Clip from "./Clip";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, content: "THE BEST PRODUCTS ON THE MARKET. WAS REALLY SOLD AFTER MY FIRST ORDER", image: emoji, name: 'Jheny Victory' },
    { id: 2, content: "REALLY NUTRITIOUS ADDITION TO MY DIET PLAN", image: emoji ,  name: 'Frederick .k'},
    { id: 3, content: "ABSOLUTELY TASY MEALS I COULDN'T STOP! THEIR SERVICE IS OVER THE TOP TOO.", image: emoji,  name: 'Rosa Diego'},
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full md:h-[200vh] h-[60vh] overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bottom-0 transform -translate-y-1/2 w-24 p-2  text-white z-20 mt-10"
      >
        <img src={forward} alt="" />
      </button>

      <div className="relative w-[98vw] mx-auto md:h-[20vh] h-full flex justify-center items-center">
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
                  className="absolute w-full md:h-auto h-full flex flex-col items-center"
                >
                  {/* <img
                    src={slide.image}
                    alt={slide.content}
                    className="w-20 mb-20  transition-transform duration-300 hover:scale-105 " 
                  /> */}
                  <div className="text-white mx-auto md:text-[2vw] text-[5vw] mt-24 relative z-10 text-shadow  bg-opacity-100 md:w-[470px]
                   w-[320px]  text-center neue-medium h-[11vh] ">
                    {slide.content}
                  </div>
                 <div className="absolute  top-6 h-[40vh]">
                  <Clip />
                 </div>

                  <img src={starr} alt="" className="w-[33.3%] mb-10" />

                  <div className=" mt-20 text items-center justify-center mx-auto z-10 text-white text-[7vw] flex flex-col  pop-medium ">
                    {slide.name}
                    <img src={petal} alt="" className="w-10"/>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-0 transform -translate-y-1/2 w-24 p-2   text-white z-20"
      >
        <img src={back} alt="" />
      </button>
    </div>
  );
};

export default Slider;
