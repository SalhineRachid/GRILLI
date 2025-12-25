import React from "react";
import separator from "../assets/separator.svg";
import PrimaryButton from "../Components/PrimaryButton";
import "./font.css";
function About_us() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#171616] px-4 py-8" id="about">
      <div className="w-full max-w-6xl h-auto flex flex-col lg:flex-row justify-center items-center text-white gap-8">
        
          <div className="flex flex-col items-center justify-center w-full lg:w-[40%] gap-6 lg:gap-8">
            <div className="flex flex-col justify-center items-center text-center">
              <h4
                id="apply-dm_sans-font"
                className="font-bold text-xs sm:text-[13px] text-[hsl(38,61%,73%)] custom-letter-spacing"
              >
                SPECIAL DISH
              </h4>
              <img src={separator} className="w-24 sm:w-[7rem] h-12 sm:h-[3rem]" />
            </div>

            <h1
              id="apply-forum-font"
              className="text-white flex justify-center text-3xl sm:text-5xl lg:text-6xl h-auto w-full lg:w-2/3 text-center"
            >
              Every Flavor Tells a Story
            </h1>
            <span className="text-white w-full lg:w-6/8 text-center text-sm sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived not only
              five centuries, but also the leap into.
            </span>
            <div className="flex items-center gap-3 sm:gap-5">
              <span id="apply-forum-font" className="text-lg sm:text-2xl text-[#595653]">
                $40.00
              </span>{" "}
              <span
                id="apply-forum-font"
                className="text-xl sm:text-3xl text-[hsl(38,61%,73%)]"
              >
                $20.00
              </span>
            </div>
            <PrimaryButton content="VIEW ALL MENU" />
          </div>
        
        <div className="w-full lg:w-[60%] flex justify-center items-center">
          {/* Placeholder for image or content */}
          <div className="text-white">Image or Content Here</div>
        </div>
      </div>
    </div>
  );
}
export default About_us;
