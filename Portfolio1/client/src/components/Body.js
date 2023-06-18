import React from 'react';
import nicole from "../images/nicole.jpg"
import logo1 from "../images/2.png"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import trip1 from "../images/tripWizard1.png"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import trip2 from "../images/tripwizard2.png"
import trip3 from "../images/tripwizard3.png"
import Carousel from '../components/Carousel';

const Body = () => {
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
                    <button>About</button>
                    <button>Projects</button>
                    <button>Contact</button>

                </div>
            </div>




            <div className='container'>
                <div>
                    <section className='pageOne'>
                        <div className='photo-grid'>
                            <img src={nicole}
                                alt="portrait"
                                className='nicole'></img>
                            <div className='text'>
                                <h1 className='textHeaderFont'>Hi, I'm Nicole!</h1>
                                <p>A Full Stack Web Developer</p>
                            </div>
                        </div>
                    </section>




                    <section className='pageTwo'>
                        <div className='section-content'>
                            <h2 className='text-header textHeaderFont'>Who am I?</h2>
                            <p className='text-display'>
                                My name is Nicole Shafer<br />
                                I am Full Stack Web Developer based in Asheville, North Carolina
                                <br />
                                I completed the Software Developement Certificate at Coding Dojo
                                <br/> and have and Associates of Science Degree from Pellissippi Community College.
                                
                            </p>
                        </div>
                    </section>





                    <section className='pageThree'>
                        {/* <div className='section-content'> */}
                        <div className='my-project'>
                            <h2 className='projectsTitle'>My Projects</h2>
                            <p className='text-display'>
                                <div className='seperate-cards'>
                                <div className='card'>
                                    <img 
                                        src={trip1} 
                                        alt="project"
                                        className='card-photo'></img>
                                    <p>Trip Wizard Travel</p>
                                </div>
                                <div className='card'>
                                    <img 
                                        src={trip1} 
                                        alt="project"
                                        className='card-photo'></img>
                                    <p>Potter's Potions</p>
                                </div>
                                </div>
                                <div className='seperate-cards'>
                                    <div className='card'></div>
                                    <div className='card'></div>
                                </div>
                            </p>
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
