import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Styles/CardsDisplay.css'
import * as ReactBootstrap from 'react-bootstrap'
import { Button, Modal } from 'react-bootstrap'

const IngredientsRender = (props) => {
    const ingredientsInputValue = props.ingredientsPropValue.split(' ').join('_')
    const [apiResult, setApiResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)

    const handleModalBtn = () => {
        setModal(true)
    }

    const handleModalExit = () => {
        setModal(false)
    }

    useEffect(() => {
        const fetchIngredientsApi = async () => {
            try {
                setLoading(true)
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
        fetchIngredientsApi()
    }, [ingredientsInputValue])

    return (
        <div>
            <div className="spinnerContainer">
                {loading && <ReactBootstrap.Spinner animation="border" />}
            </div>
            <div className="cardsDisplayContainer">
                {console.log(apiResult)}
                {apiResult.map(item => {
                    return (
                        <div className="cardsItemContainer" key={item[0].idDrink}>
                            <img src={item[0].strDrinkThumb} alt="food thumbnail" />
                            <h1>{item[0].strDrink}</h1>
                            <Button onClick={handleModalBtn}>Click for recipe</Button>
                            <Modal show={modal}>
                                <Modal.Header>{item[0].strDrink}</Modal.Header>
                                <Modal.Body>{item[0].strInstructions}</Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={handleModalExit}>Exit</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )
                })}
            </div >
        </div >

    )
}

export default IngredientsRender
