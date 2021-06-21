import React from 'react'
import '../../Styles/Footer.css'

const CallToAction = () => {
    return (
        <div className="cta">
            <div className="ctaHeading">
                <h1>JOIN OUR SIMPLY FOOD FAMILY</h1>
                <p>Stay up to date with our newest features and special promotions </p>
            </div>
            <div className="ctaEmail">
                <input type="text" placeholder="Enter your email address" />
                <button>Sign Me Up</button>
            </div>
        </div>
    )
}

export default CallToAction
