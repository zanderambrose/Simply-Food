import React from 'react'
import Input from './Input'
import { useEffect } from 'react'



function Pantry() {
    const myStyles = {
        textAlign: "center",
        margin: "0 auto",
        padding: "1rem 0",
        fontSize: "4rem",
        textDecoration: "underline",
        textTransform: "uppercase"
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="userInputContainer">
            <h1 style={myStyles}>What's In Your Pantry?</h1>
            <Input />
        </div>
    )
}

export default Pantry
