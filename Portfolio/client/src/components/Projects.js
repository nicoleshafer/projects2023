import React, { useState } from 'react';
import Nav from "../components/Nav"
import logo1 from "../images/2.png"
import starbucks from "../images/starbs-clone.jpg"
import tripWizardTravel from "../images/tripWizard1.png"
import trip2 from "../images/tripwizard2.png"
import trip3 from "../images/tripwizard3.png"

const Projects = () => {

    const [toggleState, setToggleState] = useState(1);
    const [photoState, setPhotoState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const photoTab = (index) => {
        setPhotoState(index)
        console.log(index)
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

                                    <div className='entire-tab' >
                                        <div
                                            className={toggleState === 1 ? 'tabs active-tabs' : "tabs"}
                                            onClick={() => toggleTab(1)}>
                                            Trip Wizard Travel
                                        </div>

                                    </div>



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
                                    <div className={toggleState === 1 ? 'content active-content' : "content"}>

                                        <div className='projectCardAlign'>

                                            <div className={toggleState === 1 ? 'photo-tab active-photo' : 'project-photo-tab'}>
                                                <div className={photoState === 1 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(1)}>
                                                    Main Page
                                                </div>
                                                <div className={photoState === 2 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(2)}>
                                                    Explore Page</div>
                                                <div className={photoState === 3 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(3)}>
                                                    Destinations Page</div>
                                            </div>
                                            
                                            <div className={photoState === 1 ? 'photo-content active-photo-content' : "photo-content"} >
                                            <div>
                                                <h3>Trip Wizard Travel</h3>
                                                <p> A different travel experience where you can browse different Harry Potter related destinations.</p>
                                                <p>Made with:</p>
                                                <p>React | Javascript | MongoDB | Css</p>
                                            </div>
                                                <img
                                                    src={tripWizardTravel}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>

                                            <div className={photoState === 2 ? 'photo-content active-photo-content' : "photo-content"}>
                                            <div>
                                                <h3>Trip Wizard Travel</h3>
                                                <p>The explore page where you can browse different destitations.</p>
                                                <p> Made with: React | Javascript | MongoDB | Css</p>
                                            </div>
                                                <img
                                                    src={trip2}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>
                                            <div className={photoState === 3 ? 'photo-content active-photo-content' : "photo-content"}>
                                                <img
                                                    src={trip3}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                                <div className='content-tabs'>
                                    <div className={toggleState === 2 ? 'content active-content' : "content"}>

                                        <div className='projectCardAlign'>

                                            <div className={toggleState === 2 ? 'photo-tab active-photo' : 'project-photo-tab'}>
                                                <div className={photoState === 1 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(1)}>
                                                    Main Page
                                                </div>
                                                <div className={photoState === 2 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(2)}>
                                                    Login and Registation</div>
                                                <div className={photoState === 3 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(3)}>
                                                    TBA</div>
                                            </div>
                                            <div>
                                                <h3>Starbucks Clone</h3>
                                                <p> A clone of the June 2023 Starbucks website.</p>
                                                <p>Made with:</p>
                                                <p>React | Javascript | MongoDB | Css</p>
                                            </div>
                                            <div className={photoState === 1 ? 'photo-content active-photo-content' : "photo-content"} >
                                                <img
                                                    src={starbucks}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>

                                            <div className={photoState === 2 ? 'photo-content active-photo-content' : "photo-content"}>
                                                <img
                                                    src={trip2}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>
                                            <div className={photoState === 3 ? 'photo-content active-photo-content' : "photo-content"}>
                                                <img
                                                    src={trip3}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>

                                        </div>
                                    </div>
                                </div>







                                <div className='content-tabs'>
                                    <div className={toggleState === 3 ? 'content active-content' : "content"}>

                                        <div className='projectCardAlign'>

                                            <div className={toggleState === 3 ? 'photo-tab active-photo' : 'project-photo-tab'}>
                                                <div className={photoState === 1 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(1)}>
                                                    Main Page
                                                </div>
                                                <div className={photoState === 2 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(2)}>
                                                    Review</div>
                                                <div className={photoState === 3 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(3)}>
                                                    TBA</div>
                                                <div className={photoState === 4 ? 'photo-tab active-photo-tabs' : "photo-tab"}
                                                    onClick={() => photoTab(4)}>
                                                    Information</div>
                                            </div>
                                            <div>
                                                <h3>Potter's Potions</h3>
                                                <p> A mock website of a Coffee Shop and Brewry.</p>
                                                <p>Made with:</p>
                                                <p>React | Javascript | MongoDB | Css</p>
                                            </div>
                                            <div className={photoState === 1 ? 'photo-content active-photo-content' : "photo-content"} >
                                                <img
                                                    src={starbucks}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>

                                            <div className={photoState === 2 ? 'photo-content active-photo-content' : "photo-content"}>
                                                <img
                                                    src={trip2}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>
                                            <div className={photoState === 3 ? 'photo-content active-photo-content' : "photo-content"}>
                                                <img
                                                    src={trip3}
                                                    alt="project"
                                                    className='card-photo-projects-page'></img>
                                            </div>
                                            <div className={photoState === 4 ? 'photo-content active-photo-content ' : "photo-content"}>
                                                Info
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
