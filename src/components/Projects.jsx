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
                  <hr className='line'/>
                  <div>
                    <h1>Vapours</h1>
                    <p>Lorem ipsum, dolor sit , ipsa?</p>
                    
                  </div>
                </div>
                <div className="project-img flex-box">
                      <a href=""><BsGithub size={25} color="orangered"/></a>
                      <a href=""><TbView360 size={25} color="orangered"/></a>
                </div>
              </div>

              <div className="project-card flex-box">
                <div className="project-head flex-box">
                  <hr className='line2'/>
                  <div>
                    <h1>GigaChad Timer</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, ipsa?</p>
                  </div>
                </div>
                <div className="project-img flex-box">
                      <a href=""><BsGithub size={25} color="darkgreen"/></a>
                      <a href=""><TbView360 size={25} color="darkgreen"/></a>
                </div>
              </div>

              <div className="project-card flex-box">
                <div className="project-head flex-box">
                  <hr className='line2 bg-blue'/>
                  <div>
                    <h1>Portfolio</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, ipsa?</p>
                    
                  </div>
                </div>
                <div className="project-img flex-box">
                      <a href=""><BsGithub size={25} color="royalblue"/></a>
                      <a href=""><TbView360 size={25} color="royalblue"/></a>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Projects;    