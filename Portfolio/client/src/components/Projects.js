import React from 'react';
import Nav from "../components/Nav"
import logo1 from "../images/2.png"


const Projects = () => {
    return (
        <div>
            <div className='secondaryPageBody'>
                <div className='secondaryPageContainer'>
                    <div>
                        <Nav />
                    </div>
                    <div className='information-section'>
                        <div>
                            <h2>My Projects</h2>
                        </div>
                        <div>
                            <div className='projectCardAlign'>
                                <div className='card'></div>
                                <div>
                                    <h3>Trip Wizard Travel</h3>
                                    <p> A different travel experience where you can browse different Harry Potter related destinations.</p>
                                    <p>Made with:</p>
                                    <p>React | Javascript | MongoDB | Css</p>
                                </div>
                            </div>



                            <div className='projectCardAlign'>
                                <div className='card'></div>
                                <div>
                                    <h3>Trip Wizard Travel</h3>
                                    <p> A different travel experience where you can browse different Harry Potter related destinations.</p>
                                    <p>Made with:</p>
                                    <p>React | Javascript | MongoDB | Css</p>
                                </div>
                            </div>



                            <div className='projectCardAlign'>
                                <div className='card'></div>
                                <div>
                                    <h3>Trip Wizard Travel</h3>
                                    <p> A different travel experience where you can browse different Harry Potter related destinations.</p>
                                    <p>Made with:</p>
                                    <p>React | Javascript | MongoDB | Css</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
