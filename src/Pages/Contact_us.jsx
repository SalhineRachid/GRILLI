import React from "react";
import screen from "../assets/contact-us-bg.jpg";
import formPattern from "../assets/form-pattern.png";
import PrimaryButton from "../Components/PrimaryButton";
import shape5 from "../assets/shape-5.png";
import "./font.css";

function Contact_us() {
  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-[5%] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${screen})` }}
      id="contact"
    >
      <div
        className="relative w-full md:w-3/4 lg:w-1/2 h-[102vh] flex flex-col justify-center items-center text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${formPattern})` }}
      >
        <img
          className="absolute w-full h-full inset-0 z-0 upDownMotion"
          src={shape5}
        />
        <div className="relative w-full h-auto md:h-[70%] lg:h-[70%] z-10 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-6 px-4">
          <h1 id="apply-forum-font" className="text-3xl md:text-5xl lg:text-6xl text-center">
            Contact US
          </h1>
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <span id="apply-dm_sans-font" className="font-semibold text-base md:text-lg">
              Booking Request
            </span>
            <h3
              id="apply-dm_sans-font"
              className="text-lg md:text-xl lg:text-2xl text-[hsl(38,61%,73%)]"
            >
              +88-123-123456
            </h3>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <span id="apply-dm_sans-font" className="font-semibold text-base md:text-lg">
              Location
            </span>
            <p id="apply-dm_sans-font" className="text-[#a6a6a6] text-sm md:text-base">
              Restaurant St, Delicious City, London 9578, UK
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <span id="apply-dm_sans-font" className="font-semibold text-base md:text-lg">
              Lunch Time
            </span>
            <p id="apply-dm_sans-font" className="text-[#a6a6a6] text-sm md:text-base">
              Mon-Sat: 11:00 AM - 02:00 PM
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <span id="apply-dm_sans-font" className="font-semibold text-base md:text-lg">
              Dinner Time
            </span>
            <p id="apply-dm_sans-font" className="text-[#a6a6a6] text-sm md:text-base">
              Mon-Sun: 05:00 PM - 10:00 PM
            </p>
          </div>
          <PrimaryButton content="RESERVATION" />
        </div>
      </div>
    </div>
  );
}

export default Contact_us;
