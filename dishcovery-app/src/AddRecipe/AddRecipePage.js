import React, { useState } from "react";
import './AddRecipePage.css';
import HeaderPage from "../Header/HeaderPage";

function AddRecipePage() {
    const [recipe, setRecipe] = useState({
        name: "",
        description: "",
        ingredients: "",
        image: "",
    });
    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Recipe Submitted:", recipe);
        alert("Recipe Submitted Successfully!...")
    };
    return (
        <div>
            <HeaderPage />
            <div className="add-recipe-container">
                <h2>Write a New Recipe</h2>
            </div>
            <div className="add-recipe-card">
                <form onSubmit={handleSubmit} className="form-card">
                    <label>Recipe Name:</label>
                    <input
                        type="textarea"
                        placeholder="Enter Recipe Name...."
                        name="name"
                        value={recipe.name}
                        onChange={handleChange} />
                    <label>Description:</label>
                    <textarea
                        type="textarea"
                        placeholder="Description...."
                        name="name"
                        value={recipe.description}
                        onChange={handleChange}>
                    </textarea>
                    <label>Ingredients:</label>
                    <textarea
                        type="textarea"
                        placeholder="Ingredients..."
                        name="name"
                        value={recipe.name}
                        onChange={handleChange}>
                    </textarea>
                    <label>Images:</label>
                    <button type="submit">Submit Recipe</button>
                </form>
            </div>
        </div>
    );
}

export default AddRecipePage;