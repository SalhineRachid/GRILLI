import React from "react";
import SpecialDishPic from "../assets/special-dish-banner.jpg";
import separator from "../assets/separator.svg";
import favIcon from "../assets/badge-1.png";
import shape4 from "../assets/shape-4.png";
import './font.css'
import PrimaryButton from "../Components/PrimaryButton";
function SpeciatDish() {
  return (
    <div className="relative w-full h-screen flex bg-[#0E0D0C] gap-20">
      <img className="absolute w-[12rem] h-[25rem] right-0 top-[20rem] z-0 " src={shape4}/>
      <img className="relative w-1/2 h-screen" src={SpecialDishPic} />
      <div className="relative w-1/2 p-0 m-0 flex justify-center items-center">
        <div className="w-full flex flex-row justify-baseline items-start gap-4">

          <div className="flex justify-start items-start">
            <div className="w-[2rem] h-[5rem] m-0 p-0 flex justify-start shrink-0 items-start">
              <img className="upDownMotion" src={favIcon}/>
            </div>    
          </div>
            
        
            <div className="flex flex-col items-baseline w-[30%] h-[40%] gap-6">
              <div className="flex flex-col justify-center items-baseline text-center">
                        <h4
                          id="apply-dm_sans-font"
                          className="font-bold  text-[13px] text-[hsl(38,61%,73%)] custom-letter-spacing"
                        >
                          SPECIAL DISH
                        </h4>
                        <img src={separator} className="w-[7rem] h-[3rem] " />
              </div>

              <h1 id="apply-forum-font" className="text-white text-6xl h-[10%] w-full">Lobster Tortellini</h1>
              <span className="text-white w-[450px] text-lg">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</span>
              <div className="flex items-center gap-5"><span id="apply-forum-font" className="text-2xl text-[#595653]">$40.00</span> <span id="apply-forum-font" className="text-3xl text-[hsl(38,61%,73%)]">$20.00</span></div>
              <PrimaryButton content="VIEW ALL MENU"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SpeciatDish;
