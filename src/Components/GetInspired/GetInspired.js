import React from 'react'
import GetInspiredInput from './GetInspiredInput'
import { useEffect } from 'react'

const GetInspired = () => {
    const myStyles = {
        textAlign: "center",
        margin: "0 auto",
        padding: "1rem 0",
        fontSize: "4rem",
        textDecoration: "underline",
        textTransform: "uppercase",
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <h1 style={myStyles}>Get Inspired!</h1>
            <GetInspiredInput />
        </div>
    )
}

export default GetInspired
