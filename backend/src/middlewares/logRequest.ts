import { Request, Response, NextFunction } from "express";
import chalk from "chalk";

const logRequest = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(
            chalk.blue(`[${req.method}]`),
            chalk.green("request to path:"),
            chalk.white(req.path),
            chalk.yellow(`at ${new Date().toISOString()}`),
            chalk.magenta(`duration: ${duration}ms`)
        );
    });

    next();
};

export default logRequest;
