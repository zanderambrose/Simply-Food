import React from 'react'
import { useState, useEffect } from 'react'
import '../../Styles/CardsDisplay.css'



const RandomRender = (props) => {
    const apiResult = props.apiData
    const [displayApiData, setDisplayApiData] = useState([])
    useEffect(() => {
        if (apiResult.length !== 0) {
            setDisplayApiData(apiResult.meals)
        }
    }, [apiResult])

    return (
        <div className="cardsDisplayContainer randomMealContainer">
            {displayApiData.map((item) => {
                return (
                    <div className="cardsItemContainer" key={item.idMeal}>
                        <img src={item.strMealThumb} alt="food thumbnail" />
                        <h1>{item.strMeal}</h1>
                        <a href={item.strSource} target='_blank' rel="noreferrer"><button>Click for Recipe</button></a>
                    </div>
                )
            })}
        </div>
    )
}

export default RandomRender
