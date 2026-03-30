import React from "react";

function MenuItem({ dishName, dishPrice, dishIng, dishPicture }) {
  return (
    <div className="w-full max-w-[450px] h-[80px] flex gap-[15px]">
      <img className="w-[25%] h-full" src={dishPicture} />
      <div className="flex flex-col justify-center items-start gap-[8px] text-[#A6A6A6] text-left">
        <div className="flex justify-between w-full gap-[3px]">
          <h4 id="apply-forum-font" className="text-base sm:text-lg md:text-xl text-white hover:text-[hsl(38,61%,73%)] hover:cursor-pointer">{dishName}</h4>
         
          <h3 id="apply-forum-font" className="text-base sm:text-lg md:text-xl text-[hsl(38,61%,73%)]">{dishPrice}</h3>
        </div>
        <p className="text-xs sm:text-sm md:text-base">{dishIng}</p>
      </div>
    </div>
  );
}

export default MenuItem;
