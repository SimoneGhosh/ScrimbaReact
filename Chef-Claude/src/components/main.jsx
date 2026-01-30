import React from "react";
import IngredientsList from "./ingredientsList";
import ClaudeRecipe from "./claudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "egg",
    "flour",
    "sugar",
    "butter",
  ]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  const [recipeShown, setRecipeShown] = React.useState(false);

  function toggleRecipeShown() {
    setRecipeShown(prev => !prev);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. egg"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <IngredientsList toggle={toggleRecipeShown} ingredients={ingredients}/>

      <ClaudeRecipe showRecipe={recipeShown} />
    </main>
  );
}
