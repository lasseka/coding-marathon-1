import React from 'react';
import './RecipeManager.css';

/* The component is well-structured, with clear sections for different parts of each recipe (title, ingredients, instructions, and delete button). 
Each section (like ingredients and instructions) is visually separated and logically grouped, making the code easier to read and understand. 
I am proud of this because it is easy for others to read. In addition, updating this is easy due to the clarity.*/


function Recipe({ recipe, deleteRecipe }) {
    return (
        <div className="recipe-card">
            <h3 className="title">{recipe.name}</h3>
            
            <div className="recipe-content">
                
                <div className="ingredients">
                    <label>Ingredients:</label>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="instructions">
                    <label>Instructions:</label>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>

            <button className="delete-btn" onClick={() => deleteRecipe(recipe.id)}>
                Delete Recipe
            </button>
        </div>
    );
}

export default Recipe;