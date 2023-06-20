import React from 'react';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <div className='footerSectionOne'>
                <div>About Us</div>
                <div>Careers</div>
                <div>Social Impact</div>
                <div>For Business Partners</div>
                <div>Order and Pick Up</div>
            </div>
            <div className='footerSocials'></div>
            <div className='footerSectionTwo'>
                <Link></Link>
            </div>
        </div>
    );
}

export default Footer;
