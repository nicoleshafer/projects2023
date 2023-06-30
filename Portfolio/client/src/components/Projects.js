import React, { useState } from 'react';
import Nav from "../components/Nav"
import logo1 from "../images/2.png"
import starbucks from "../images/starbs-clone.jpg"
import tripwizardtravel from "../images/tripWizard1.png"


const Projects = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }


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
                            <div className='tab-container'>
                                <div className='block-tabs'>
                                    <div
                                        className={toggleState === 1 ? 'tabs active-tabs' : "tabs"}
                                        onClick={() => toggleTab(1)}>
                                            Trip Wizard Travel</div>
                                    <div
                                        className={toggleState === 2 ? 'tabs active-tabs' : "tabs"}
                                        onClick={() => toggleTab(2)}>
                                            Starbucks Clone</div>
                                    <div
                                        className={toggleState === 3 ? 'tabs active-tabs' : "tabs"}
                                        onClick={() => toggleTab(3)}>
                                            Potter's Potions</div>
                                </div>

                                <div className='content-tabs'>
                                    <div
                                        className={toggleState === 1 ? 'content active-content' : "content"}>

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




                                <div className='content-tabs'>
                                    <div
                                        className={toggleState === 2 ? 'content active-content' : "content"}>
                                        <div className='projectCardAlign'>
                                            <div className='card'></div>
                                            <div>
                                                <h3>Starbucks Clone</h3>
                                                <p> A different travel experience where you can browse different Harry Potter related destinations.</p>
                                                <p>Made with:</p>
                                                <p>React | Javascript | MongoDB | Css</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-tabs'>
                                    <div
                                        className={toggleState === 3 ? 'content active-content' : "content"}>
                                        <div className='projectCardAlign'>
                                            <div className='card'></div>
                                            <div>
                                                <h3>Potter's Potions</h3>
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

                </div>

            </div>
        </div>
    );
}

export default Projects;
