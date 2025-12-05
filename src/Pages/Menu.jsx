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
import PrimaryButton from "../Components/PrimaryButton";

const imageMap = {
  1: menu1,
  2: menu2,
  3: menu3,
  4: menu4,
  5: menu5,
  6: menu6,
};

function Menu() {
  const [menuData, setMenuData] = useState({
    page: { title: "", subtitle: "", buttonText: "" },
    menuItems: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const response = await fakeApi.get("menu_data.json");
        setMenuData(response.data);
        setError(null);
      } catch (err) {
        console.error("Error loading menu data :", err);
        setError("Failed to load menu data");
      } finally {
        setLoading(false);
      }
    };
    fetchMenuData();
  }, []);

  if (loading) return <div className="text-white">Loading menu...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const leftColumn = menuData.menuItems.slice(0, 3);
  const rightColumn = menuData.menuItems.slice(3, 6);

  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-[#171616]">
      <img
        className="absolute w-[45%] h-[90%] top-[2.9rem] inset-0 z-0 upDownMotion "
        src={shape5}
      />

      <div className="absolute w-[600px] h-[350px] bottom-[70px] right-0 ">
        <img className="absolute w-[full] upDownMotion z-0" src={shape6} />
      </div>

      <div className="relative z-10 h-screen w-full flex flex-col justify-center items-center gap-4 text-center px-8 py-12">
        <div className="flex flex-col justify-center items-center text-center">
          <h4
            id="apply-dm_sans-font"
            className="font-bold  text-[13px] text-[hsl(38,61%,73%)] tracking-widest"
          >
            {menuData.page.subtitle}
          </h4>
          <img src={separator} className="w-[7.5rem] h-[3.75rem] " />
        </div>

        <h1 id="apply-forum-font" className="text-[4.5rem] text-white">
          {menuData.page.title}
        </h1>

        <div className="w-[full] h-[50%] flex justify-center items-center gap-40  top-[10rem]">
          <div className="w-[60%] flex flex-col justify-between items-center gap-12 text-white">
            {leftColumn.map((item, index) => (
              <MenuItem
                key={item.id}
                dishPicture={imageMap[item.id]}
                dishName={item.dishName}
                dishPrice={item.dishPrice}
                dishIng={item.dishIng}
              />
            ))}
          </div>
          <div className="w-[60%] flex flex-col justify-between items-center gap-12 text-white">
            {rightColumn.map((item, index) => (
              <MenuItem
                key={item.id}
                dishPicture={imageMap[item.id]}
                dishName={item.dishName}
                dishPrice={item.dishPrice}
                dishIng={item.dishIng}
              />
            ))}
          </div>
        </div>

        <PrimaryButton content={menuData.page.buttonText}/>
      </div>
    </div>
  );
}

export default Menu;
