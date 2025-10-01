"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipeController_js_1 = require("../controllers/recipeController.js");
const router = (0, express_1.Router)();
router.post("/generate", recipeController_js_1.suggestRecipe);
exports.default = router;
//# sourceMappingURL=recipeRoute.js.map