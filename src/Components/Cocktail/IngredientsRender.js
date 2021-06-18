import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Styles/CardsDisplay.css'


const IngredientsRender = (props) => {
    const ingredientsInputValue = props.ingredientsPropValue.split(' ').join('_')
    const [apiResult, setApiResult] = useState([])
    useEffect(() => {
        const fetchIngredientsApi = async () => {
            try {
                // Get api result based on user input
                if (ingredientsInputValue) {
                    const ingredientsApiResult = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientsInputValue}`)
                    const ingredientsApiResultDataArr = (ingredientsApiResult.data.drinks)
                    // Map a new array to extract Ids for next api call using the Ids
                    const ingredientsApiResultDataIdArr = ingredientsApiResultDataArr.map(item => {
                        return item.idDrink
                    })
                    // Second api get request with the exctracted Id data
                    const fetchIdArr = async () => {
                        try {
                            let containerArr = []
                            for await (const item of ingredientsApiResultDataIdArr) {
                                const apiIdItem = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item}`)
                                containerArr.push(apiIdItem.data.drinks)
                            }
                            await setApiResult(containerArr)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                    fetchIdArr()
                }
            }
            catch (error) {
                console.log(error.response)
            }
        }
        fetchIngredientsApi()
    }, [ingredientsInputValue])

    return (
        <div className="cardsDisplayContainer">
            {apiResult.map(item => {
                return (
                    <div className="cardsItemContainer" key={item[0].idDrink}>
                        <img src={item[0].strDrinkThumb} alt="food thumbnail" />
                        <h1>{item[0].strDrink}</h1>
                    </div>
                )
            })}
        </div >

    )
}

export default IngredientsRender
