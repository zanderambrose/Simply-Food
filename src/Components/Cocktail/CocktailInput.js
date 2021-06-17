import React from 'react'
import { useState } from 'react'
import TypeRender from './TypeRender'
import IngredientsRender from './IngredientsRender'

const CocktailInput = () => {
    // State and functions for TYPE component
    const [typeValue, setTypeValue] = useState('')
    const [typePropValue, setTypePropValue] = useState('')

    const handleTypeInputChange = (e) => {
        setTypeValue(e.target.value)
    }

    const handleTypeSubmit = (e) => {
        e.preventDefault()
        setTypePropValue(typeValue)
        setTypeValue('')
    }

    // State and functions for INGREDIENTS component
    const [ingredientsValue, setIngredientsValue] = useState('')
    const [ingredientsPropValue, setIngredientsPropValue] = useState('')

    const handleIngredientsInputChange = (e) => {
        setIngredientsValue(e.target.value)
    }

    const handleIngredientsSubmit = (e) => {
        e.preventDefault()
        setIngredientsPropValue(ingredientsValue)
        setIngredientsValue('')
    }


    return (
        <div>
            {/* TYPE */}
            <section>
                <form onSubmit={handleTypeSubmit}>
                    <label>What type of drink would you like to make?</label><br />
                    <select onChange={handleTypeInputChange} value={typeValue}>
                        <option value="">--Please Choose an Option--</option>
                        <option value="Ordinary Drink">Ordinary Drink</option>
                        <option value="Cocktail">Cocktail</option>
                        <option value="Cocoa">Cocoa</option>
                        <option value="Shot">Shot</option>
                        <option value="Homemade Liqueur">Homemade Liqueur</option>
                        <option value="Beer">Beer</option>
                    </select>
                    <div>
                        <input type="submit" value="Submit" className="typeInputSubmit" />
                    </div>
                </form>
                {typePropValue && <TypeRender typePropValue={typePropValue} />}
            </section>

            {/* INGREDIENTS */}
            <section>
                <form onSubmit={handleIngredientsSubmit}>
                    <label>What ingredient do you have?</label><br />
                    <select onChange={handleIngredientsInputChange} value={ingredientsValue}>
                        <option value="">--Please Choose an Option--</option>
                        <option value="Light rum">Light rum</option>
                        <option value="Applejack">Applejack</option>
                        <option value="Gin">Gin</option>
                        <option value="Dark rum">Dark rum</option>
                        <option value="Sweet Vermouth">Sweet Vermouth</option>
                        <option value="Strawberry schnapps">Strawberry schnapps</option>
                        <option value="Scotch">Scotch</option>
                        <option value="Apricot brandy">Apricot brandy</option>
                        <option value="Triple sec">Triple sec</option>
                        <option value="Southern Comfort">Southern Comfort</option>
                        <option value="Orange bitters">Orange bitters</option>
                        <option value="Brandy">Brandy</option>
                        <option value="Lemon vodka">Lemon vodka</option>
                        <option value="Blended whiskey">Blended whiskey</option>
                        <option value="Dry Vermouth">Dry Vermouth</option>
                        <option value="Amaretto">Amaretto</option>
                        <option value="Tea">Tea</option>
                        <option value="Champagne">Champagne</option>
                        <option value="Coffee liqueur">Coffee liqueur</option>
                        <option value="Bourbon">Bourbon</option>
                        <option value="Tequila">Tequila</option>
                        <option value="Vodka">Vodka</option>
                        <option value="Añejo rum">Añejo rum</option>
                        <option value="Bitters">Bitters</option>
                        <option value="Sugar">Sugar</option>
                        <option value="Kahlua">Kahlua</option>
                        <option value="Watermelon">Watermelon</option>
                        <option value="Lime juice">Lime juice</option>
                        <option value="Irish whiskey">Irish whiskey</option>
                        <option value="Apple brandy">Apple brandy</option>
                        <option value="Carbonated water">Carbonated water</option>
                        <option value="Cherry brandy">Cherry brandy</option>
                        <option value="Grenadine">Grenadine</option>
                        <option value="Port">Port</option>
                        <option value="Red wine">Red wine</option>
                        <option value="Rum">Rum</option>
                        <option value="Sherry">Sherry</option>
                        <option value="Cognac">Cognac</option>
                        <option value="Apple juice">Apple juice</option>
                        <option value="Pineapple juice">Pineapple juice</option>
                        <option value="Milk">Milk</option>
                        <option value="Peach Vodka">Peach Vodka</option>
                        <option value="Spiced rum">Spiced rum</option>
                        <option value="Whiskey">Whiskey</option>
                        <option value="Irish cream">Irish cream</option>
                        <option value="Sambuca">Sambuca</option>
                    </select>
                    <div>
                        <input type="submit" value="Submit" className="ingredientInputSubmit" />
                    </div>
                </form>
                {ingredientsPropValue && <IngredientsRender ingredientsPropValue={ingredientsPropValue} />}
            </section>
        </div>
    )
}

export default CocktailInput
