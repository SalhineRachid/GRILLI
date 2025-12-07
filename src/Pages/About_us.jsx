import React from "react";
import separator from "../assets/separator.svg";
import PrimaryButton from "../Components/PrimaryButton";
import "./font.css";
function About_us() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#171616]">
      <div className="w-[70%] h-[80%] flex  justify-center items-center text-white">
        
          <div className="flex flex-col items-center justify-center w-[40%]  gap-8">
            <div className="flex flex-col justify-center items-center text-center">
              <h4
                id="apply-dm_sans-font"
                className="font-bold  text-[13px] text-[hsl(38,61%,73%)] custom-letter-spacing"
              >
                SPECIAL DISH
              </h4>
              <img src={separator} className="w-[7rem] h-[3rem] " />
            </div>

            <h1
              id="apply-forum-font"
              className="text-white flex justify-center text-6xl h-[10%] w-2/3"
            >
              Every Fla vor Tells a Story
            </h1>
            <span className="text-white w-6/8 text-center text-lg">
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived not only
              five centuries, but also the leap into.
            </span>
            <div className="flex items-center gap-5">
              <span id="apply-forum-font" className="text-2xl text-[#595653]">
                $40.00
              </span>{" "}
              <span
                id="apply-forum-font"
                className="text-3xl text-[hsl(38,61%,73%)]"
              >
                $20.00
              </span>
            </div>
            <PrimaryButton content="VIEW ALL MENU" />
          </div>
        
        <div className="w-[60%]">fucked up</div>
      </div>
    </div>
  );
}
export default About_us;
