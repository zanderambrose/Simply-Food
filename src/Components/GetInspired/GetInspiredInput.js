import React from 'react'

const GetInspiredInput = () => {
    return (
        <div>
            <section>
                <form>
                    <label for="category-select">Get inspired by category!</label>
                    <select name="category" id="category-select">
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
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {/* Render Results using && */}
            </section>

            <section>
                <form>
                    <label for="area-select">Get inspired by area!</label>
                    <select name="area" id="area-select">
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
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {/* Render Results using && */}
            </section>

            <section>
                <p>Get inspired by a random meal!</p>
                <button type="submit">Click button for random meal</button>
                {/* Render Results using && */}
            </section>
        </div>
    )
}

export default GetInspiredInput
