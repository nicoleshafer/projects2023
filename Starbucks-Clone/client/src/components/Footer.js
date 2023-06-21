import React from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
            <hr />
            <div className='footerSocials'>
            <i class="fa-brands fa-spotify fa-2xl"></i>
            </div>
            <div className='footerSectionTwo'>
                <Link></Link>
            </div>
        </div>
    );
}

export default Footer;
