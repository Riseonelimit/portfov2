import React, { useState,useEffect } from 'react'
import sun from "../assets/sun2.svg"
import moon from "../assets/moon.png"

 const Navbar = () => {
  const [theme,setTheme] = useState('light-mode');
  const [image,setImage] = useState(moon);
  let clickHandler = ()=>{
    if(theme === 'dark-mode'){

        setTheme('light-mode');
        console.log('light');
      // setTimeout(()=>{
        setImage(moon);
        
        // },500)
        console.log(image);
      }
      else {
        setTheme('dark-mode');
        console.log('dark');
        setImage(sun);
    }
  }
  useEffect(()=>{
    document.body.className = theme;
},[theme])

  return (
    <div className='flex-box nav '>
            <div className=" nav-items flex-box">
                <ul className='flex-box'>
                    <li><a href="#about">About</a></li><hr />
                    <li><a href="#skill">Skill</a></li><hr />
                    <li><a href="#project">Projects</a></li><hr  />
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
            <button onClick={()=>{clickHandler()}} type="button"><img src={image} alt="" /></button>
    </div>
  )
}

export default Navbar;
