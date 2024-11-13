import React from 'react';
import { useState } from 'react';
import Recipe from './Recipe';

function RecipeManager() {
  //List for recipes
  const [recipes, setRecipes] = useState([]);
  let counter = 1;

  // Input fields
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');


      // Adding a new recipe
      const addRecipe = () => {
        // Check if all fields are filled out
        if (!name || !ingredients || !instructions) {
            alert("Please fill out all fields.");
            return;
        }
        
        // Create a new recipe object
        const newRecipe = {
            id: counter++,
            name: name,
            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
            instructions: instructions.split('.').map(instruction => instruction.trim())
        };
        
        // Add to the list
        setRecipes([...recipes, newRecipe]);

        // Clear the input fields
        setName('');
        setIngredients('');
        setInstructions('');
    };

    // Deleting a recipe
    const deleteRecipe = (id) => {
        const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
        setRecipes(updatedRecipes);
    };

    return (
        <div>
            <h2>Recipe Manager</h2>
            <div>
              <h3>Add new recipe</h3>
              <label>Seperate Ingredients by commas ","</label>
              <label>Seperate Instructions by periods "."</label>
              <div>
                <label>Recipe name: </label>
              <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Ingredients: </label>
                <textarea
                    placeholder="Enter ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
              </div>
              <div>
              <label>Instructions: </label>
                <textarea
                    placeholder="Enter instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
              </div>
                <button onClick={addRecipe}>Add Recipe</button>
            </div>

            <div>
                <h3>Recipes</h3>
                {recipes.map((recipe) => (
                    <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    deleteRecipe={deleteRecipe}
                />
                ))}
            </div>
        </div>
    );
}

export default RecipeManager;
