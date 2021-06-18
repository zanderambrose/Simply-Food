import React from 'react'
import Icons from './Icons'
import '../../Styles/LandingPage.css'

function LandingPage() {

    return (

        <div>
            <div className="landingPageContainer">
                <div className="headingContainer">
                    <h1>Meals Made Easy</h1>
                    <p>One stop shop for all meal planning needs</p>
                    <input type="button" value="Get Started" />
                </div>
            </div>
            <Icons id="icons" />

        </div>
    )
}

export default LandingPage
