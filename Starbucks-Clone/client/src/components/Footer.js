import React from 'react';
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <div className='footerSectionOne'>
                <hr />
                <div className='footerOneWidth'>
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
                            <button>Enviornmental and Social <br />Impact Reporting</button>
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
            </div>
            <hr />



            <div className='footerSocialsContainer'>
                <i class="fa-brands fa-spotify fa-2xl"></i>
                <i class="fa-brands fa-facebook fa-2xl"></i>
                <i class="fa-brands fa-pinterest fa-2xl"></i>
                <i class="fa-brands fa-square-instagram fa-2xl"></i>
                <i class="fa-brands fa-youtube fa-2xl"></i>
                <i class="fa-brands fa-square-twitter fa-2xl"></i>
            </div>





            <div className='footerSectionTwo'>
                <div className='footerSectionTwoTop'>
                    <button>Privacy Notice</button>
                    <div> | </div>
                    <button>Terms of Use</button>
                    <div> | </div>
                    <button>Do Not Share My Personal Information</button>
                    <div> | </div>
                    <button>CA Supply Chain Act</button>
                    <div> | </div>
                    <button>Cookie Preferences </button>
                </div>
                <div className='footerSectionTwoBottom'>
                    <p> 2023 A Starbucks Coffee Company Clone by Nicole Shafer. </p>

                </div>
            </div>
        </div>
    );
}

export default Footer;
