import React from 'react'
import Icons from './Icons'
import '../../Styles/LandingPage.css'
import { Link } from 'react-scroll'

function LandingPage() {

    return (

        <div>
            <div className="landingPageContainer">
                <div className="headingContainer">
                    <h1>Meals Made Easy</h1>
                    <p>One stop shop for all meal planning needs</p>
                    <Link activeClass="active"
                        to="icons"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}><input type="button" value="Get Started" /></Link>
                </div>
            </div>
            <Icons id="icons" />

        </div>
    )
}

export default LandingPage
