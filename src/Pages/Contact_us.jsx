import React from "react";
import screen from "../assets/contact-us-bg.jpg";
import formPattern from "../assets/form-pattern.png";
import PrimaryButton from "../Components/PrimaryButton";
import shape5 from "../assets/shape-5.png";
import "./font.css";

function Contact_us() {
  return (
    <div
      className=" w-full min-h-screen  flex justify-center items-center p-[5%]"
      style={{ backgroundImage: `url(${screen})` }}
    >
      <div
        className=" relative w-1/2 h-[90%] flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${formPattern})` }}
      >
        <img
          className="absolute w-[60%] h-[90%] inset-0 z-0 upDownMotion "
          src={shape5}
        />
        <div className="relative w-1/2 h-[70%] z-10 flex flex-col justify-center items-center gap-8">
          <h1 id="apply-forum-font" className="text-7xl">
            Contact US
          </h1>
          <div className="flex flex-col gap-2 justify-center items-center">
            <span id="apply-dm_sans-font" className="font-semibold text-xl">
              Booking Request
            </span>
            <h3
              id="apply-dm_sans-font"
              className="text-3xl text-[hsl(38,61%,73%)]"
            >
              +88-123-123456
            </h3>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <span id="apply-dm_sans-font" className="font-semibold text-xl">
              Location
            </span>
            <text id="apply-dm_sans-font" className="text-[#a6a6a6] text-lg">
              Restaurant St, Delicious City,
            </text>
            <text id="apply-dm_sans-font" className="text-[#a6a6a6] text-lg">
              <text id="apply-dm_sans-font" className="text-[#a6a6a6] text-lg">
                London 9578, UK
              </text>
            </text>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <span id="apply-dm_sans-font" className="font-semibold text-xl">
              Lunch Time
            </span>
            <text id="apply-dm_sans-font" className="text-[#a6a6a6] text-lg">
              Mon-Sat: 11:00 AM - 02:00 PM
            </text>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <span id="apply-dm_sans-font" className="font-semibold text-xl">
              Dinner Time
            </span>
            <text id="apply-dm_sans-font" className="text-[#a6a6a6] text-lg">
              Mon-Sun: 05:00 PM - 10:00 PM
            </text>
          </div>
          <PrimaryButton content="RESERVATION" />
        </div>
      </div>
    </div>
  );
}

export default Contact_us;
