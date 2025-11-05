import React from "react";

function MenuItem({ dishName, dishPrice, dishIng, dishPicture }) {
  return (
    <div className="w-[400px] h-[100px] flex gap-[10px]">
      <img className="w-[25%] h=[100%]" src={dishPicture} />
      <div  className="flex flex-col gap=[3px]">
        <h4>{dishName}</h4>
        <h3>{dishPrice}</h3>
        <p>{dishIng}</p>
      </div>
    </div>
  );
}

export default MenuItem;
