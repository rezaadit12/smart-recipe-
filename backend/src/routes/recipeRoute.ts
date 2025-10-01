import { Router } from "express";
import { suggestRecipe } from "../controllers/recipeController.js";

const router = Router();

router.post("/generate", suggestRecipe);

export default router;
