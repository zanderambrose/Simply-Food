import React from 'react'
import '../../Styles/Navbar.css'
import BurgerMenu from '../../Images/BurgerMenu.png'
import img1 from '../../Images/SimplyFoodLogo.png'
import { useState } from 'react'
import MobileNavLinks from './MobileNavLinks'

function MobileNavigation() {

    const [open, setOpen] = useState(false)
    const closeMobile = () => {
        setOpen(false)
    }
    return (
        <div>
            <section className="responsiveNav">
                <img className="img1" src={img1} alt="food logo" />
                <img onClick={() => setOpen(!open)} className="burgerMenu" src={BurgerMenu} alt="menu" />
            </section>
            {open && <MobileNavLinks closeMobile={closeMobile} />}
        </div>
    )
}

export default MobileNavigation
