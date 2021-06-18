import React from 'react'
import img1 from '../../Images/SimplyFoodLogo.png'
import NavLinks from './NavLinks'
import '../../Styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <ul className="nav-list">
                <Link to="/"><img className="img1" src={img1} alt="food logo" /></Link>
                <NavLinks />
            </ul>
        </div>
    )
}

export default Navigation
