import React from 'react'
import { useState ,useEffect} from 'react';


 const Navbar = () => {


  return (
    <div className='flex-box nav '>

            <div className=" nav-items">
                <ul>
                    <li><a href="#about">Home</a></li><hr  />
                    <li><a href="#about">About</a></li><hr />
                    <li><a href="#skill">Skill</a></li><hr />
                    <li><a href="#project">Projects</a></li>
                </ul>
            </div>


    </div>
  )
}

export default Navbar;
