import React from 'react'
import screen from '../assets/contact-us-bg.jpg'
import formPattern from '../assets/form-pattern.png'
import PrimaryButton from '../Components/PrimaryButton'
function Contact_us() {
  return (
    <div className='w-full h-screen  flex items-center p-[5%]' style={{ backgroundImage: `url(${screen})`}}>
        <div className='w-[50%] h-[90%] flex flex-col justify-center items-center text-white' style={{backgroundImage : `url(${formPattern})`}}>
            <h1>Contact US</h1>
            <span>Booking Request</span>
            <h3>+88-123-123456</h3>
            <span>Location</span>
            <text>Restaurant St, Delicious City,London 9578, UK</text>
            <span>Lunch Time</span>
            <text>Mon-Sat: 11:00 AM - 02:00 PM</text>
            <span>Dinner Time</span>
            <text>Mon-Sun: 05:00 PM - 10:00 PM</text>
            <PrimaryButton content="RESERVATION"/>

        </div>
    </div>
  )
}

export default Contact_us