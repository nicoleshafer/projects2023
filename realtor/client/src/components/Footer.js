import React from 'react';
import "../Styling/Footer.css"

const Footer = () => {
    return (
        <div>
            {/* <div className='hr'>
                <hr/>
            </div> */}
            <div className='footer-container'>
                <div>
                    <h4>Company</h4>
                    <button>About</button>
                    <button>Work with me</button>
                    <button>Contact</button>
                    <button>Offices</button>
                    <button>Team</button>
                </div>
                <div>
                    <h4>Services</h4>
                    <button>Commercial</button>
                    <button>Relocation</button>
                    <button>Development Marketing</button>
                
                </div>
                <div>
                    <h4>Resources</h4>
                    <button>Neighborhood Guides</button>
                    <button>Buying/ Renting Guides</button>
                    <button>Market Reports</button>
                    <button>Lifestyles</button>
                </div>
            </div>
            <p className='copyright-section'>Made with love by Nicole Shafer</p>
        </div>
    );
}

export default Footer;
