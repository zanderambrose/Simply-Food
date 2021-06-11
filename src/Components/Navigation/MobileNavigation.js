import React from 'react'
import '../../Styles/Navbar.css'
import BurgerMenu from '../../Images/BurgerMenu.png'
import img1 from '../../Images/SimplyFoodLogo.png'
import { useState } from 'react'
import NavLinks from './NavLinks'

function MobileNavigation() {

    const [open, setOpen] = useState(false)
    return (
        <div>
            <section className="responsiveNav">
                <img className="img1" src={img1} alt="food logo" />
                <img className="burgerMenu" src={BurgerMenu} alt="menu" />
            </section>
            {open && <NavLinks />}
        </div>
    )
}

export default MobileNavigation
