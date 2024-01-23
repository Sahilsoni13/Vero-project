import React, { useEffect, useRef, useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
import Logomain from "../images/logomain.png"
import Search from "../images/search.png";
import Profile from "../images/profile.png";
import Cart from "../images/cart.png";
import Burger from "../images/burger.png"

const Header = () => {
  

//  const burger = document.querySelector(".burger")
 let bg = (e)=>{
  // burger?.addEventListener("click",(e)=>{
    const navbar = document.getElementById("nav");
    navbar.classList.toggle("addme")
  // })
 }
   
  return (  

   
    <header className="header">'
    <div className="container">
      
      <div className="hide-logo">
      <img src={Logomain} />
      <img src={Burger} alt="" className='burger' onClick={bg}/>
      </div>
        <nav className="navigation flex" id='nav'>
            <div className="nav-logo">
             <img src={Logomain} />
            </div>
            <div className="nav-menu flex">
             <li><Link to="#" className=' navlinks'>Home</Link></li>
             <li><Link to="#" className=' navlinks'>About Us</Link></li>
             <li><Link to="#" className=' navlinks'>About Our Brace</Link></li>
             <li><Link to="#" className=' navlinks'>Shop</Link></li>
             <li><Link to="#" className=' navlinks'>Instructions</Link></li>
             <li><Link to="#" className=' navlinks'>FAQ</Link></li>
             <li><Link to="#" className=' navlinks'>Rehab Resources</Link></li>
             <li><Link to="#" className=' navlinks'>Contact</Link></li>
            </div>
            <div className="nav-icons flex">
             <img src={Search} />
             <img src={Profile} className='mid-margin' />
             <img src={Cart} />
            </div>
        </nav>
        <Outlet/>
        </div>
    </header>
  )
}

export default Header;