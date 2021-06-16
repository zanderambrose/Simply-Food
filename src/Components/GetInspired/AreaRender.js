import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AreaRender = (props) => {
    const areaInputValue = props.areaPropValue
    const [apiResult, setApiResult] = useState([])
    useEffect(() => {
        const fetchAreaApi = async () => {
            try {
                // Get api result based on user input
                if (areaInputValue) {
                    const areaApiResult = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaInputValue}`)
                    const areaApiResultDataArr = (areaApiResult.data.meals)
                    // Map a new array to extract Ids for next api call using the Ids
                    const areaApiResultDataIdArr = areaApiResultDataArr.map(item => {
                        return item.idMeal
                    })
                    // Second api get request with the exctracted Id data
                    const fetchIdArr = async () => {
                        try {
                            let containerArr = []
                            for await (const item of areaApiResultDataIdArr) {
                                const apiIdItem = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`)
                                containerArr.push(apiIdItem.data.meals)
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
        fetchAreaApi()
    }, [areaInputValue])

    return (
        <div>
            {apiResult.map(item => {
                return (
                    <div key={item[0].idMeal}>
                        <h1>{item[0].strMeal}</h1>
                        <img src={item[0].strMealThumb} alt="food thumbnail" />
                    </div>
                )
            })}
        </div>
    )
}

export default AreaRender
