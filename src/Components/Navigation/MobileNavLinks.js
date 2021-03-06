import React from 'react'
import { Link } from 'react-router-dom'


function MobileNavLinks(props) {


    return (
        <div className="mobileNavContainer">
            <ul className="mobileNavLinks">
                <Link to="/pantry"><li onClick={() => props.closeMobile()} >Whats in your pantry</li></Link>
                <Link to="/inspired"><li onClick={() => props.closeMobile()}>Get inspired</li></Link>
                <Link to="/signup"><li onClick={() => props.closeMobile()}>Join the family</li></Link>
            </ul>
        </div>
    )
}

export default MobileNavLinks
