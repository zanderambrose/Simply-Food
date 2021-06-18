import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import CategoryRender from './CategoryRender'
import AreaRender from './AreaRender'
import RandomRender from './RandomRender'
import '../../Styles/UserInputs.css'

const GetInspiredInput = () => {

    // State and functions for CATEGORY component
    const [categoryValue, setCategoryValue] = useState('')
    const [categoryPropValue, setCategoryPropValue] = useState('')

    const handleCategoryInputChange = (e) => {
        setCategoryValue(e.target.value)
    }

    const handleCategorySubmit = (e) => {
        e.preventDefault()
        setCategoryPropValue(categoryValue)
        setCategoryValue('')
    }

    // State and function for AREA component
    const [areaValue, setAreaValue] = useState('')
    const [areaPropValue, setAreaPropValue] = useState('')

    const handleAreaInputChange = (e) => {
        setAreaValue(e.target.value)
    }

    const handleAreaSubmit = (e) => {
        e.preventDefault()
        setAreaPropValue(areaValue)
        setAreaValue('')
    }

    // State and function for RANDOM component
    const [isRandomBtnClicked, setIsRandomBtnClicked] = useState(false)
    const [randomApiResult, setRandomApiResult] = useState([])
    const handleRandomBtnClick = async () => {
        setIsRandomBtnClicked(true)
        const fetchRandomApi = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        const randomApiData = await fetchRandomApi.data
        setRandomApiResult(randomApiData)
    }
    return (
        <div>
            {/* CATEGORY */}
            <section className="userInputContainer">
                <form className="userForm" onSubmit={handleCategorySubmit}>
                    <label className="userLabel" htmlFor="category-select">Get inspired by category!</label><br />
                    <select className="userSelect" value={categoryValue} onChange={handleCategoryInputChange} name="category" id="category-select">
                        <option value="">--Please choose an option--</option>
                        <option value="Beef">Beef</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Goat">Goat</option>
                        <option value="Lamb">Lamb</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Pork">Pork</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Side">Side</option>
                        <option value="Starter">Starter</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Vegetarian">Vegetarian</option>
                    </select>
                    <div>
                        <input type="submit" value="Submit" className="userInputSubmit" />
                    </div>
                </form>
                {categoryPropValue && <CategoryRender categoryPropValue={categoryPropValue} />}
            </section>

            {/* AREA */}
            <section className="userInputContainer">
                <form className="userForm" onSubmit={handleAreaSubmit}>
                    <label className="userLabel" htmlFor="area-select">Get inspired by area!</label><br />
                    <select className="userSelect" value={areaValue} onChange={handleAreaInputChange} name="area" id="area-select">
                        <option value="">--Please choose an option--</option>
                        <option value="American">American</option>
                        <option value="British">British</option>
                        <option value="Canadian">Canadian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Dutch">Dutch</option>
                        <option value="Egyptian">Egyptian</option>
                        <option value="French">French</option>
                        <option value="Greek">Greek</option>
                        <option value="Indian">Indian</option>
                        <option value="Irish">Irish</option>
                        <option value="Italian">Italian</option>
                        <option value="Jamaican">Jamaican</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Kenyan">Kenyan</option>
                        <option value="Malaysian">Malaysian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Moroccan">Moroccan</option>
                        <option value="Polish">Polish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Russian">Russian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Thai">Thai</option>
                        <option value="Tunisian">Tunisian</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Vietnamese">Vietnamese</option>
                    </select>
                    <div>
                        <button className="userInputSubmit" type="submit">Submit</button>
                    </div>
                </form>
                {areaPropValue && <AreaRender areaPropValue={areaPropValue} />}
            </section>

            {/* RANDOM */}
            <section className="userInputContainer">
                <p className="userLabel userForm">Get inspired by a random meal!</p>
                <div className="userBtnContainer">
                    <button className="userInputSubmit" onClick={handleRandomBtnClick} type="submit">Click button for random meal</button>
                </div>
                {isRandomBtnClicked && <RandomRender apiData={randomApiResult} />}
            </section>
        </div>
    )
}

export default GetInspiredInput
