import { Request, Response } from "express";
import { generateRecipe } from "../services/recipeService.js";

export const suggestRecipe = async (req: Request, res: Response) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.trim().length === 0) {
      return res.status(400).json({ success: false, error: "bahan makanan wajib diisi" });
    }

    const recipe = await generateRecipe(ingredients);
    res.json({ success: true, data: recipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "permintaan gagal diproses" });
  }
};
