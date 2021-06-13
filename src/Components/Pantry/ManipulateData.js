import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayData(props) {
    const string = props.saveState
    const [data, setData] = useState([])

    useEffect(() => {
        let queryString = string.trim().replace(/,/gi, '').split(' ').join(',+')
        const fetchProducts = async () => {
            const fetchData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=4e345a393bbd462182c89705d3914f24&ingredients=${queryString}&number=4`)
            const dataArr = fetchData.data
            setData(dataArr)
        }
        fetchProducts()
    }, [string])

    return (
        <div>
            {console.log(data)}
            {data.map((item => {
                return (
                    <div key={item.id} className="displayData">
                        <h1>{item.title}</h1>
                        <img src={item.image} alt="displayed food images" />
                    </div>
                )
            }))}
        </div>
    )


}

export default DisplayData
