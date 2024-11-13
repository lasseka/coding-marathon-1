import React from 'react';
import './RecipeManager.css';


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