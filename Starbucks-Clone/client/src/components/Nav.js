import React from 'react';
import {Link} from "react-router-dom"
import logo from "../nav-images/starbucks-logo.png"
import MapMarker from "../nav-images/map-marker.png"

const Nav = () => {
    return (
        <div>
            <div className='navBar'>
                <div className='leftSide-Nav'>
                    <img src={logo} alt="logo" className='logo'></img>
                    <Link to='/menu' className='navLink'>MENU</Link>
                    <Link to="/rewards" className='navLink'>REWARDS</Link>
                    <Link to="/gift-cards" className='navLink'>GIFT CARDS</Link>
                </div>
                <div className='rightSide-Nav'>
                    <div className='navFlex mapMarker'>
                        <img src={MapMarker} alt="map marker" className='mapMarker'></img>
                        <Link to="/store-locater" className='navLink'>Find a store</Link>
                    </div>
                    <button className='navBtn-SignUp btnStandard'>Sign in</button>
                    <button className='navBtn-Join btnStandard'>Join now</button>
                </div>
            </div>
                <hr />
        </div>
    );
}

export default Nav;
