import { useState,useEffect } from "react"
import './Navbar.css'
// import React from 'react'

function NavBar() {
  const[toggleMenu,setToggleMenu]=useState(false)
  const[screenWidth,setScreenWidth]=useState(
    window.innerWidth
  )
  
  const toggleNav=()=>{
    setToggleMenu(!toggleMenu)
  }
  
  useEffect(()=>{
    const changeWidth=()=>{
        setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize',changeWidth)
    return()=>{
        window.removeEventListener('resize',changeWidth)
    }
  },[])
  
    return (
    <nav>
        {(toggleMenu || screenWidth > 500 )&&(
          <ul className="list">
          <li className="items">Home</li>
          <li className="items">Contact</li>
          <li className="items">Services</li>
        </ul>
           
        )}
      <button className="btn" onClick={toggleNav}>Button</button>
      
    
    </nav>
    
  )
}

export default NavBar
