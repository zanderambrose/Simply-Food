import React from 'react'
import '../Styles/Icons.css'
import PantryImg from '../Images/Pantry.jpg'
import GetInspired from '../Images/Get-Inspired.jpg'
import Cocktail from '../Images/Cocktail.jpg'

function Icons() {
    return (
        <div>
            <div className="icons">
                <div className="iconCard">
                    <img className="iconImg" src={PantryImg} alt='Pantry Image' />
                    <h3>Whats in your pantry?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="iconCard">
                    <img className="iconImg" src={GetInspired} alt="burger and fries image" />
                    <h3>Get Inspired</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="iconCard">
                    <img className="iconImg" src={Cocktail} alt="cocktail image" />
                    <h3>Make a cocktail</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Icons
