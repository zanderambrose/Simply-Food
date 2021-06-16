import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CategoryRender = (props) => {
    const categoryInputValue = props.categoryPropValue
    const [apiResult, setApiResult] = useState([])
    useEffect(() => {
        const fetchCategoryApi = async () => {
            try {
                // Get api result based on user input
                if (categoryInputValue) {
                    const categoryApiResult = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryInputValue}`)
                    const categoryApiResultDataArr = (categoryApiResult.data.meals)
                    // Map a new array to extract Ids for next api call using the Ids
                    const categoryApiResultDataIdArr = categoryApiResultDataArr.map(item => {
                        return item.idMeal
                    })
                    // Second api get request with the exctracted Id data
                    const fetchIdArr = async () => {
                        try {
                            let containerArr = []
                            for await (const item of categoryApiResultDataIdArr) {
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
        fetchCategoryApi()
    }, [categoryInputValue])

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

export default CategoryRender
