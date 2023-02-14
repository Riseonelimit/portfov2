import React from 'react'
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div className='headbox' id='about'>
        <div className="head-content">
            <div className="abhead">    
                <h1>About Me</h1>
                <hr className='abouthr' />
            </div>
            <div className="abbox">
                <div className="education">
                    <div className="eduhead">
                        <h1 >Education &#127891;</h1>
                    </div>
                    <div className="info">
                        <h1>2019</h1>
                        <div className="percent">
                            <h1>10th Pass</h1>
                            <p>with 85%</p>
                        </div>
                    </div>
                    <hr className='eduhr'/>
                    <div className="info">
                        <h1>2021</h1>
                        <div className="percent">
                            <h1>12th Pass</h1>
                            <p>with 80%</p>
                        </div>
                    </div>
                    <hr className='eduhr'/>
                    <div className="info">
                        <h1>2022</h1>
                        <div className="percent">
                            <h1>UG B.C.A</h1>
                            <p>on going...</p>
                        </div>
                    </div>
                </div>
                <div className="abme">
                    <div className="hobhead">
                        <h1>MySelf &#128516; </h1>
                    </div>
                    <div className="hob-box">
                        <p>Hello I am Anand, Currently pursuing my Undergraduate BCA degree through Modern College of Arts Science and Commerce . I have a interest in Web Development and Software Engineering!!. I have Worked on various Languages and I am currently learning C++ .My Current favourite language is Javascript</p>
                            <div className="hobhead2">
                                <h1>What I Like? &#129513;</h1>
                            </div>
                        <div className="hobbies flex-box">
                            
                            <div className="card ">
                                <p className='card-text'>Photography</p>
                            </div>
                            <div className="card">
                                <p className='card-text'>Travelling</p>
                            </div>
                            <div className="card">
                                <p className='card-text'>Coding</p>
                            </div>
                            <div className="card">
                                <p className='card-text' >Food</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default About    