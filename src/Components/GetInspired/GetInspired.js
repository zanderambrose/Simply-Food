import React from 'react'
import GetInspiredInput from './GetInspiredInput'

const GetInspired = () => {
    const myStyles = {
        textAlign: "center",
        margin: "1rem auto",
        fontSize: "4rem",
        textDecoration: "underline",
        textTransform: "uppercase",
    }
    return (
        <div>
            <h1 style={myStyles}>Get Inspired!</h1>
            <GetInspiredInput />
        </div>
    )
}

export default GetInspired
