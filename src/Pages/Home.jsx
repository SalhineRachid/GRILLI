import React, { useState } from 'react'
import pic1 from '../assets/hero-slider-1.jpg'
import pic2 from '../assets/hero-slider-2.jpg'
import pic3 from '../assets/hero-slider-3.jpg'
function Home() {
    const items =[
        {title : "Tradational & Hygine" , subtitle : "For the love ofdelicious food" , background: pic1},
        {title : "delightful experience" , subtitle : "Flavors Inspired by the Seasons" , background : pic2},
        {title : "amazing & delicious" , subtitle : "Where every flavor tells a story" , background : pic3},  
    ]
    const [currentIndex , setCurrentIndex] = useState(0)


  return (
    <div
        class="bg-cover bg-center h-[100vh] w-full flex flex-col justify-center items-center text-white" 
        style={{ backgroundImage: `url(${items[currentIndex].background})` }}>
        <h4>{items[currentIndex].title}</h4>        
        <img />
        <h1>{items[currentIndex].subtitle} </h1>
        <span>Come with family & feel the joy of mouthwatering food</span>
        <button>VIEW OUT MENU</button>
    </div>
  )
}

export default Home