import React from 'react';
import logo1 from "../images/2.png"
import {useNavigate} from "react-router-dom"

const Nav = () => {
    const navigate = useNavigate()
    
    const Home = (e) =>{
        navigate("/")
    }

    const projectsButton = (e) =>{
        navigate("/projects")
    }
    return (
        <div>
           <div className='secondaryNavBar'>
               
                    <div>
                        <img
                            src={logo1}
                            alt="logo"
                            className='logo'>
                        </img>
                    </div>
                <div>
                    <button onClick={Home}>Home</button>
                    <button>Resume</button>
                    <button>Contact</button>
                    <button onClick={projectsButton}>Projects</button>

                </div>
                </div>
        </div>
    );
}

export default Nav;
