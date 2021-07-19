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
                    <p>Enter the ingredients you have in your pantry and we will send you back a list of recipes to try out!</p>
                    <button className="iconsBtn">Get Started</button>
                </Link>
                </div>
                <div className="iconCard"><Link to="/inspired">
                    <img className="iconImg" src={GetInspired} alt="burger and fries" />
                    <h3>Get Inspired</h3>
                    <p>Get inpsired with meal ideas based on the type of meal or cuisine you would like to try.  You can even click for a random meal!</p>
                    <button className="iconsBtn">Get Started</button>
                </Link>
                </div>
                <div className="iconCard"><Link to="/signup">
                    <img className="iconImg" src={Cocktail} alt="cocktail" />
                    <h3>Join the Family</h3>
                    <p>Sign up to recieve exclusive offers and discount prices.  Don't miss out on the best we have to offer! </p>
                    <button className="iconsBtn">Get Started</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Icons
