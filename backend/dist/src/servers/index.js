"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_js_1 = require("../middlewares/error.js");
const recipeRoute_js_1 = __importDefault(require("../routes/recipeRoute.js"));
const logRequest_js_1 = __importDefault(require("../middlewares/logRequest.js"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(logRequest_js_1.default);
app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "Smart Recipe Index",
        data: { status: "ok", time: new Date().toISOString() }
    });
});
app.use("/api/recipes", recipeRoute_js_1.default);
app.use((_req, res) => {
    res.status(404).json({ success: false, error: { code: "not found", message: "route tidak tersedia" } });
});
app.use(error_js_1.errorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map