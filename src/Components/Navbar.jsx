import React from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <nav class="flex justify-between items-center p-[1%] fixed w-full bg-transparent ">
      <img src={logo}/>
      <li class="flex w-[30%] justify-between items-center font-dm_sans text-white">
        <ul>HOME</ul>  
        <ul>MENUS</ul>
        <ul>ABOUT US</ul>
        <ul>OUR CHEFS</ul>
        <ul>CONTACT</ul>
      </li>
      <button class="w-[200px] h-[57px] bg-[hsl(38,61%,73%)] font-forum font-bold text-[12px] tracking-[3px]">FIND A TABLE</button>
    </nav>
  )
}

export default Navbar