import React, { useEffect, useState } from "react";
import MenuItem from "../Components/MenuItem";
import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";
import menu4 from "../assets/menu-4.png";
import menu5 from "../assets/menu-5.png";
import menu6 from "../assets/menu-6.png";
import shape5 from "../assets/shape-5.png";
import shape6 from "../assets/shape-6.png";
import separator from "../assets/separator.svg";
import "./font.css";


function Menu() {

  const [menuData , setMenuData] = useState({page:{} , menuItems:[]});
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect( () => {
    const fetchMenuData = async () => {
      try{
        setLoading(true)
        const response = await fakeApi.get('menu_data.json');
        setMenuData(response.data)
        setError(null)
      }catch(err){
        console.error('Error loading menu data :' , err)
        setError('Failed to load menu data')
      }finally{
        setLoading(false)
      }

    }
    fetchMenuData();
  
  },[])

  const {page , menuItems} = menuData;

  

  return (
    <div className="relative h-[100vh] w-[100%] flex justify-center items-center bg-[#171616]">
      <div className="absolute left-[45%] top-[100px] z-10 flex flex-col justify-center items-center">
                <h4
                  id="apply-dm_sans-font"
                  className="font-bold  text-[13px] text-[hsl(38,61%,73%)] tracking-widest"
                >
                  {page.subtitle}
                </h4>
      
                <img src={separator} className="w-[120px] h-[60px] " />
      </div>

      <h1 id="apply-forum-font" className="absolute z-10 left-[38%] top-[160px] text-[70px] text-white">Delicious Menu</h1>
      
      <img className="absolute w-[45%] h-[100%] inset-0 z-0 upDownMotion " src={shape5}/>
      <div className="absolute w-[600px] h-[350px] bottom-[70px] right-0 ">
        <img className="absolute w-[100%] upDownMotion z-0" src={shape6}/>
      </div>

      <div className="w-[100%] h-[70%] flex justify-center items-center gap-30 top-[130px] absolute z-10">
        <div className="w-[30%] h-[40%] flex flex-col justify-between items-center gap-12 text-white">
          <MenuItem
            dishPicture={menu1}
            dishName={"Greek Salad"}
            dishPrice={"$25.50"}
            dishIng={
              "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
            }
          />
          <MenuItem
            dishPicture={menu2}
            dishName={"Butternut Pumpkin"}
            dishPrice={"$10.00"}
            dishIng={
              "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
            }
          />
          <MenuItem
            dishPicture={menu3}
            dishName={"Olivas Rellenas"}
            dishPrice={"$25.00"}
            dishIng={
              "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper."
            }
          />
        </div>

        <div  className="w-[30%] h-[40%] flex flex-col justify-between items-center gap-12 text-white">
          <MenuItem
            dishPicture={menu4}
            dishName={"Lasagne"}
            dishPrice={"$40.00"}
            dishIng={
              "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
            }
          />
          <MenuItem
            dishPicture={menu5}
            dishName={"Tokusen Wagyu"}
            dishPrice={"$39.00"}
            dishIng={
              "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
            }
          />
          <MenuItem
            dishPicture={menu6}
            dishName={"Opu Fish"}
            dishPrice={"$49.00"}
            dishIng={
              "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
            }
          />
        </div>
      </div>

      

      <button
            id="apply-dm_sans-font"
            className="absolute z-10 top-[80%] left-[43%] text-white w-[240px] h-[57px] bg-transparent  font-bold text-[12px] tracking-[3px] border-[hsl(38,61%,73%)] border-2 mt-[30px] hover:bg-[hsl(38,61%,73%)] hover:text-black hover:cursor-pointer transition-all duration-300"
          >
            VIEW ALL MENU
          </button>
    </div>
  );
}

export default Menu;
