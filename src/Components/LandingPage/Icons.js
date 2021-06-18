import React from 'react'
import '../../Styles/Icons.css'
import PantryImg from '../../Images/Pantry.jpg'
import GetInspired from '../../Images/Get-Inspired.jpg'
import Cocktail from '../../Images/Cocktail.jpg'
import { Link } from 'react-router-dom'

function Icons() {
    return (
        <div>
            <div className="icons">
                <div className="iconCard"><Link to="/pantry">
                    <img className="iconImg" src={PantryImg} alt='Pantry' />
                    <h3>Whats in your pantry</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Link>
                </div>
                <div className="iconCard"><Link to="/inspired">
                    <img className="iconImg" src={GetInspired} alt="burger and fries" />
                    <h3>Get Inspired</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Link>
                </div>
                <div className="iconCard"><Link to="/cocktail">
                    <img className="iconImg" src={Cocktail} alt="cocktail" />
                    <h3>Make a cocktail</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Icons
