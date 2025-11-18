import React from "react";
import SpecialDishPic from "../assets/special-dish-banner.jpg";
import separator from "../assets/separator.svg";
import favIcon from "../assets/badge-1.png";
function SpeciatDish() {
  return (
    <div className="w-full h-screen flex bg-[#171616]">
      <img className="w-half h-screen" src={SpecialDishPic} />
      <div className="w-half h-[100%] flex justify-center items-center">
        <div className="w-[18rem] h-screen flex gap-4">
          <div>
            <img src={favIcon} />
          </div>
          <div>
            <h4
              id="apply-dm_sans-font"
              className="font-bold  text-[1.03rem] text-[hsl(38,61%,73%)] tracking-widest"
            >
              Special Dish
            </h4>
            <img src={separator} className="w-[100px] h-[50px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeciatDish;
