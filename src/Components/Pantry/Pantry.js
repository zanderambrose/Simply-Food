import React from 'react'
import Input from './Input'
// import '../../Styles/WhatsInYourPantry.css'



function Pantry() {
    const myStyles = {
        textAlign: "center",
        margin: "1rem auto",
        fontSize: "4rem",
        textDecoration: "underline",
        textTransform: "uppercase",
    }
    return (
        <div className="userInputContainer">
            <h1 style={myStyles}>What's In Your Pantry?</h1>
            <Input />
        </div>
    )
}

export default Pantry
