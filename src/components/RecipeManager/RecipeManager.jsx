import React from 'react';
import { useState } from 'react';
import Recipe from './Recipe';

function RecipeManager() {
  //List for recipes
  const [recipes, setRecipes] = useState([]);


  /*Code review: I used useStates to manage multiple states. 
  This is beneficial because it helps keep the state updated and synchronized with user input, 
  which is essential in form-driven interfaces.
  Now I feel like I understand the topic much better and feel comfortable with it.*/
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

        /*Code Review:
        The split and trim methods were new to me, and it was very insightful to learn you can use a specific character to split
        the user input into smaller bits. For clarity, I used , for ingredients and . for instructions.*/
        const newRecipe = {
            id: Date.now(),
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
            <div className='recipe-manager'>
              <h3>Add new recipe</h3>
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
                <label className='instructions'>(Seperate by commas ",") </label>
                <textarea
                    placeholder="Enter ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
              </div>
              <div>
              <label>Instructions: </label>
              <label className='instructions'>(Seperate by periods ".")</label>
                <textarea
                    placeholder="Enter instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
              </div>
                <button onClick={addRecipe}>Add Recipe</button>
            </div>
 
            <h2>Recipes</h2> 
            <div className='recipes'>
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
