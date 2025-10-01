"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const index_js_1 = __importDefault(require("./servers/index.js"));
const PORT = process.env.PORT || 3000;
const APP_URL = process.env.APP_URL || 'http://localhost';
index_js_1.default.listen(PORT, () => console.log(`backend running on ${APP_URL}:${PORT}`));
//# sourceMappingURL=index.js.map