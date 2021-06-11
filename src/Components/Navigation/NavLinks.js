import React from 'react'
import '../../Styles/Navbar.css'

function NavLinks() {
    return (

        <ul className='nav-list'>
            {/* Spoonacular */}
            <li>Whats in your pantry?</li>
            {/* The mealDB */}
            <li>Get Inspired</li>
            {/* The cocktailDB */}
            <li>Make a cocktail</li>
        </ul>
    )
}

export default NavLinks
