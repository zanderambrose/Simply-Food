import React from 'react'
import '../Styles/Navbar.css'
import img1 from '../Images/SimplyFoodLogo.png'
import BurgerMenu from '../Images/BurgerMenu.png'

function Navbar() {

    const burgerClick = () => {

    }
    return (
        <div>
            <nav className="navigation">
                <ul className="nav-list">
                    <img className="img1" src={img1} alt="food logo" />
                    {/* Spoonacular */}
                    <li>Whats in your pantry?</li>
                    {/* The mealDB */}
                    <li>Get Inspired</li>
                    {/* The cocktailDB */}
                    <li>Make a cocktail</li>
                </ul>
                <section className="responsiveNav">
                    <img className="img1" src={img1} alt="food logo" />
                    <img onClick={burgerClick} className="burgerMenu" src={BurgerMenu} alt="menu" />
                </section>
            </nav>
        </div>
    )
}

export default Navbar
