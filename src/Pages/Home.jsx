import React, { use, useEffect, useState } from 'react'
import pic1 from '../assets/hero-slider-1.jpg'
import pic2 from '../assets/hero-slider-2.jpg'
import pic3 from '../assets/hero-slider-3.jpg'
import separator from '../assets/separator.svg'
import { motion, AnimatePresence } from 'framer-motion';
import './font.css'
function Home() {
    const items =[
        {title : "Tradational & Hygine" , subtitle : "For the love of delicious food" , background: pic1},
        {title : "delightful experience" , subtitle : "Flavors Inspired by the Seasons" , background : pic2},
        {title : "amazing & delicious" , subtitle : "Where every flavor tells a story" , background : pic3},  
    ]
    const [currentIndex , setCurrentIndex] = useState(0)

    

      useEffect(() => {
         const interval = setInterval(()=>{
          setCurrentIndex(prevIndex => prevIndex === 2 ? 0 : prevIndex +1)
         } , 5000 );
         return () => clearInterval(interval);
      } ,[]);


  

  return (

    <div
      key={currentIndex}
      class="bg-cover bg-center bgZoomIn overflow-hidden h-[100vh] w-full flex flex-col justify-center items-center text-white overflow-hidden" 
      style={{ backgroundImage: `url(${items[currentIndex].background})` }}>
     
      <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex flex-col justify-center items-center text-center h-[100vh] w-full"
          >
            <h4 id='apply-dm_sans-font' className='font-bold text-[hsl(38,61%,73%)] tracking-widest'>
              {items[currentIndex].title}
            </h4>

            <img src={separator} className='w-[120px] h-[60px] ' />

            <h1 className="text-[8rem] w-[60%] h-[40%] flex items-center justify-center p-[2.5%]" id='apply-forum-font'>
              {items[currentIndex].subtitle} 
            </h1>

            <span id='apply-dm_sans-font' className='font-semibold text-[20px] mb-[10px]'>
              Come with family & feel the joy of mouthwatering food
            </span>

            <button id='apply-dm_sans-font' className='w-[240px] h-[57px] bg-transparent  font-bold text-[12px] tracking-[3px] border-[hsl(38,61%,73%)] border-2 mt-[30px] hover:bg-[hsl(38,61%,73%)] hover:text-black hover:cursor-pointer transition-all duration-300'>
              VIEW OUT MENU
            </button>
            
          </motion.div> 
        </AnimatePresence>
    </div>
  )
}

export default Home