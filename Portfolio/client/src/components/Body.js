import React from 'react';
import {useNavigate } from 'react-router-dom'
import nicole from "../images/nicole.jpg"
import logo1 from "../images/2.png"
import trip1 from "../images/tripWizard1.png"
import Typewriter from "typewriter-effect"
import starbucks from "../images/starbs-clone.jpg"

const Body = () => {
    const navigate= useNavigate()

    const projectsButton =(e)=>{
        navigate("/projects")
    }
    return (
        <div className='body'>
            <div className='navBar'>
                <div >
                    <div>
                        <img
                            src={logo1}
                            alt="logo"
                            className='logo'>
                        </img>
                    </div>
                </div>
                <div>
                    <button>Resume</button>
                    <button onClick={projectsButton}>Projects</button>
                    <button>Contact</button>
                    <button>Skills</button>

                </div>
            </div>




            <div className='container'>
                <div>
                    <section className='pageOne'>
                        <div className='photo-grid'>
                            <div className='firstPageAlign'>
                            <img src={nicole}
                                alt="portrait"
                                className='nicole'></img>
                            <div className='text'>
                                <h1 className='textHeaderFont'>Hi, I'm Nicole!</h1>
                                <div className='typewriter'>
                                <Typewriter
                                    className="typewriter"
                                    onInit={(typewriter)=>{
                                        typewriter.typeString("A Full Stack Web Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        typewriter.typeString("Cat Mom")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        typewriter.typeString("Traveler")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        typewriter.typeString("Coding Enthusiast")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        typewriter.typeString("Student")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        typewriter.typeString("A Full Stack Web Developer")
                                        .pauseFor(1000)
                                        .start();
                                        
                                    }}/> 
                                </div>
                                <div className='socialIcons'>
                                <i class="fa-brands fa-github fa-xs socialIcons"  ></i>
                                <i class="fa-brands fa-linkedin-in fa-xs socialIcons"></i>
                                <i class="fa-brands fa-instagram fa-xs socialIcons"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>




                    <section className='pageTwo'>
                        <div className='section-content'>
                            <h2 className='text-header textHeaderFont'>Who am I?</h2>
                            <div className='section-content-center-info'>
                            <p className='text-display'>
                                Nicole Shafer<br />
                            </p>
                                <div>
                                    
                                    <i class="fa-solid fa-location-dot"></i>
                                    Asheville
                                </div>
                            <p className='text-display'>
                                {/* I am Full Stack Web Developer based in Asheville, North Carolina
                                <br />
                                I completed the Software Developement Certificate at Coding Dojo
                                <br /> and have and Associates of Science Degree from Pellissippi Community College. */}
                                
                            </p>
                            </div>
                        </div>
                    </section>





                    <section className='pageThree'>
                        {/* <div className='section-content'> */}
                        <div className='my-project'>
                            <h2 className='projectsTitle'>My Projects</h2>
                            <div className='text-display'>
                            <div className='seperate-cards'>
                                    <div className='card'>
                                    <div className='card'>
                                        <img
                                            src={trip1}
                                            alt="project"
                                            className='card-photo'></img>
                                        <p>Trip Wizard Travel</p>
                                    </div>
                                    </div>

                                    <div className='card'>
                                    <div className='card'>
                                        <img
                                            src={starbucks}
                                            alt="project"
                                            className='card-photo'></img>
                                        <p>Starbucks Clone</p>
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className='seperate-cards'>
                                    <div className='card'>
                                    <div className='card'>
                                        <img
                                            src={trip1}
                                            alt="project"
                                            className='card-photo'></img>
                                        <p>Potter's Potions</p>
                                    </div>
                                    </div>

                                    <div className='card'>
                                    <div className='card'>
                                        <img
                                            src={trip1}
                                            alt="project"
                                            className='card-photo'></img>
                                        <p>Calendar App</p>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='wrapper'>
                                <div className='layer bottom'></div>
                            </div>
                        </div>

                    </section>





                    <section className='pageFour'>
                        <div className='section-content'>
                            <h2 className='text-header textHeaderFont'>My Skills</h2>

                            <div className='skills-box'>
                                <div>
                                    <h3>Languages</h3>
                                    <p>JavaScript</p>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>TypeScript</p>
                                    <p>Node.js</p>
                                </div>
                                <div>
                                    <h3>Frameworks && <br />Libraries</h3>
                                    <p>React</p>
                                    <p>Express</p>
                                    <p>BootStrap</p>
                                    <p>Mongoose</p>
                                </div>
                                <div><h3>Databases</h3>
                                    <p>MongoDB</p>
                                </div>
                                <div><h3>Other Tools</h3>
                                    <p>API's</p>
                                    <p>VS Code</p>
                                    <p>Postman</p>
                                    <p>Git</p>
                                    <p>Github</p>
                                </div>
                            </div>
                        </div>
                        <div className='footer'>
                            Contact
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Body;
