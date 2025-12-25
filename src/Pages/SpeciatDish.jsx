import React from "react";
import SpecialDishPic from "../assets/special-dish-banner.jpg";
import separator from "../assets/separator.svg";
import favIcon from "../assets/badge-1.png";
import shape4 from "../assets/shape-4.png";
import './font.css'
import PrimaryButton from "../Components/PrimaryButton";
function SpeciatDish() {
  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row bg-[#0E0D0C] gap-8 lg:gap-20" id="special">
      <img className="absolute w-24 sm:w-[12rem] h-48 sm:h-[25rem] right-0 top-40 sm:top-[20rem] z-0" src={shape4}/>
      <img className="relative w-full lg:w-1/2 h-64 lg:h-screen object-cover" src={SpecialDishPic} />
      <div className="relative w-full lg:w-1/2 p-4 lg:p-0 m-0 flex justify-center items-center">
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-baseline items-center lg:items-start gap-4">

          <div className="flex justify-center lg:justify-start items-center lg:items-start">
            <div className="w-8 sm:w-[2rem] h-20 sm:h-[5rem] m-0 p-0 flex justify-center lg:justify-start shrink-0 items-center lg:items-start">
              <img className="upDownMotion" src={favIcon}/>
            </div>    
          </div>
            
        
            <div className="flex flex-col items-center lg:items-baseline w-full lg:w-[30%] h-auto gap-4 lg:gap-6">
              <div className="flex flex-col justify-center items-center lg:items-baseline text-center lg:text-left">
                        <h4
                          id="apply-dm_sans-font"
                          className="font-bold text-xs sm:text-[13px] text-[hsl(38,61%,73%)] custom-letter-spacing"
                        >
                          SPECIAL DISH
                        </h4>
                        <img src={separator} className="w-24 sm:w-[7rem] h-12 sm:h-[3rem]" />
              </div>

              <h1 id="apply-forum-font" className="text-white text-3xl sm:text-5xl lg:text-6xl h-auto w-full text-center lg:text-left">Lobster Tortellini</h1>
              <span className="text-white w-full max-w-[450px] text-sm sm:text-lg text-center lg:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</span>
              <div className="flex items-center gap-3 sm:gap-5"><span id="apply-forum-font" className="text-lg sm:text-2xl text-[#595653]">$40.00</span> <span id="apply-forum-font" className="text-xl sm:text-3xl text-[hsl(38,61%,73%)]">$20.00</span></div>
              <PrimaryButton content="VIEW ALL MENU"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SpeciatDish;
