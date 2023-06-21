import React from 'react';
import {Link} from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <div className='footerSectionOne'>
                <div className='align'>
                <button className='headerBtn'>About Us</button>
                    <div className='footerBtn'>
                        <button>Our Company</button>
                        <button>Our Coffee</button>
                        <button>Stories and News</button>
                        <button>Starbucks Archive</button>
                        <button>Investor Relations</button>
                        <button>Customer Service</button>
                    </div>
                </div>

                <div className='align'>
                <button className='headerBtn'>Careers</button>
                <div className='footerBtn'>
                        <button>Culture and Values</button>
                        <button>Inclusion, Diversity, and Equity</button>
                        <button>College Achievement Plan</button>
                        <button>Alumni Community</button>
                        <button>U.S Careers</button>
                        <button>International Careers</button>
                    </div>
                </div>

                <div className='align'>
                <button className='headerBtn'>Social Impact</button>
                <div className='footerBtn'>
                        <button>People</button>
                        <button>Planet</button>
                        <button>Enviornmental and Social <br/>Impact Reporting</button>
                    </div>
                </div>
                <div className='align'>
                <button className='headerBtn'>For Business Partners</button>
                <div className='footerBtn'>
                        <button>Landlord Support Center</button>
                        <button>Suppliers</button>
                        <button>Corporate Gift Card Sales</button>
                        <button>Office and Foodservice Coffee</button>
                    </div>
                </div>
                <div className='align'>
                <button className='headerBtn'>Order and Pick Up</button>
                <div className='footerBtn'>
                        <button>Order on the App</button>
                        <button>Order on the Web</button>
                        <button>Delivery</button>
                        <button>Order and Pick Up Options</button>
                        <button>Explore and Find Coffee for Home</button>
                    </div>
                </div>
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
