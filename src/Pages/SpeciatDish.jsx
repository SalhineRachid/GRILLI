import React from "react";
import SpecialDishPic from "../assets/special-dish-banner.jpg";
import separator from "../assets/separator.svg";
import favIcon from "../assets/badge-1.png";
import './font.css'
import PrimaryButton from "../Components/PrimaryButton";
function SpeciatDish() {
  return (
    <div className="w-full h-screen flex bg-[#171616] gap-20">
      <img className="w-half h-screen" src={SpecialDishPic} />
      <div className="w-half h-[0 flex justify-center items-center">
        <div className=" h-screen w-[80%] flex flex-row justify-center items-center gap-4">

            <img src={favIcon}/>
        
            <div className="flex flex-col items-baseline w-[90%] h-[50%] justify-between">
              <div className="flex flex-col justify-center items-baseline text-center">
                        <h4
                          id="apply-dm_sans-font"
                          className="font-bold  text-[13px] text-[hsl(38,61%,73%)] custom-letter-spacing"
                        >
                          SPECIAL DISH
                        </h4>
                        <img src={separator} className="w-[7rem] h-[3rem] " />
              </div>

              <h1 id="apply-forum-font" className="text-white text-5xl h-[10%] w-full">Lobster Tortellini</h1>
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
