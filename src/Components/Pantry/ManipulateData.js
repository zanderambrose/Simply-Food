import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayData(props) {
    const string = props.saveState
    const [data, setData] = useState([])

    useEffect(() => {
        let queryString = string.trim().replace(/,/gi, '').split(' ').join(',+')
        const fetchProducts = async () => {
            try {
                const fetchData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=4e345a393bbd462182c89705d3914f24&ingredients=${queryString}&number=4`)
                if (fetchData.data.length !== 0) {
                    const dataArr = await fetchData.data
                    setData(dataArr)
                } else {
                    const dataArr = ["No data found.  Please try again."]
                    setData(dataArr)
                }
            }
            catch (error) {
                console.log("catch statement", error)
            }
        }
        fetchProducts()
    }, [string])

    return (
        <div>
            {data.map(((item, idx) => {
                if (data.length > 1) {
                    return (
                        <div key={item.id} className="displayContainer">
                            <div className="displayData">
                                <h1>{item.title}</h1>
                                <img src={item.image} alt="displayed food images" />
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={idx}>
                            <h1>{data[0]}</h1>
                        </div>
                    )
                }
            }))}
        </div>
    )


}

export default DisplayData
