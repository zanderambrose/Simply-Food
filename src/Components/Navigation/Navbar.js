import React from 'react'
import '../../Styles/Navbar.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

function Navbar() {

    return (
        <div>
            <Navigation />
            <MobileNavigation />
        </div>
    )
}

export default Navbar
