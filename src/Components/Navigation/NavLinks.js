import React from 'react'
import '../../Styles/Navbar.css'
import { Link } from 'react-router-dom'

function NavLinks() {
    return (

        <ul className='nav-list'>
            <Link to="/pantry"><li>Whats in your pantry?</li></Link>
            <Link to="/inspired"><li>Get Inspired</li></Link>
            <Link to="/cocktail"><li>Make a cocktail</li></Link>
        </ul>
    )
}

export default NavLinks
