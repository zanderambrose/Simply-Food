import React from 'react'
import '../../Styles/Navbar.css'

function NavLinks() {
    return (
        <div className='nav-list'>
            {/* Spoonacular */}
            <li>Whats in your pantry?</li>
            {/* The mealDB */}
            <li>Get Inspired</li>
            {/* The cocktailDB */}
            <li>Make a cocktail</li>
        </div>
    )
}

export default NavLinks
