"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, _req, res, _next) {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        error: {
            message: err.message || 'internal server error',
            details: err.details ?? undefined
        }
    });
}
//# sourceMappingURL=error.js.map