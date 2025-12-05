import React, { use, useEffect, useState } from "react";
import pic1 from "../assets/hero-slider-1.jpg";
import pic2 from "../assets/hero-slider-2.jpg";
import pic3 from "../assets/hero-slider-3.jpg";
import separator from "../assets/separator.svg";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "../Components/PrimaryButton";
import "./font.css";
function Home() {
  const items = [
    {
      title: "TRADITIONAL & HYGIENE",
      subtitle: "For the love of delicious food",
      background: pic1,
    },
    {
      title: "DELIGHTFUL EXPERIENCE",
      subtitle: "Flavors Inspired by the Seasons",
      background: pic2,
    },
    {
      title: "AMAZING & DELICIOUS",
      subtitle: "Where every flavor tells a story",
      background: pic3,
    },
  ];  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key={currentIndex}
      className="bg-cover  bg-center  bgZoomIn overflow-hidden  h-screen w-full flex flex-col justify-between items-center text-white px-8 py-12"
      style={{ backgroundImage: `url(${items[currentIndex].background})` }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative flex flex-col justify-between items-center text-center h-screen px-8 py-12 w-full"
        >
          <div className="flex flex-col items-center">
            <h4
              id="apply-dm_sans-font"
              className="font-bold text-[0.85rem] text-[hsl(38,61%,73%)] tracking-widest"
            >
              {items[currentIndex].title}
            </h4>

            <img src={separator} className="w-[7.5rem] h-[3.75rem] " />
          </div>

          <h1
            className="text-[2rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] w-11/12 md:w-3/4 lg:w-2/3 flex items-center justify-center p-2 sm:p-4"
            id="apply-forum-font"
          >
            {items[currentIndex].subtitle}
          </h1>

          <span
            id="apply-dm_sans-font"
            className="font-semibold text-[20px] mb-[0.625rem] mt-[0.625rem]"
          >
            Come with family & feel the joy of mouthwatering food
          </span>

          <PrimaryButton content="VIEW OUR MENU" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
