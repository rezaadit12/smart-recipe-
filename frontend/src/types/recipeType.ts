export interface RecipeTime {
    prep: string;
    cook: string;
    total: string;
}

export interface RecipeData {
    title: string;
    description: string;
    servings: string;
    time: RecipeTime;
    ingredients: string[];
    steps: string[];
    tips?: string[];
}

export interface RecipeErrorData {
    success: false;
    message: string;
}

export interface RecipeResponse {
    success: boolean;
    data?: {
        success: boolean;
        data?: RecipeData;
        message?: string;
    } | RecipeErrorData;
    message?: string;
    error?: string;
}
