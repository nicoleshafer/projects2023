import React from 'react';
import { useNavigate } from 'react-router-dom'
import nicole from "../images/nicole.jpg"
import logo1 from "../images/2.png"
import trip1 from "../images/tripWizard1.png"
import Typewriter from "typewriter-effect"
import starbucks from "../images/starbs-clone.jpg"
import me1 from "../images/me-1.JPG"
import me2 from "../images/me-2.jpg"
import me3 from "../images/me-3.JPG"
import me4 from "../images/me-4.jpg"
import potters from "../images/potter-potions.png"



const Body = () => {
    const navigate = useNavigate()

    const projectsButton = (e) => {
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
                    <button>Contact</button>
                    <button onClick={projectsButton}>Projects</button>

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
                                            onInit={(typewriter) => {
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

                                            }} />
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

                                <div className='photo-display'>
                                    <img src={me1} alt="Nicole" className='about-photo'></img>
                                    <img src={me2} alt="Nicole" className='about-photo'></img>
                                    <img src={me3} alt="Nicole" className='about-photo'></img>
                                    <img src={me4} alt="Nicole" className='about-photo'></img>
                                </div>
                                <p className='text-display'>
                                    Hello, I'm Nicole Shafer!<br />
                                </p>
                                <div className='about-me'>
                                    <p className='text-display'>
                                        A passionate full stack web developer fueled by a passion for exploring both the virtual and physical worlds.
                                        <br /> My journey as a web developer began with a fascination for coding and a desire to bring ideas to life.
                                        I am proficient in HTML, CSS, and JavaScript. I strive to deliver engaging online experiences that captivate and inspire.
                                        <br />
                                        <br />
                                        Travel is my ultimate source of inspiration.
                                        I'm thrilled to combine my passion for travel, love for cats, zest for new experiences,
                                        <br /> fascination with Harry Potter, and enthusiasm for hiking into my web development journey.
                                        <br />
                                        <br />Let's collaborate and create digital experiences that transport users to new realms and leave a lasting impact.
                                    </p>
                                    <div className='about-me-icons'>
                                        <div>
                                            <i class="fa-solid fa-location-dot fa-lg"></i>
                                            Asheville, NC
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-graduation-cap fa-lg"></i> Software Developement Certificate |  Coding Dojo
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-graduation-cap fa-lg"></i>  Associates of Science Degree | Pellissippi Community College
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className='hobby-icons'>
                                    <i class="fa-solid fa-person-hiking fa-xl"></i>
                                    <i class="fa-solid fa-bolt fa-xl"></i>
                                    <i class="fa-solid fa-cat fa-xl"></i>
                                    <i class="fa-solid fa-code fa-xl"></i>
                                    <i class="fa-solid fa-plane fa-xl"></i>

                                </div>
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
                                                className='card-photo'
                                                onClick={projectsButton}></img>
                                            <p>Trip Wizard Travel</p>
                                        </div>
                                    </div>

                                    <div className='card'>
                                        <div className='card'>
                                            <img
                                                src={starbucks}
                                                alt="project"
                                                className='card-photo'
                                                onClick={projectsButton}></img>
                                            <p>Starbucks Clone</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='seperate-cards'>
                                    <div className='card'>
                                        <div className='card'>
                                            <img
                                                src={potters}
                                                alt="project"
                                                className='card-photo'
                                                onClick={projectsButton}></img>
                                            <p>Potter's Potions</p>
                                        </div>
                                    </div>

                                    <div className='card'>
                                        <div className='card'>
                                            <img
                                                src={trip1}
                                                alt="project"
                                                className='card-photo'
                                                onClick={projectsButton}></img>
                                            <p>Calendar App</p>
                                        </div>
                                    </div>

                                </div>
                                <button onClick={projectsButton}>More Projects</button>
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
                            {/* Contact */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Body;
