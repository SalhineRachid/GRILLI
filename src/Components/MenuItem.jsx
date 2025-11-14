import React from "react";

function MenuItem({ dishName, dishPrice, dishIng, dishPicture }) {
  return (
    <div className="w-[500px] h-[100px] flex gap-[20px]">
      <img className="w-[25%] h=[100%]" src={dishPicture} />
      <div className="flex flex-col justify-center gap-[10px] text-[#A6A6A6]">
        <div  className="flex justify-between gap=[3px] ">
          <h4 id="apply-forum-font" className="text-2xl text-white hover:text-[hsl(38,61%,73%)] hover:cursor-pointer">{dishName}</h4>
         
          <h3  id="apply-forum-font" className="text-2xl text-[hsl(38,61%,73%)]">{dishPrice}</h3>
        </div>
        <p>{dishIng}</p>
      </div>
    </div>
  );
}

export default MenuItem;
