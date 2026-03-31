import React from "react";
import screen from "../assets/contact-us-bg.jpg";
import formPattern from "../assets/form-pattern.png";
import PrimaryButton from "../Components/PrimaryButton";
import shape5 from "../assets/shape-5.png";
import "./font.css";

function Contact_us() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${screen})` }}
      id="contact"
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 lg:py-20 text-white">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span
            id="apply-dm_sans-font"
            className="text-[0.75rem] sm:text-[0.85rem] uppercase tracking-[0.5em] text-[hsl(38,61%,73%)]"
          >
            Get in touch
          </span>
          <h1 id="apply-forum-font" className="text-4xl sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p
            id="apply-dm_sans-font"
            className="text-sm sm:text-base text-[#c9c9c9] max-w-2xl"
          >
            Reserve a table, plan a private event, or just say hello. We will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.6fr] gap-8 lg:gap-10 items-stretch">
          <div
            className="relative overflow-hidden border border-white/10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${formPattern})` }}
          >
            <img
              className="absolute w-full h-full inset-0 z-0 upDownMotion opacity-60"
              src={shape5}
              alt=""
            />

            <div className="relative z-10 p-6 sm:p-10 h-full flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span id="apply-dm_sans-font" className="text-sm uppercase tracking-[0.35em] text-[#d2b180]">
                    Booking request
                  </span>
                  <h3 id="apply-forum-font" className="text-2xl sm:text-3xl text-[hsl(38,61%,73%)]">
                    +88-123-123456
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-black/45 border border-white/10 p-5">
                    <p id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                      Location
                    </p>
                    <p id="apply-dm_sans-font" className="text-sm sm:text-base mt-2 text-[#ededed]">
                      Restaurant St, Delicious City,
                      <br />
                      London 9578, UK
                    </p>
                  </div>
                  <div className="bg-black/45 border border-white/10 p-5">
                    <p id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                      Email
                    </p>
                    <p id="apply-dm_sans-font" className="text-sm sm:text-base mt-2 text-[#ededed]">
                      hello@grilli.com
                      <br />
                      bookings@grilli.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-white/10 bg-black/35 p-5">
                  <p id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                    Lunch time
                  </p>
                  <p id="apply-dm_sans-font" className="text-sm sm:text-base mt-2 text-[#ededed]">
                    Mon-Sat: 11:00 AM - 02:00 PM
                  </p>
                </div>
                <div className="border border-white/10 bg-black/35 p-5">
                  <p id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                    Dinner time
                  </p>
                  <p id="apply-dm_sans-font" className="text-sm sm:text-base mt-2 text-[#ededed]">
                    Mon-Sun: 05:00 PM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="border border-white/10 bg-black/35 p-5 flex flex-col gap-3">
                <p id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                  Private dining
                </p>
                <p id="apply-dm_sans-font" className="text-sm sm:text-base text-[#ededed]">
                  Chef tasting menus, brand launches, and bespoke celebrations with a dedicated host.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-white/10 bg-black/50 p-6 sm:p-10 flex flex-col gap-8">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div>
                <h2 id="apply-forum-font" className="text-3xl sm:text-4xl">
                  Reserve your table
                </h2>
                <p id="apply-dm_sans-font" className="text-sm sm:text-base text-[#c9c9c9] mt-2">
                  Leave your details and a short note. We will confirm by phone.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d2b180]">
                <span className="w-2 h-2 rounded-full bg-[#d2b180]" />
                Open today
              </div>
            </div>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.35em] text-[#c9c9c9]">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[hsl(38,61%,73%)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.35em] text-[#c9c9c9]">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+88 123 456 789"
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[hsl(38,61%,73%)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.35em] text-[#c9c9c9]">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[hsl(38,61%,73%)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.35em] text-[#c9c9c9]">
                  Guests
                </label>
                <select className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[hsl(38,61%,73%)]">
                  <option className="text-black">1 Person</option>
                  <option className="text-black">2 People</option>
                  <option className="text-black">4 People</option>
                  <option className="text-black">6 People</option>
                  <option className="text-black">8+ People</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.35em] text-[#c9c9c9]">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[hsl(38,61%,73%)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.35em] text-[#c9c9c9]">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[hsl(38,61%,73%)]"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.35em] text-[#c9c9c9]">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your event, dietary needs, or preferred seating."
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[hsl(38,61%,73%)]"
                />
              </div>
            </form>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-10 h-[1px] bg-[hsl(38,61%,73%)]" />
                  <span id="apply-dm_sans-font" className="text-xs uppercase tracking-[0.35em] text-[#c9c9c9]">
                    Response in 24 hours
                  </span>
                </div>
              </div>
              <PrimaryButton content="CONFIRM RESERVATION" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact_us;
