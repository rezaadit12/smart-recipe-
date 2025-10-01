"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const logRequest = (req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(chalk_1.default.blue(`[${req.method}]`), chalk_1.default.green("request to path:"), chalk_1.default.white(req.path), chalk_1.default.yellow(`at ${new Date().toISOString()}`), chalk_1.default.magenta(`duration: ${duration}ms`));
    });
    next();
};
exports.default = logRequest;
//# sourceMappingURL=logRequest.js.map