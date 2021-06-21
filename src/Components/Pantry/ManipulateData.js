import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Styles/CardsDisplay.css'
import * as ReactBootstrap from 'react-bootstrap'


function DisplayData(props) {
    const string = props.saveState
    const [dataId, setDataId] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        let queryString = string.trim().replace(/,/gi, '').split(' ').join(',+')
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const fetchData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=4e345a393bbd462182c89705d3914f24&ingredients=${queryString}&number=4`)
                // Fetch api data and update data state if success
                if (fetchData.data.length !== 0) {
                    const dataArr = await fetchData.data
                    // Extract the data ID's for next api call
                    const dataIdArr = dataArr.map((item) => {
                        return item.id
                    })
                    // Make api call using the four ID's to get the recipe information
                    const fetchDataId = async () => {
                        try {
                            let containerArr = []
                            for await (const item of dataIdArr) {
                                const recipeSearchWithId = await axios.get(`https://api.spoonacular.com/recipes/${item}/information?apiKey=4e345a393bbd462182c89705d3914f24&includeNutrition=false`)
                                containerArr.push(recipeSearchWithId.data)
                            }
                            await setDataId(containerArr)
                            setLoading(false)

                        }
                        catch (error) {
                            alert(error)
                            setDataId(['Sorry no information'])
                            setLoading(false)
                        }
                    }
                    fetchDataId()
                } else {
                    // Update the data array so that if the search was unsuccessful, the error content can be rendered to the page
                    setDataId(["No data found.  Please try again."])
                }
            }
            catch (error) {
                alert(error)
            }
        }
        fetchProducts()
    }, [string])

    return (
        <div>
            <div className="spinnerContainer">
                {loading && <ReactBootstrap.Spinner animation="border" />}
            </div>
            <div className="cardsDisplayContainer">
                {dataId.map((item, index) => {
                    if (dataId.length === 4) {
                        return (
                            <div className="cardsItemContainer" href={item.sourceUrl} rel="noreferrer" target="_blank" key={item.id}>
                                <img className="manipulateDataImage" src={item.image} alt="The recipe" />
                                <h1 className="manipulateDataHeading">{item.title}</h1>
                                <a href={item.spoonacularSourceUrl} target='_blank' rel="noreferrer"><button>Click for Recipe</button></a>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className="errorContainer">
                                <h1>{dataId[0]}</h1>
                            </div>
                        )
                    }
                })}
            </div>
        </div>

    )


}

export default DisplayData
