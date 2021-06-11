import React from 'react'


function MobileNavLinks(props) {


    return (
        <div className="mobileNavContainer">
            <ul className="mobileNavLinks">
                <li onClick={() => props.closeMobile()} >Whats in your pantry</li>
                <li onClick={() => props.closeMobile()}>Get inspired</li>
                <li onClick={() => props.closeMobile()}>Make a cocktail</li>
            </ul>
        </div>
    )
}

export default MobileNavLinks
