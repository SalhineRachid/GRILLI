import React from "react";
import MenuItem from "../Components/MenuItem";
import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";
import menu4 from "../assets/menu-4.png";
import menu5 from "../assets/menu-5.png";
import menu6 from "../assets/menu-6.png";
function Menu() {
  return (
    <div className="h-[110vh] w-[100%] flex justify-center items-center bg-[#171616] ">
      <div className="w-[30%] h-[40%] flex flex-col justify-between items-center text-white">
        <MenuItem
          dishPicture={menu1}
          dishName={"Greek Salad"}
          dishPrice={25.0}
          dishIng={
            "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
          }
        />
        <MenuItem
          dishPicture={menu2}
          dishName={"Greek Salad"}
          dishPrice={25.0}
          dishIng={
            "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
          }
        />
        <MenuItem
          dishPicture={menu3}
          dishName={"Greek Salad"}
          dishPrice={25.0}
          dishIng={
            "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
          }
        />
      </div>
      <div  className="w-[30%] h-[40%] flex flex-col justify-between items-center text-white">
        <MenuItem
          dishPicture={menu4}
          dishName={"Greek Salad"}
          dishPrice={25.0}
          dishIng={
            "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
          }
        />
        <MenuItem
          dishPicture={menu5}
          dishName={"Greek Salad"}
          dishPrice={25.0}
          dishIng={
            "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
          }
        />
        <MenuItem
          dishPicture={menu6}
          dishName={"Greek Salad"}
          dishPrice={25.0}
          dishIng={
            "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
          }
        />
      </div>
    </div>
  );
}

export default Menu;
