import React from 'react'
import '../../Styles/Footer.css'
import { FaFacebook, FaPinterest, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialLinks = () => {
    return (
        <div className="socialLinksContainer">
            <div className="socialIcons">
                <FaFacebook />
                <FaPinterest />
                <FaInstagram />
                <FaTwitter />
            </div>
            <div className="socialLinks">
                <ul>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Learn More</li>
                </ul>
            </div>
        </div>
    )
}

export default SocialLinks
