import React from 'react'
import img1 from '../../Images/SimplyFoodLogo.png'
import NavLinks from './NavLinks'
import '../../Styles/Navbar.css'

function Navigation() {
    return (
        <div>
            <ul className="nav-list">
                <img className="img1" src={img1} alt="food logo" />
                <NavLinks />
            </ul>
        </div>
    )
}

export default Navigation
