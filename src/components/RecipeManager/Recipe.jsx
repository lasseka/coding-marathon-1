import React from 'react';

function Recipe({ recipe, deleteRecipe }) {
    return (
        <div className='recipe-card'>
            <h4>{recipe.name}</h4>
            <div className='recipe-card-content'>
                <p>Ingredients:</p>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>&bull; {ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className='recipe-card-content'>
                <p>Instructions:</p>
                <ol>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
        </div>
    );
}

export default Recipe;