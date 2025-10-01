import { request } from "./client";
import type { RecipeResponse } from "../types/recipeType";

export async function generateRecipe(
    ingredients: string,
    signal?: AbortSignal
): Promise<RecipeResponse> {
    return request<RecipeResponse>(
        "/api/recipes/generate",
        {
            method: "POST",
            body: JSON.stringify({ ingredients }),
        },
        signal
    );
}