import React, { useState } from 'react'
import { HiArrowSmRight} from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Main = () => {
    const [theme,setTheme] = useState('light-mode');
    
    let clickHandler = ()=>{
      if(theme === 'dark-mode'){
        setTheme('light-mode');
        console.log('light');
      }
      else {
        setTheme('dark-mode');
        console.log('dark');
      }
    }
    useEffect(() => {
      Aos.init({duration:2000});
    },[]);
    useEffect(()=>{
        document.body.className = theme;
    },[theme])
  return (
    <div className='main flex-box'>
        <div className="content" >
            <p>Hi, my name is</p>
            <div className="text">
                <h1><span>A</span><span>n</span><span>a</span><span>n</span><span>d</span> <span>S</span><span>a</span><span>r</span><span>o</span><span>l</span><span>k</span><span>a</span><span>r</span></h1>
                <h1 >I love to Code!! &#128525;</h1>
                <p>I am Currently a Student pursuing my UG Degree , Currently working on NEW PROJECTS to gain more knowledge.</p>
            </div>
            <button className='aboutbtn' onClick="#about">About me <HiArrowSmRight/></button>
            {/* <button onClick={()=>{clickHandler()}}>Dark Mode</button> */}
        </div>
        <div className="background">
          <h1>WEB DEV</h1>
        </div>
        
    </div>
  )
}
export default Main;