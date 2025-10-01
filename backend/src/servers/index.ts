import express from "express";
import cors from "cors";
import { errorHandler } from "../middlewares/error.js";
import recipeRoute from "../routes/recipeRoute.js";
import logRequest from "../middlewares/logRequest.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(logRequest);

app.get("/", (_req, res) => {
    res.json({ 
        success: true, 
        message: "Smart Recipe Index",
        data: { status: "ok", time: new Date().toISOString() }
    });
});

app.use("/api/recipes", recipeRoute);

app.use((_req, res) => {
    res.status(404).json({ success: false, error: { code: "not found", message: "route tidak tersedia" } });
});

app.use(errorHandler);

export default app;
