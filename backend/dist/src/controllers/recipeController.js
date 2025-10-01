"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestRecipe = void 0;
const recipeService_js_1 = require("../services/recipeService.js");
const suggestRecipe = async (req, res) => {
    try {
        const { ingredients } = req.body;
        if (!ingredients || ingredients.trim().length === 0) {
            return res.status(400).json({ success: false, error: "bahan makanan wajib diisi" });
        }
        const recipe = await (0, recipeService_js_1.generateRecipe)(ingredients);
        res.json({ success: true, data: recipe });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "permintaan gagal diproses" });
    }
};
exports.suggestRecipe = suggestRecipe;
//# sourceMappingURL=recipeController.js.map