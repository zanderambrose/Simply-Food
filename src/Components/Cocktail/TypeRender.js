import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Styles/CardsDisplay.css'
import * as ReactBootstrap from 'react-bootstrap'
// import { Modal } from 'react-bootstrap'

const TypeRender = (props) => {
    const typeInputValue = props.typePropValue.split(' ').join('_')
    const [apiResult, setApiResult] = useState([])
    const [loading, setLoading] = useState(false)
    // const [modal, setModal] = useState(false)
    useEffect(() => {
        const fetchTypeApi = async () => {
            try {
                setLoading(true)
                // Get api result based on user input
                if (typeInputValue) {
                    const typeApiResult = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${typeInputValue}`)
                    const typeApiResultDataArr = (typeApiResult.data.drinks)
                    // Map a new array to extract Ids for next api call using the Ids
                    const typeApiResultDataIdArr = typeApiResultDataArr.map(item => {
                        return item.idDrink
                    })
                    // Second api get request with the exctracted Id data
                    const fetchIdArr = async () => {
                        try {
                            let containerArr = []
                            for await (const item of typeApiResultDataIdArr) {
                                const apiIdItem = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item}`)
                                containerArr.push(apiIdItem.data.drinks)
                            }
                            await setApiResult(containerArr)
                            setLoading(false)
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
        fetchTypeApi()
    }, [typeInputValue])

    return (
        <div>
            <div className="spinnerContainer">
                {loading && <ReactBootstrap.Spinner animation="border" />}
            </div>
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
        </div>
    )
}

export default TypeRender
