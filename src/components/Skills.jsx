import React from 'react'
import {SiCplusplus ,SiCss3 ,SiMongodb ,SiPhp} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai';
import {GrReactjs} from 'react-icons/gr'
import {DiJavascript} from 'react-icons/di';


const Skills = () => {
  return (
    <div className='headbox' id='skill'>
        <div className="head-content">
            <div className="abhead">    
                <h1>Skills</h1>
                <hr className='abouthr' />
                <div className="skill-box">
                    <div className="skill-card row-col-span-2">
                        <GrReactjs className='icon' />
                        <h1>React</h1>
                    </div>
                    <div className="skill-card col-span-2">
                        <AiFillHtml5 className='icon'  />
                        <h1>HTML</h1>
                    </div>
                    <div className="skill-card">
                        <SiCss3 className='icon' />
                        <h1>CSS</h1>
                    </div>
                    <div className="skill-card">
                        <DiJavascript className='icon'  />
                        <h1>Javascript</h1>
                    </div>
                    <div className="skill-card col-span-2   ">
                        <SiCplusplus className='icon' />
                        <h1>C++</h1>
                    </div>  
                    <div className="skill-card col-span-2   ">
                        <SiCplusplus className='icon' />
                        <h1>C</h1>
                    </div>  
                    <div className="skill-card">
                        <SiPhp className='icon' />
                        <h1>PHP</h1>
                    </div>  
                    <div className="skill-card">
                        <SiMongodb className='icon' />
                        <h1>MongoDB</h1>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;