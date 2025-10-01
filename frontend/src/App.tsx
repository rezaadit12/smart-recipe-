import { useState } from "react";
import RecipeForm from "@components/recipeForm";
import RecipeView from "@components/recipeView";
import type { RecipeData } from "./types/recipeType";

export default function App() {
  const [recipe, setRecipe] = useState<RecipeData | null>(null);

  return (
    <div className="container container-narrow py-4">
      <RecipeForm onResult={setRecipe} />
      <RecipeView recipe={recipe} />
    </div>
  );
}
