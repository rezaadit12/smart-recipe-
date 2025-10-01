"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openai = exports.openaiModel = void 0;
const openai_1 = __importDefault(require("openai"));
if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY tidak ditemukan');
}
exports.openaiModel = process.env.OPENAI_MODEL_VERSION || 'gpt-4o-mini';
exports.openai = new openai_1.default({ apiKey: process.env.OPENAI_API_KEY });
//# sourceMappingURL=openai.js.map