import React from 'react'
import CocktailInput from './CocktailInput'

const Cocktail = () => {
    const myStyles = {
        textAlign: "center",
        margin: "1rem auto",
        fontSize: "4rem",
        textDecoration: "underline",
        textTransform: "uppercase",
    }
    return (
        <div>
            <h1 style={myStyles}>Make A Cocktail!</h1>
            <CocktailInput />
        </div>
    )
}

export default Cocktail
