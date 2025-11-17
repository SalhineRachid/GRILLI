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
import fakeApi from "../api";


function Menu() {

  const [menuData , setMenuData] = useState({page:{title:"" , subtitle:"" , buttonText:""} , menuItems:[]});
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);
    const imageMap = {
    1: menu1,
    2: menu2,
    3: menu3,
    4: menu4,
    5: menu5,
    6: menu6,
  }

  useEffect( () => {
    const fetchMenuData = async () => {
      try{
        setLoading(true)
        const response = await fakeApi.get('menu_data.json');
        console.log("✅ Data fetched:", response.data); // Debug log

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

  const leftColumn = menuData.menuItems.slice(0, 3);
  const rightColumn = menuData.menuItems.slice(3, 6);

  

  return (
    <div className="relative h-[100vh] w-[100%] flex justify-center items-center bg-[#171616]">
      <div className="absolute left-[45%] top-[100px] z-10 flex flex-col justify-center items-center">
                <h4
                  id="apply-dm_sans-font"
                  className="font-bold  text-[13px] text-[hsl(38,61%,73%)] tracking-widest"
                >
                  {menuData.page.subtitle}
                </h4>
                <img src={separator} className="w-[120px] h-[60px] " />
      </div>

      <h1 id="apply-forum-font" className="absolute z-10 left-[38%] top-40 text-[70px] text-white">{menuData.page.title}</h1>
      
      <img className="absolute w-[45%] h-[full] inset-0 z-0 upDownMotion " src={shape5}/>
      <div className="absolute w-[600px] h-[350px] bottom-[70px] right-0 ">
        <img className="absolute w-[full] upDownMotion z-0" src={shape6}/>
      </div>

      <div className="w-[full] h-[70%] flex justify-center items-center gap-40  top-[130px] absolute z-10">
         <div className="w-[60%] flex flex-col justify-between items-center gap-12 text-white">
          {
          leftColumn.map((item , index) => (<MenuItem 
            key = {item.id}
            dishPicture={imageMap[item.id]}
            dishName={item.dishName}
            dishPrice={item.dishPrice}
            dishIng={item.dishIng}
            />))
        }
         </div>
        <div className="w-[60%] flex flex-col justify-between items-center gap-12 text-white">
          {
            rightColumn.map((item , index) => (<MenuItem 
              key = {item.id}
              dishPicture={imageMap[item.id]}
              dishName={item.dishName}
              dishPrice={item.dishPrice}
              dishIng={item.dishIng}
              />))
          }
        </div>
      </div>

      

      <button
            id="apply-dm_sans-font"
            className="absolute z-10 top-[80%] left-[43%] text-white w-[240px] h-[57px] bg-transparent  font-bold text-[12px] tracking-[3px] border-[hsl(38,61%,73%)] border-2 mt-[30px] hover:bg-[hsl(38,61%,73%)] hover:text-black hover:cursor-pointer transition-all duration-300"
          >
            {menuData.page.buttonText}
          </button>
    </div>
  );
}

export default Menu;
