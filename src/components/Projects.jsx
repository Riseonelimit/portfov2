import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {TbView360} from 'react-icons/tb'

const Projects = () => {
  return (
    <div className='headbox' id='project'>
      <div className="head-content">
        <div className="abhead">    
            <h1>Projects</h1>
            <hr className='abouthr' />
         </div>
          <div className="project-box flex-box">

              <div className="project-card flex-box">
                <div className="project-head flex-box">
                  <hr className='line2 bg-lightcoral'/>
                  <div>
                    <h1>Vapours</h1>
                    <p>Weather Forcasting website using <br /> Open Weather API in React</p>
                  </div>
                </div>
                <div className="project-img flex-box">
                      <a href="https://github.com/Riseonelimit/Vapour"><BsGithub size={25} color="orangered"/></a>
                      <a href="https://vapours-weatherapp.netlify.app/"><TbView360 size={25} color="orangered"/></a>
                </div>
              </div>

              <div className="project-card flex-box">
                <div className="project-head flex-box">
                  <hr className='line2'/>
                  <div>
                    <h1>GigaChad Timer</h1>
                    <p>A timer with random background</p>
                  </div>
                </div>
                <div className="project-img flex-box">
                      <a href="https://github.com/Riseonelimit/Gigachad-Timer"><BsGithub size={25} color="darkgreen"  /></a>
                      <a href="https://riseonelimit.github.io/Gigachad-Timer/"><TbView360 size={25} color="darkgreen"/></a>
                </div>
              </div>

              <div className="project-card flex-box">
                <div className="project-head flex-box">
                  <hr className='line2 bg-blue'/>
                  <div>
                    <h1>Sorting Visualizer</h1>
                    <p>A sorting visualizer made using Javascript </p>
                    
                  </div>
                </div>
                <div className="project-img flex-box">
                      <a href="https://github.com/Riseonelimit/Sorting"><BsGithub size={25} color="royalblue"/></a>
                      <a href="https://riseonelimit.github.io/Sorting/"><TbView360 size={25} color="royalblue"/></a>
                </div>
              </div>

              <div className="project-card flex-box">
                <div className="project-head flex-box">
                  <hr className='line2 bg-purple'/>
                  <div>
                    <h1>ASCII Art</h1>
                    <p>Image to ASCII art converted using P5.js</p>
                  </div>
                </div>
                <div className="project-img flex-box">
                      <a href="https://github.com/Riseonelimit/ASCII-ART"><BsGithub size={25} color="rgb(163, 8, 163)"/></a>
                      <a href="https://riseonelimit.github.io/ASCII-ART/"><TbView360 size={25} color="rgb(163, 8, 163)"/></a>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Projects;    
